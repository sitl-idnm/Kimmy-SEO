import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { CermPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('cerm')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    title: 'CERM',
    description: 'Кастомное описание',
    keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || 'CERM',
    description: customMetadata.description || serviceData?.description || 'Создадим положительное мнение пользователей о вашей компании в поисковых системах',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || 'cerm', 'услуги', 'разработка'].filter(Boolean)
  }
}

const CermPage: FC<CermPageProps> = () => {
  const serviceData = getServiceData('cerm')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root)

  return (
    <main className={rootClassName}>
      <IntroWorkUs />
      <ServicePageTemplate />
    </main>
  )
}

export default CermPage
