import WebDesignPage from '@/views/services/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Услуга | Веб-дизайн',
  description: 'Услуга | Веб-дизайн'
}

export default function Home() {
  return <WebDesignPage />
}
