import { FC } from 'react'
import classNames from 'classnames'

import styles from './favour.module.scss'
import { FavourProps } from './favour.types'
import { FavourItem } from '../favourItem'

const itemsData = [
  { title: 'Разработаем сайт,', text: 'основываясь на реальных потребностях пользователей', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/spiral.png' },
  { title: 'Адаптируем платформу', text: 'под конкретные бизнес-задачи', linkText: 'Подробнее', linkColor: 'var(--color-white-default)', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/flower.png' },
  { title: 'Балансируем удобство,', text: 'логику и привлекательный дизайн', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey-light)', textColor: 'var(--color-black)', imageSrc: '/images/sheeps.png' },
  { title: 'Повышаем продажи,', text: 'а не просто тратим бюджет', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/star.png' },
]

const Favour: FC<FavourProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.favour}>
        <ul className={styles.favour__list}>
          {itemsData.map((item, index) => (
            <FavourItem
              key={index}
              text={item.text}
              title={item.title}
              linkText={item.linkText}
              linkColor={item.linkColor}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              imageSrc={item.imageSrc}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Favour
