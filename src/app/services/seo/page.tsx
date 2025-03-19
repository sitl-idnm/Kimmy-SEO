

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SeoPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('seo')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    title: 'Кастомный заголовок',
    description: 'Кастомное описание',
    keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || 'SEO',
    description: customMetadata.description || serviceData?.description || 'Оптимизируем сайты для поисковых систем и выведем их в ТОП10 выдачи',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || 'seo', 'услуги', 'разработка'].filter(Boolean)
  }
}

const SeoPage: FC<SeoPageProps> = () => {
  const serviceData = getServiceData('seo')

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
      <ServicePageTemplate />
    </main>
  )
}

export default SeoPage
