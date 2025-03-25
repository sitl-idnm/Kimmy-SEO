import { ServiceData } from '@/shared/types/services'

export const seoData: ServiceData = {
  id: 'seo-optimization',
  slug: 'seo',
  title: 'SEO оптимизация',
  description: 'Комплексное продвижение вашего сайта в поисковых системах',
  price: 'от 50 000 ₽',
  categoryId: 'traffic',
  features: [
    'Технический аудит сайта',
    'Анализ конкурентов',
    'Составление семантического ядра',
    'Внутренняя оптимизация',
    'Внешняя оптимизация',
    'Работа с контентом'
  ],
  technologies: [
    'Google Analytics',
    'Яндекс.Метрика',
    'Screaming Frog',
    'Ahrefs',
    'Key Collector'
  ]
}
