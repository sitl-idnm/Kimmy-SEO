import Company from '@/views/company/company'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'О компании',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <Company />
}
