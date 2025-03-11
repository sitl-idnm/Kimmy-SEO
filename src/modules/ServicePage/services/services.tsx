import { FC } from 'react'
import classNames from 'classnames'

import styles from './services.module.scss'
import { ServicesProps } from './services.types'
import { ServicesData } from '@/shared/types/services'
import servicesData from '@/shared/dataServices/services.json'
import { Button } from '@/ui'

const Services: FC<ServicesProps> = ({
  className,
  mainPage
}) => {
  const rootClassName = classNames(styles.root, className)

  const { services } = servicesData as ServicesData

  return (
    <div className={rootClassName}>
      {services.map((service) => (
        <div key={service.id} className={styles.service}>
          <div className={styles.service__content}>
            <h3 className={styles.service__content__title}>{service.title}</h3>
            <p className={styles.service__content__description}>{service.description}</p>
          </div>
          <div className={styles.service__footer}>
            {
              !mainPage &&
              <p className={styles.service__footer__price}>{service.price}</p>
            }
            <div className={styles.service__footer__line}></div>
            <Button tag='a' href={`/services/${service.slug}`} className={styles.service__footer__button}>Подробнее</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
