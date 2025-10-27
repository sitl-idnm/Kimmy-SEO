import ContactsPage from '@/views/contactsPage/contactsPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
	title: 'Контакты',
	description: ''
}

export default function Home() {
	return <ContactsPage />
}
