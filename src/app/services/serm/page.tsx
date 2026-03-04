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
    title: serviceData ? `${serviceData.title} — репутация в поиске | K.KIM` : 'SERM | K.KIM',
    description: serviceData?.description
      ? `${serviceData.description}. От ${serviceData.price}. Защитите репутацию бренда с K.KIM.`
      : 'Управление репутацией в поисковых системах: работа с негативом, мониторинг упоминаний. Закажите консультацию.',
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
