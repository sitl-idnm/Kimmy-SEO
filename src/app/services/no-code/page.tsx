'use client'

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { NoCodePageProps } from './page.types'
import { IntroWorkUs } from '@/modules/introWorkUs'

export default function NoCodePage({ className }: NoCodePageProps) {
  const serviceData = getServiceData('no-code')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <IntroWorkUs />
      <ServicePageTemplate />
    </main>
  )
}
