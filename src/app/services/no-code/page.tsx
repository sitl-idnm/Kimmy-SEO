'use client'

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { NoCodePageProps } from './page.types'

export default function NoCodePage(props: NoCodePageProps) {
  const serviceData = getServiceData('no-code')

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
