import Reviews from '@/views/reviews/reviews'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Отзывы',
	description: ''
}

export default function Home() {
	return <Reviews />
}
