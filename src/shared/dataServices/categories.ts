import { ServiceCategory } from '@/shared/types/services'

export const categories: ServiceCategory[] = [
	{
		id: 'seo',
		slug: 'seo',
		title: 'SEO оптимизация',
		description: 'Комплекс мер по оптимизации сайта для поисковых систем'
	},
	{
		id: 'smm',
		slug: 'smm',
		title: 'SMM продвижение',
		description: 'Продвижение в социальных сетях'
	},
	{
		id: 'web',
		slug: 'web-design',
		title: 'Веб-дизайн',
		description: 'Создание современного дизайна для вашего сайта'
	},
	{
		id: 'serm',
		slug: 'serm',
		title: 'SERM',
		description: 'Управление репутацией в поисковых системах'
	}
]
