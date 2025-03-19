import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { NoCodePageProps } from './page.types'
import { IntroWorkUs } from '@/modules/introWorkUs'

const NoCodePage: FC<NoCodePageProps> = ({ className }) => {
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

export default NoCodePage
