'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import styles from './review.module.scss'
import { ReviewProps } from './review.types'
import { ReviewItem } from '@/components'
import ArrowLeft from '@icons/arrow-left.svg'
import ArrowRight from '@icons/arrow-right.svg'

const reviewsData = [
  {
    name: 'Андрей Николаевич',
    position: 'SEO - SweetCorp',
    avatar: '/images/avatar.jpg',
    text: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедряло решения. Особенно впечатляет глубина погружения в наш бизнес и внимательное отношение к деталям.'
  },
  {
    name: 'Андрей Николаевич',
    position: 'SEO - SweetCorp',
    avatar: '/images/avatar.jpg',
    text: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедряло решения. Особенно впечатляет глубина погружения в наш бизнес и внимательное отношение к деталям.'
  },
  {
    name: 'Андрей Николаевич',
    position: 'SEO - SweetCorp',
    avatar: '/images/avatar.jpg',
    text: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедряло решения. Особенно впечатляет глубина погружения в наш бизнес и внимательное отношение к деталям.'
  },
  {
    name: 'Бублик Николаевич',
    position: 'SEO - SweetCorp',
    avatar: '/images/avatar.jpg',
    text: 'Хочу поблагодарить команду K.KIM за отличную работу! Мы обратились с задачей повысить трафик и конверсию на сайте, и результат превзошел ожидания. Агентство провело детальный анализ, разработало стратегию и оперативно внедряло решения. Особенно впечатляет глубина погружения в наш бизнес и внимательное отношение к деталям.'
  }
]

const Review: FC<ReviewProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = 424 // Ширина карточки + отступ
    const currentScroll = container.scrollLeft
    const newScroll = direction === 'left'
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Отзывы</h2>
          <div className={styles.controls}>
            <button
              className={styles.control}
              onClick={() => handleScroll('left')}
              aria-label="Предыдущий отзыв"
            >
              <ArrowLeft />
            </button>
            <button
              className={styles.control}
              onClick={() => handleScroll('right')}
              aria-label="Следующий отзыв"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.reviews} ref={scrollContainerRef}>
          {reviewsData.map((review, index) => (
            <ReviewItem
              key={index}
              name={review.name}
              position={review.position}
              avatar={review.avatar}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review
