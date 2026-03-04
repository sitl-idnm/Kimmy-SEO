import { FC } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'
import Link from 'next/link'
import { getAllServices } from '@/shared/dataServices'

const Navigation: FC<NavigationProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const services = getAllServices()

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li><Link href="/" className={styles.navigation__item}>Главная</Link></li>
          <li className={styles.navigation__servicesWrap}>
            <Link href="/services" className={styles.navigation__item}>Услуги</Link>
            <div className={styles.navigation__dropdown}>
              <ul className={styles.navigation__dropdownList}>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className={styles.navigation__dropdownItem}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li><Link href="/cases" className={styles.navigation__item}>Кейсы</Link></li>
          <li><Link href="/company" className={styles.navigation__item}>О компании</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Видео о нас</Link></li>
          <li><Link href="/vacancies" className={styles.navigation__item}>Вакансии</Link></li>
          <li><Link href="/blogpage" className={styles.navigation__item}>Блог</Link></li>
          <li><Link href="/reviews" className={styles.navigation__item}>Отзывы</Link></li>
          <li><Link href="/contacts" className={styles.navigation__item}>Контакты</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
