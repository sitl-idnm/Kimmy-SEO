import { FC } from 'react'
import Image from 'next/image'
import { Borders } from '@/ui'
import Line from '@icons/linebw.svg'
import abstrct from '@public/images/abstract1_work.png'
import abstrct2 from '@public/images/abstract2_work.png'
import howImage from '@public/images/howWorkUs.png'
import classNames from 'classnames'

import styles from './introWorkUs.module.scss'
import { IntroWorkUsProps } from './introWorkUs.types'

const IntroWorkUs: FC<IntroWorkUsProps> = ({ className }) => {
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
        <h1 className={styles.box__title}>Работа в K.KIM agency</h1>
        <p className={styles.box__text}>
          Создаём сайты, которые не просто существуют, а{' '}
          <span className={styles.box__text__white}>конвертируют</span>
        </p>
        <Image src={abstrct} alt="abstrct" className={styles.box__image} quality={100} />
      </div>
    </div>
  )
}

export default IntroWorkUs
