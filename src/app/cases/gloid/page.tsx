import GloidPage from '@/views/casesPage/cases/gloidPage/gloidPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: англоязычный лендинг приложения Gloid | K.KIM',
  description: 'Разработка сайта для приложения двухфакторной аутентификации на Webflow. Современный дизайн, демонстрация интерфейса. Кейс K.KIM.'
}

export default function Home() {
  return <GloidPage />
}
