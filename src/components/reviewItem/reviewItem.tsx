import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './reviewItem.module.scss'
import { ReviewItemProps } from './reviewItem.types'

const ReviewItem: FC<ReviewItemProps> = ({
  className,
  name,
  position,
  text,
  avatar
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ReviewItem
