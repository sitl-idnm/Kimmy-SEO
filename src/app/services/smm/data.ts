import { ServiceData } from '@/shared/types/services'

export const smmData: ServiceData = {
  id: 'smm-promotion',
  slug: 'smm',
  title: 'SMM продвижение',
  description: 'Продвижение вашего бренда в социальных сетях',
  price: 'от 40 000 ₽',
  categoryId: 'marketing',
  features: [
    'Анализ целевой аудитории',
    'Разработка контент-стратегии',
    'Создание и оформление аккаунтов',
    'Ведение социальных сетей',
    'Таргетированная реклама',
    'Работа с блогерами'
  ],
  technologies: [
    'Facebook Ads',
    'Instagram',
    'VK Ads',
    'TikTok',
    'Telegram'
  ]
}
