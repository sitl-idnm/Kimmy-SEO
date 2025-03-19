export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const sermData: ServiceData = {
  slug: 'serm',
  title: 'SERM',
  description: 'Создадим положительное мнение пользователей о вашей компании в поисковых системах',
  price: 'от 40 000 ₽'
}