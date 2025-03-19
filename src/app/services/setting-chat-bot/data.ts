export interface ServiceData {
  slug: string
  title: string
  description: string
  price: string
  features?: string[]
  technologies?: string[]
}

export const settingchatbotData: ServiceData = {
  slug: 'setting-chat-bot',
  title: 'Настройка чат-ботов',
  description: 'Настроим чат-бота для оптимизации бизнес-процессов',
  price: 'от 50 000 ₽'
}