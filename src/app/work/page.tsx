import WorkUsPage from '@/views/workUsPage/workUsPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Заказать услуги интернет-маркетинга — K.KIM',
  description: 'Закажите интернет-маркетинг, разработку сайта или SEO у K.KIM. Бесплатная консультация. Работаем по всей России.'
}

export default function Home() {
  return <WorkUsPage />
}
