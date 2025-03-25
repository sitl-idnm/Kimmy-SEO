import { ServiceData } from '@/shared/types/services'

export const sermData: ServiceData = {
  id: 'serm-management',
  slug: 'serm',
  title: 'SERM',
  description: 'Управление репутацией в поисковых системах',
  price: 'от 60 000 ₽',
  categoryId: 'marketing',
  features: [
    'Мониторинг упоминаний',
    'Работа с негативом',
    'Создание положительного контента',
    'Продвижение репутации',
    'Вытеснение негатива',
    'Аналитика и отчетность'
  ],
  technologies: [
    'Brand Analytics',
    'YouScan',
    'IQBuzz',
    'Медиалогия',
    'СКАН Интерфакс'
  ]
}
