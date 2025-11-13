

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { RazrabotkaChatBotovPageProps } from './page.types'
import type { Metadata } from 'next'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'

import AcceptIcon from '@icons/accept.svg'
import { Faq } from '@/modules/faq'
import { ExpandableContent } from '@/modules/expandableContent'
import { Branch } from '@/modules/branch'
import { Clients } from '@/modules/clients'
import { FormSecond } from '@/modules/formSecond'
import { Case } from '@/modules/case'

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
        className={styles.marginTop}
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
      <ExpandableContent
        title="Наши решения по созданию и внедрению чат-ботов"
        intro="Разработка и внедрение чат-ботов включает создание и интеграцию под конкретные задачи компании."
        firstCards={
          <Branch
            showTitle={false}
            branchData={[{
              title: 'Telegram — быстрые ответы и автоматизация заявок.',
              backgroundColor: '#18181B',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
            },
            {
              title: 'WhatsApp — удобный мессенджер для поддержки клиентов.',
              backgroundColor: '#F9F9F9',
              textColor: '#18181B',
              linkText: '',
              linkColor: '',
            },
            {
              title: 'ВКонтакте — для вовлечения аудитории в сообществе.',
              backgroundColor: '#CB172C',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
            }
            ]}
          />
        }
        first={{
          heading: 'Разработка чат-бота для мессенджеров',
          paragraphs: [
            'Бот может быть встроен в ваш сайт или корпоративный сервис, став частью бизнес-процесса.',
          ],
        }}
        second={{
          heading: 'Внедрение чат-бота на вашу платформу',
          paragraphs: [
            'Интегрируем бота в ваш сервис, сайт или приложение.',
            'Бот становится частью рабочего процесса вашей компании.',
          ],
        }}
        secondCards={
          <Branch
            showTitle={false}
            branchData={[{
              title: 'Стоимость работ от 10000р.',
              backgroundColor: '#18181B',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
            },
            {
              title: 'Срок от 3х дней.',
              backgroundColor: '#CB172C',
              textColor: '#FFFFFF',
              linkText: '',
              linkColor: '',
            }
            ]}
          />
        }
      />
      <Why
        direction="row"
        titleJustify='center'
        titleAlign='center'
        cardsPerRow={3}
        title="Как проходит процесс разработки?"
        itemsData={[{
          icon: '',
          title: "1.",
          description: <>Анализ целей и&nbsp;задач вашего бизнеса.</>
        },
        {
          icon: '',
          title: "2.",
          description: <>Проектирование сценариев работы с&nbsp;пользователем.</>
        },
        {
          icon: '',
          title: "3.",
          description: <>Непосредственно разработка функционала.</>
        },
        {
          icon: '',
          title: "4.",
          description: <>Тестирование и&nbsp;внедрение решения.</>
        },
        {
          icon: '',
          title: "5.",
          description: <>Постоянная поддержка и&nbsp;развитие проекта.</>
        }]}
      />
      <Clients title="Нам доверяют" />
      <Why
        direction="row"
        titleJustify='center'
        titleAlign='center'
        cardsPerRow={2}
        title="Почему заказывают разработку чат-бота у нас?"
        itemsData={[{
          icon: <AcceptIcon />,
          title: <>Комплексный подход от&nbsp;идеи до&nbsp;внедрения.</>,
          description: ""
        },
        {
          icon: <AcceptIcon />,
          title: <>Понимание задач вашего бизнеса.</>,
          description: ""
        },
        {
          icon: <AcceptIcon />,
          title: <>Боты действительно помогают и&nbsp;работают.</>,
          description: ""
        },
        {
          icon: <AcceptIcon />,
          title: <>Прозрачная разработка и&nbsp;понятные решения.</>,
          description: ""
        }]}
      />
      <Why
          counter
          direction="row"
          titleJustify='start'
          titleAlign='start'
          cardsPerRow={3}
          title="Немного статистики"
          itemsData={[{
            icon: '',
            title: '15',
            description: "сотрудников в штате"
          },
          {
            icon: '',
            title: '5',
            description: "отделов"
          },
          {
            icon: '',
            title: '150+',
            description: "реализованных проектов "
          },
          {
            icon: '',
            title: '10 000+',
            description: "приведенных лидов"
          },
          {
            icon: '',
            title: '32',
            description: "платных сервиса использует команда ежемесячно"
          },
          {
            icon: '',
            title: '4',
            description: "модели ИИ помогают сотрудникам в работе"
          }]}
        />
      <Case />
      <Faq
        faqData={FaqData}
        title="Ответы на часто задаваемые вопросы"
      />
      <FormSecond
        widthImg={400}
        heightImg={400}
        positionRight={'100px'}
        positionTop={'250px'}
        title='Заказать разработку чат-бота для вашего бизнеса'
        paragraph = 'Закажите разработку чат-бота для бизнеса и он начнет работать эффективнее уже сегодня. Запишитесь на бесплатную консультацию, где мы сможем обсудить ваш проект.'
      />
    </main>
  )
}

export default RazrabotkaChatBotovPage
