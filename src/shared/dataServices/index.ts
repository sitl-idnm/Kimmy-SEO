import { webDesignData } from '@/app/services/web-design/data'
import type { ServiceData } from '@/app/services/web-design/data'
import { sermData } from '@/app/services/serm/data'
import { seoData } from '@/app/services/seo/data'
import { nocodeData } from '@/app/services/no-code/data'
import { settingchatbotData } from '@/app/services/setting-chat-bot/data'

export type { ServiceData }

// Объект со всеми услугами
export const servicesData: Record<string, ServiceData> = {'web-design': webDesignData,
  'serm': sermData,
  'seo': seoData,
  'no-code': nocodeData,
  'setting-chat-bot': settingchatbotData}

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
