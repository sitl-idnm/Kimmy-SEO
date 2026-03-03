import Reviews from '@/views/reviews/reviews'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Отзывы клиентов о K.KIM Agency',
  description: 'Реальные отзывы о маркетинговом агентстве K.KIM. Разработка, дизайн, SEO, SMM. 150+ проектов, 10000+ лидов. Оставьте свой отзыв.'
}

export default function Home() {
	return <Reviews />
}
