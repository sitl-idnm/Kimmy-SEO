import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { WebDesignPageProps } from './page.types'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('web-design')

  const customMetadata = {
    title: 'Услуга Веб-дизайн',
    description: 'Профессиональные услуги веб-дизайна',
    keywords: ['веб-дизайн', 'дизайн сайтов', 'UI/UX дизайн', 'веб-разработка']
  }

  return {
    title: customMetadata.title || serviceData?.title,
    description: customMetadata.description || serviceData?.description,
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || '', 'услуги', 'разработка'].filter(Boolean)
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
      <IntroWorkUs />
      <ServicePageTemplate />
    </main>
  )
}

export default WebDesignPage
