

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SmmPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('smm')

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    // title: 'Кастомный заголовок',
    // description: 'Кастомное описание',
    // keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title || serviceData?.title || 'SMM',
    description: customMetadata.description || serviceData?.description || 'Поможем найти, прогреть и удержать потенциальных и реальных клиентов в ваших аккаунтах в социальных сетях',
    keywords: customMetadata.keywords || [serviceData?.title?.toLowerCase() || 'smm', 'услуги', 'разработка'].filter(Boolean)
  }
}

const SmmPage: FC<SmmPageProps> = () => {
  const serviceData = getServiceData('smm')

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

export default SmmPage