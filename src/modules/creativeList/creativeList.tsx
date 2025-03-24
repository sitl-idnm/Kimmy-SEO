'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { CreativeListItem } from '@/components'
import styles from './creativeList.module.scss'
import { CreativeListProps } from './creativeList.types'
import { creativeListData } from './creativeList.data'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const CreativeList: FC<CreativeListProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    // Устанавливаем начальное состояние карточек
    gsap.set(cards, {
      yPercent: 100,
      opacity: 1,
      zIndex: (i) => cards.length - i // Задаем z-index чтобы карточки правильно перекрывались
    })

    // Создаем таймлайн для синхронизации пиннинга и анимации
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
        anticipatePin: 1 // Помогает избежать рывка при старте пиннинга
      }
    })

    // Добавляем анимации карточек в таймлайн
    cards.forEach((card, index) => {
      if (index === 0) {
        tl.to(card, {
          yPercent: 0,
          duration: 1
        })
      } else {
        tl.to(card, {
          yPercent: 0,
          duration: 1
        }, `>-0.5`) // Небольшой оверлап между анимациями
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className={rootClassName} ref={containerRef}>
      <div className={styles.cards}>
        {creativeListData.map((card, index) => (
          <div
            key={index}
            ref={el => {
              cardsRef.current[index] = el
            }}
            className={styles.cardWrapper}
          >
            <CreativeListItem
              {...card}
              className={styles.card}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreativeList
