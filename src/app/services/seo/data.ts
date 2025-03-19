export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const seoData: ServiceData = {
  slug: 'seo',
  title: 'SEO',
  description: 'Оптимизируем сайты для поисковых систем и выведем их в ТОП10 выдачи',
  price: 'от 20 000 ₽'
}