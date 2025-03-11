import BlogPage from '@/views/blogsPage/blogPage/blogPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <BlogPage />
}
