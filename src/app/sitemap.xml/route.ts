import path from 'path'
import fs from 'fs'

export const revalidate = 86400 // regenerate once per day

function getBaseUrl(): string {
	const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
	if (envUrl) return envUrl.replace(/\/$/, '')
	return 'https://kim.agency'
}

function readBlogSlugs(): string[] {
	try {
		const dataPath = path.join(process.cwd(), 'src', 'shared', 'dataBlogs', 'blogs.json')
		const file = fs.readFileSync(dataPath, 'utf-8')
		const json = JSON.parse(file) as { blogs?: { slug: string }[] }
		return (json.blogs || []).map((b) => b.slug).filter(Boolean)
	} catch {
		return []
	}
}

function collectStaticAppRoutes(): string[] {
	const appDir = path.join(process.cwd(), 'src', 'app')
	const routes: string[] = []

	function walk(dir: string, baseRoute: string) {
		const entries = fs.readdirSync(dir, { withFileTypes: true })
		const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
		const hasRoute = entries.some((e) => e.isFile() && e.name === 'route.ts')

		if (hasPage || hasRoute) {
			routes.push(baseRoute || '/')
		}

		for (const entry of entries) {
			if (entry.isDirectory()) {
				const name = entry.name
				if (
					name.startsWith('(') ||
					name.startsWith('_') ||
					name.startsWith('[') ||
					name === 'api' ||
					(baseRoute === '/' && name === 'sitemap.xml')
				) {
					continue
				}
				const childDir = path.join(dir, name)
				const childRoute = baseRoute === '/' ? `/${name}` : `${baseRoute}/${name}`
				walk(childDir, childRoute)
			}
		}
	}

	walk(appDir, '/')

	return Array.from(new Set(routes)).sort()
}

function getCaseSlugs(): string[] {
	const casesDir = path.join(process.cwd(), 'src', 'app', 'cases')
	try {
		return fs
			.readdirSync(casesDir, { withFileTypes: true })
			.filter((d) => d.isDirectory())
			.map((d) => d.name)
			.filter((name) => !name.startsWith('['))
	} catch {
		return []
	}
}

const caseSlugToImageDir: Record<string, string> = {
	'best-wave': 'bestwave',
	clientpulse: 'clientpulse',
	gloid: 'gloid',
	'magiya-vkusa': 'magiyavkusa',
	'rovnaya-spina': 'rovnayaspina',
	sweetcorp: 'sweetcorp',
}

function listCaseImages(slug: string): string[] {
	const imagesDirName = caseSlugToImageDir[slug]
	if (!imagesDirName) return []

	const dir = path.join(process.cwd(), 'public', 'images', 'cases', imagesDirName)
	try {
		const files = fs
			.readdirSync(dir, { withFileTypes: true })
			.filter((f) => f.isFile())
			.map((f) => f.name)
			.filter((name) => /\.(png|jpe?g|webp|gif|svg)$/i.test(name))
		return files.map((name) => `/images/cases/${imagesDirName}/${name}`)
	} catch {
		return []
	}
}

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

export async function GET() {
	const baseUrl = getBaseUrl()
	const today = new Date().toISOString().split('T')[0]

	const staticRoutes = collectStaticAppRoutes()
	const blogSlugs = readBlogSlugs()
	const caseSlugs = getCaseSlugs()

	const blogRoutes = blogSlugs.map((slug) => `/blogs/${slug}`)
	const caseRoutes = caseSlugs.map((slug) => `/cases/${slug}`)

	const allRoutes = Array.from(
		new Set([...staticRoutes, ...blogRoutes, ...caseRoutes])
	)
		.filter((r) => r !== '/sitemap.xml')
		.sort()

	const urlEntries = allRoutes
		.map((routePath) => {
			const loc = `${baseUrl}${routePath === '/' ? '' : routePath}`

			const images = routePath.startsWith('/cases/')
				? listCaseImages(routePath.split('/').pop() as string)
				: []

			const imagesXml = images
				.map((imgPath) => {
					const imgLoc = `${baseUrl}${imgPath}`
					return `    <image:image>\n      <image:loc>${escapeXml(imgLoc)}</image:loc>\n    </image:image>`
				})
				.join('\n')

			const imageCountXml = images.length
				? `\n    <image_count>${images.length}</image_count>`
				: ''

			return (
				`  <url>\n` +
				`    <loc>${escapeXml(loc)}</loc>\n` +
				`    <lastmod>${today}</lastmod>\n` +
				`    <changefreq>daily</changefreq>\n` +
				`    <priority>${routePath === '/' ? '1.0' : '0.7'}</priority>\n` +
				(imagesXml ? imagesXml + imageCountXml + '\n' : '') +
				`  </url>`
			)
		})
		.join('\n')

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
		`${urlEntries}\n` +
		`</urlset>`

	return new Response(xml, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
		},
	})
}
