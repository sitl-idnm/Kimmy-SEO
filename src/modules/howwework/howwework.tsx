'use client'

import { FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './howwework.module.scss'
import { HowWeWorkProps } from './howwework.types'

const steps = [
  {
    number: 1,
    title: 'Брифинг'
  },
  {
    number: 2,
    title: <>Подготовка коммерческого<br />предложения</>
  },
  {
    number: 3,
    title: <>Согласование плана<br />работ</>
  },
  {
    number: 4,
    title: <>Работа над проектом<br />и согласование каждого этапа</>
  },
  {
    number: 5,
    title: <>Завершение проекта<br />и предоставление отчетности</>
  }
]

const HowWeWorkComponent: FC<HowWeWorkProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как мы работаем?</h2>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <h3 className={styles.stepTitle}>{step.title}</h3>
              <span className={styles.number}>{step.number}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowWeWorkComponent
