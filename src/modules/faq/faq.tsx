'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'
import FaqIcon from '@icons/faq.svg'

import styles from './faq.module.scss'
import { FaqProps } from './faq.types'

const faqData = [
  {
    title: "Как понять, какие маркетинговые стратегии мне нужны?",
    content: "Мы проведем детальный анализ вашего бизнеса, целевой аудитории и конкурентов. На основе этих данных разработаем индивидуальную маркетинговую стратегию, которая будет соответствовать вашим целям и бюджету."
  },
  {
    title: "Чем ваше агентство отличается от других?",
    content: "Мы предлагаем комплексный подход к маркетингу, индивидуальные решения и прозрачную отчетность. Наша команда состоит из опытных специалистов в различных областях digital-маркетинга, что позволяет нам эффективно решать любые задачи."
  },
  {
    title: "Можно ли работать с вами на разовой основе?",
    content: "Да, мы предлагаем как долгосрочное сотрудничество, так и выполнение отдельных проектов. Вы можете заказать у нас разовые услуги или консультации по конкретным вопросам маркетинга."
  }
]

const FaqComponent: FC<FaqProps> = ({
  className,
  faqData,
  title = 'Часто задаваемые вопросы'
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const rootClassName = classNames(styles.root, className)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.faqList}>
          {faqData.map((item: { title: string; content: string }, index: number) => (
            <div
              key={index}
              className={classNames(styles.faqItem, {
                [styles.active]: activeIndex === index
              })}
            >
              <button
                className={styles.question}
                onClick={() => toggleQuestion(index)}
              >
                {item.title}
                <div className={styles.icon}>
                  <FaqIcon />
                </div>
              </button>
              <div className={styles.answer}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqComponent
