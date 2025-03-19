import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { SeoPageProps } from './page.types'

const SeoPage: FC<SeoPageProps> = ({ className }) => {
  const serviceData = getServiceData('seo')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
		  <ServicePageTemplate />
		</main>
  )
}

export default SeoPage
