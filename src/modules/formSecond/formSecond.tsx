import { FC } from 'react'
import classNames from 'classnames'

import styles from './formSecond.module.scss'
import { FormSecondProps } from './formSecond.types'
import Image from 'next/image'
import { Form, TextForm } from '@/components'

const FormSecondComponent: FC<FormSecondProps> = ({
  className,
  widthImg = 600,
  heightImg = 600,
  positionRight,
  positionTop,
  title = 'Готовы к росту? Свяжитесь с нами',
  paragraph = 'Мы помогаем бизнесу расти и зарабатывать больше. Разрабатываем маркетинговые стратегии, которые приносят результат.'
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <section className={styles.form} id="form">
        <div className={styles.form__circle}>
          <TextForm
            title={title}
            paragraph={paragraph}
            className={styles.form__second}
          />
          <Image
            src='/images/sheeps__form.png'
            width={widthImg}
            height={heightImg}
            quality={80}
            alt='abstract__cirle'
            className={styles.image}
            style={{ right: positionRight, top: positionTop }}
          />
        </div>
        <div className={styles.form__text}>
          <Form
            mail={true}
            project={true}
            className={styles.input}
          />
        </div>
      </section>
    </div>
  )
}

export default FormSecondComponent
