import type { Metadata } from 'next'
import BlogPage from '@/views/blogsPage/blogPage'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <BlogPage />
}
