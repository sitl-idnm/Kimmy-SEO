import { FC } from 'react'
import Image from 'next/image'
import { Borders } from '@/ui'
import abstrct from '@public/images/abstract1_work.png'
import classNames from 'classnames'

import styles from './introWorkUs.module.scss'

interface IntroWorkUsProps {
  title?: string
  text?: string
  highlightedText?: string
  className?: string
  image?: {
    src: string
    alt: string
  }
}

const IntroWorkUs: FC<IntroWorkUsProps> = ({
  title = 'Работа в K.KIM agency',
  text = 'Создаём сайты, которые не просто существуют, а',
  highlightedText = 'конвертируют',
  className,
  image
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.box}>
        <Borders
          cornersWithCrosses={[
            'topLeft',
            'bottomRight',
            'topRight',
            'bottomLeft'
          ]}
        />
        <h1 className={styles.box__title}>{title}</h1>
        <p className={styles.box__text}>
          {text}{' '}
          <span className={styles.box__text__white}>{highlightedText}</span>
        </p>
        <Image
          src={image?.src || abstrct}
          alt={image?.alt || 'abstrct'}
          className={styles.box__image}
          quality={100}
        />
      </div>
    </div>
  )
}

export default IntroWorkUs
