import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SermPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData('serm')

  return {
    title: 'SERM — управление репутацией в поиске | K.KIM',
    description: 'Управление репутацией в поисковых системах: работа с негативом, мониторинг упоминаний. От 60 000 ₽. Защитите репутацию бренда с K.KIM.',
    keywords: ['serm', 'репутация', 'управление репутацией', 'негатив в поиске'].filter(Boolean)
  }
}

const SermPage: FC<SermPageProps> = () => {
  const serviceData = getServiceData('serm')

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

export default SermPage
