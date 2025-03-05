import { FC } from 'react'
import classNames from 'classnames'

import styles from './formSecond.module.scss'
import { FormSecondProps } from './formSecond.types'
import Image from 'next/image'
import { Form, TextForm } from '@/components'

const FormSecond: FC<FormSecondProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <section className={styles.form} id="form">
        <div className={styles.form__circle}>
          <TextForm
            title={'Готовы к росту? Свяжитесь с нами'}
            paragraph={'Мы помогаем бизнесу расти и зарабатывать больше. Разрабатываем маркетинговые стратегии, которые приносят результат.'}
            className={styles.form__second}
          />
          <Image
            src='/images/sheeps__form.png'
            width={600}
            height={600}
            quality={80}
            alt='abstract__cirle'
            className={styles.image}
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

export default FormSecond
