export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const smmData: ServiceData = {
  slug: 'smm',
  title: 'SMM',
  description: 'Поможем найти, прогреть и удержать потенциальных и реальных клиентов в ваших аккаунтах в социальных сетях',
  price: 'от 70 000 ₽'
}