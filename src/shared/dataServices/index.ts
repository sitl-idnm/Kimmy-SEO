import { nocodeData } from '@/app/services/no-code/data'
import { smmData } from '@/app/services/smm/data'
import { cermData } from '@/app/services/cerm/data'
import { webdesignData } from '@/app/services/web-design/data'
import { seoData } from '@/app/services/seo/data'
import { ServiceData } from '@/app/services/no-code/data'

export type { ServiceData }

// Объект со всеми услугами
export const servicesData: Record<string, ServiceData> = {'no-code': nocodeData,
  'seo': seoData,
  'web-design': webdesignData,
  'cerm': cermData,
  'smm': smmData}

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
