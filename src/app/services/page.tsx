import type { Metadata } from 'next'
import ServicePage from '@/views/servicePage/servicePage'

export const metadata: Metadata = {
  title: 'Услуги | K.KIM',
  description: 'Услуги | K.KIM'
}

export default function Home() {
  return <ServicePage />
}
