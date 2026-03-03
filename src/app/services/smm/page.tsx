import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { SmmPageProps } from './page.types'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'SMM-продвижение в соцсетях — K.KIM Agency',
    description: 'Продвижение бренда в соцсетях: контент-стратегия, таргет, работа с блогерами. От 40 000 ₽/мес. Закажите SMM для вашего бизнеса.',
    keywords: ['smm', 'продвижение соцсетей', 'таргет', 'контент-стратегия', 'социальные сети'].filter(Boolean)
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
