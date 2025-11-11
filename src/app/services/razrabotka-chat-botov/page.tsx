

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { RazrabotkaChatBotovPageProps } from './page.types'
import type { Metadata } from 'next'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'

import AcceptIcon from '@icons/accept.svg'
import { Faq } from '@/modules/faq'
import { VacanciesModule } from '@/modules/vacanciesModule'

const FaqData = [
  {
    title: 'Сколько стоит создание чат-бота?',
    content: 'Стоимость зависит от функций и платформы, базовая цена — от х.'
  },
  {
    title: 'Какие задачи решает бот?',
    content: 'Продажи, поддержка, консультирование, опросы и автоматизация процессов.'
  },
  {
    title: 'В какие мессенджеры внедрять чат-бота?',
    content: 'Telegram, WhatsApp, ВКонтакте и другие платформы.'
  }
]

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('razrabotka-chat-botov')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    title: 'Разработка чат-ботов для бизнеса от K.KIM',
    description: 'Кастомное описание',
    keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || 'SEO',
    description: customMetadata.description || serviceData?.description || 'Оптимизируем сайты для поисковых систем и выведем их в ТОП10 выдачи',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || 'seo', 'услуги', 'разработка'].filter(Boolean)
  }
}

const RazrabotkaChatBotovPage: FC<RazrabotkaChatBotovPageProps> = () => {
  const serviceData = getServiceData('razrabotka-chat-botov')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <main className={rootClassName}>
      <IntroWorkUs
        title={serviceData?.title}
        text={serviceData?.description}
        highlightedText=""
      />
      <StandartText
          marginBottom={true}
          title='Чат-боты для бизнеса: автоматизация, которая работает на вас'
          texts={[
            'Разработка чат ботов — это способ упростить коммуникацию и повысить продажи без увеличения штата. Умные чат-боты помогают бизнесу работать эффективнее, автоматизируя ответы, обработку заказов и сбор данных от пользователей. Мы создаем чат-боты под ключ, адаптированные под ваши задачи, платформы и целевую аудиторию. Наши боты помогают компаниям в реализации и внедрении решений, экономя время и ресурсы. Каждый чат интегрируется в рабочие процессы, чтобы пользователь получал точный ответ на вопрос и быстро завершал продажу.'
          ]}
      />
      <Why
          direction="row"
          titleJustify='center'
          titleAlign='center'
          cardsPerRow={2}
          title="Что умеет наш чат-бот?"
          itemsData={[{
            icon: <AcceptIcon />,
            title: "Автоматизация продаж и привлечение новых клиентов.",
            description: ""
          },
          {
            icon: <AcceptIcon />,
            title: "Круглосуточная поддержка и обработка обращений.",
            description: ""
          },
          {
            icon: <AcceptIcon />,
            title: "Интеграция с любым сервисом и платформой.",
            description: ""
          },
          {
            icon: <AcceptIcon />,
            title: "Помощь в процессе оформления заказов.",
            description: ""
          }]}
        />
        <VacanciesModule />
        <Faq
          faqData={FaqData}
          title="Ответы на часто задаваемые вопросы"
        />
      <ServicePageTemplate />
    </main>
  )
}

export default RazrabotkaChatBotovPage
