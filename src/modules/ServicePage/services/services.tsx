'use client'

import { FC, useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './services.module.scss'
import { ServicesProps } from './services.types'
import { ServicesData } from '@/shared/types/services'
import servicesData from '@/shared/dataServices/services.json'
import { Button } from '@/ui'
import Link from 'next/link'

const Services: FC<ServicesProps> = ({
  className,
  mainPage
}) => {
  const rootClassName = classNames(styles.root, className)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showAll, setShowAll] = useState<boolean>(false)

  useEffect(() => {
    // Функция для проверки разрешения экрана
    const checkResolution = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Проверяем разрешение при монтировании компонента
    checkResolution()

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', checkResolution)

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', checkResolution)
    }
  }, [])

  const { services } = servicesData as ServicesData

  // Определяем, сколько сервисов показывать
  const visibleServices = isMobile && !showAll ? services.slice(0, 6) : services;

  // Функция для показа всех сервисов
  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Услуги</h2>
      <div className={rootClassName}>
        {visibleServices.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className={styles.service}
            style={mainPage ? { height: '273px' } : {}}
          >
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
              <Link href={`/services/${service.slug}`} className={styles.service__footer__button}>Подробнее</Link>
            </div>
          </Link>
        ))}
      </div>

      {isMobile && mainPage && services.length > 6 && !showAll && (
        <div className={styles.showMoreContainer}>
          <Button onClick={handleShowMore} className={styles.showMoreButton}>
            Показать еще
          </Button>
        </div>
      )}
    </div>
  )
}

export default Services
