import { FC } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'
import Link from 'next/link'

const Navigation: FC<NavigationProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li><Link href="/" className={styles.navigation__item}>Главная</Link></li>
          <li><Link href="/services" className={styles.navigation__item}>Услуги</Link></li>
          <li><Link href="/cases" className={styles.navigation__item}>Кейсы</Link></li>
          <li><Link href="#" className={styles.navigation__item}>О компании</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Видео о нас</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Вакансии</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Блог</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Отзывы</Link></li>
          <li><Link href="#" className={styles.navigation__item}>Контакты</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
