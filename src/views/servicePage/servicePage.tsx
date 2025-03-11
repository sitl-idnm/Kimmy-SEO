import { FC } from 'react'
import classNames from 'classnames'

import styles from './servicePage.module.scss'
import { ServicePageProps } from './servicePage.types'
import { Services } from '@/modules/ServicePage/services'

const ServicePage: FC<ServicePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Services />
    </main>
  )
}

export default ServicePage
