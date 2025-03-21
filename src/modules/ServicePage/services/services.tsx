'use client'

import { FC, useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './services.module.scss'
import { ServicesProps } from './services.types'
import { getAllServices, ServiceData } from '@/shared/dataServices'
import { Button } from '@/ui'
import Link from 'next/link'

const defaultDescription = '* Наше агентство работает в формате почасовой оплаты труда. Стоимость проекта будет зависеть от количества фактически отработанных часов специалистами агентства.'

const Services: FC<ServicesProps> = ({
  className,
  hasCost = false,
  showDescription = true,
  descriptionText = defaultDescription
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

  const services: ServiceData[] = getAllServices()

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
        {visibleServices.map((service: ServiceData) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={styles.service}
            style={!hasCost ? { height: '273px' } : {}}
          >
            <div className={styles.service__content}>
              <h3 className={styles.service__content__title}>{service.title}</h3>
              <p className={styles.service__content__description}>{service.description}</p>
            </div>
            <div className={styles.service__footer}>
              {
                hasCost &&
                <p className={styles.service__footer__price}>{service.price}</p>
              }
              <div className={styles.service__footer__line}></div>
              <Link href={`/services/${service.slug}`} className={styles.service__footer__button}>Подробнее</Link>
            </div>
          </Link>
        ))}
      </div>

      {isMobile && !hasCost && services.length > 6 && !showAll && (
        <div className={styles.showMoreContainer}>
          <Button onClick={handleShowMore} className={styles.showMoreButton}>
            Показать еще
          </Button>
        </div>
      )}
      {showDescription && (
        <p className={styles.services__description}>{descriptionText}</p>
      )}
    </div>
  )
}

export default Services
