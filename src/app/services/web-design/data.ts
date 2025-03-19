export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const webdesignData: ServiceData = {
  slug: 'web-design',
  title: 'Веб-дизайн',
  description: 'Разработаем дизайн веб-ресурса, электронного письма и материалов для онлайн-рекламы',
  price: 'от 60 000 ₽'
}