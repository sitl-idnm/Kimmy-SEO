import BlogPage from '@/views/blogsPage/blogPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Блог',
	description: ''
}

export default function Home() {
	return <BlogPage />
}
