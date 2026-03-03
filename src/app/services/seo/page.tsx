

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

  return {
    title: 'SEO-оптимизация сайта — продвижение в ТОП | K.KIM',
    description: 'Комплексное SEO: аудит, семантика, внутренняя и внешняя оптимизация. От 50 000 ₽. Выведем сайт в ТОП-10 Яндекса и Google. Закажите консультацию.',
    keywords: ['seo', 'продвижение сайтов', 'оптимизация', 'поисковое продвижение', 'топ выдачи'].filter(Boolean)
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
