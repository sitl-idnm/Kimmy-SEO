import Vacancies from '@/views/vacancies/vacancies'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Вакансии',
	description: ''
}

export default function Home() {
	return <Vacancies />
}
