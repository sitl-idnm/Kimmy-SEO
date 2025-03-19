import type { ServiceData } from '@/app/services/smm/data'
import { webdesignData } from '@/app/services/web-design/data'

import { smmData } from '@/app/services/smm/data'



// Объект со всеми услугами
export const servicesData: Record<string, ServiceData> = {'smm': smmData,
  'web-design': webdesignData}

// Функция для получения данных конкретной услуги
export const getServiceData = (slug: string): ServiceData | undefined => {
	return servicesData[slug]
}

// Функция для получения списка всех услуг
export const getAllServices = (): ServiceData[] => {
	return Object.values(servicesData)
}

// Функция для получения списка всех slug'ов услуг
export const getAllServiceSlugs = (): string[] => {
	return Object.keys(servicesData)
}
