

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { WebDesignPageProps } from './page.types'
import type { Metadata } from 'next'
import { Why } from '@/modules/why'
import { Conversion } from '@/modules/conversion'
import { Branch } from '@/modules/branch'
import { CardList } from '@/modules/cardList'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('web-design')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    title: 'Кастомный заголовок',
    description: 'Кастомное описание',
    keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || 'Веб-дизайн',
    description: customMetadata.description || serviceData?.description || 'Разработаем дизайн веб-ресурса, электронного письма и материалов для онлайн-рекламы',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || 'веб-дизайн', 'услуги', 'разработка'].filter(Boolean)
  }
}

const WebDesignPage: FC<WebDesignPageProps> = () => {
  const serviceData = getServiceData('web-design')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <main className={rootClassName}>
      <IntroWorkUs
        title="Услуга веб дизайна"
        text="Мы предлагаем вам заказать веб дизайн сайта, который поможет вам выделиться на фоне конкурентов и достичь поставленных целей. Мы разрабатываем дизайн веб-ресурсов, электронных писем и материалов для рекламы. "
        highlightedText=""
        buttonText="Заказать услугу"
        image={{
          src: '/images/abstractstar.png',
          alt: 'web-design-image',
          width: 1047,
          height: 411
        }}
      />
      <CardList />
      <Conversion />
      <Why
        counter
        direction="row"
        titleJustify='start'
        titleAlign='start'
        cardsPerRow={3}
        title="Об агентстве в&nbsp;цифрах"
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
      <Branch
        title="Кому подходят наши услуги?"
        itemsPerRow={2}
        listJustifyContent='center'
        listAlignItems='flex-start'
        branchData={[
          {
            title: 'Широкий спектр услуг',
            backgroundColor: '#F9F9F9',
            textColor: '#18181B',
            linkText: '',
            linkColor: '',
            imageSrc: '/images/star.png',
            list: [
              'Разработка веб-ресурсов',
              'Реализация маркетинговых стратегий',
              'SEO-оптимизация'
            ]
          },
          {
            title: 'Долгосрочные отношения с клиентами',
            backgroundColor: '#CB172C',
            textColor: '#FFFFFF',
            linkText: '',
            linkColor: '',
            imageSrc: '/images/star.png',
            list: [
              'Разработка SMM-стратегий и контент-маркетинга для поддержания активного взаимодействия с целевой аудиторией'
            ]
          },
          {
            title: 'Результативность',
            backgroundColor: '#18181B',
            textColor: '#FFFFFF',
            linkText: '',
            linkColor: '',
            imageSrc: '/images/star.png',
            list: [
              'Помощь в достижении высоких результатов в интернете',
              'Генерация большого количества трафика с различных источников '
            ]
          },
          {
            title: 'Индивидуальный подход',
            backgroundColor: '#F9F9F9',
            textColor: '#18181B',
            linkText: '',
            linkColor: '',
            imageSrc: '/images/star.png',
            list: [
              'Внимание к мелким деталям для удовлетворения потребностей клиентов',
              'Предложение инновационных и эффективных маркетинговых решений'
            ]
          }
        ]}
      />
      <ServicePageTemplate />
    </main>
  )
}

export default WebDesignPage
