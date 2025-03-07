import { FC } from 'react'
import classNames from 'classnames'

import styles from './blackBoxModal.module.scss'
import { BlackBoxModalProps } from './blackBoxModal.types'
import { Borders, Button } from '@/ui'
import Image from 'next/image'

const BlackBoxModal: FC<BlackBoxModalProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
        <div className={styles.image}>
          <Image
            src='/images/abstract_circle.png'
            alt='blackBoxModal'
            width={810}
            height={807}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.content__wrapper}>
            <h2 className={styles.title}>
              Агентство интернет-маркетинга полного цикла
            </h2>
            <p className={styles.description}>
              Возьмем на себя ваш маркетинг: от глубокого анализа компании, аудитории и конкурентов до разработки продающего прототипа, дизайна и контента для онлайн-ресурса. Интегрируем CRM-систему для полной автоматизации<br/>бизнес-процессов и приведем заявки из интернета.
            </p>
          </div>
          <Button maxWidth='244px'>Начать работу</Button>
        </div>
      </div>
    </div>
  )
}

export default BlackBoxModal
