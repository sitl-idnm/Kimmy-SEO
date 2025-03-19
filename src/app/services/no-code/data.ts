export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const nocodeData: ServiceData = {
  slug: 'no-code',
  title: 'Сайт no-code',
  description: 'Быстрое и недорогое решение как для лендингов, так и для многостраничников',
  price: 'от 40 000 ₽'
}