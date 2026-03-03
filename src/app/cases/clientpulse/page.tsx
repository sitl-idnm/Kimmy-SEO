import ClientPulsePage from '@/views/casesPage/cases/clientPulsePage/clientPulsePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кейс: многостраничный сайт ClientPulse для CDP | K.KIM',
  description: 'Разработка сайта для сервиса данных клиентов и программ лояльности. B2B сегмент, фирменный стиль. Кейс K.KIM.'
}

export default function Home() {
  return <ClientPulsePage />
}
