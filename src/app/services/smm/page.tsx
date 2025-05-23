import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SmmPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

  const customMetadata = {
    // Здесь можно переопределить метаданные вручную
    title: 'Кастомный заголовок',
    description: 'Кастомное описание',
    keywords: ['кастомные', 'ключевые', 'слова']
  }

  return {
    title: customMetadata.title,
    description: customMetadata.description,
    keywords: customMetadata.keywords.filter(Boolean)
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
      <IntroWorkUs
        title={serviceData.title}
        text={serviceData.description}
      />
      <ServicePageTemplate />
    </main>
  )
}

export default SmmPage
