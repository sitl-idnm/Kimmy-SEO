'use client'

import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { NoCodePageProps } from './page.types'

const NoCodePage: FC<NoCodePageProps> = () => {
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

export default NoCodePage
