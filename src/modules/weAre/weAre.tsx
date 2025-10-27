import { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './weAre.module.scss'
import { WeAreProps } from './weAre.types'

const WeAre: FC<WeAreProps> = ({
  className,
  title = 'Чем мы можем вам помочь?',
  showText = true,
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          {showText && (
            <div className={styles.text}>
              <p>K KIM – агентство интернет-маркетинга в Москве. Мы помогаем компаниям достигать высоких результатов в онлайн-пространстве и гордимся тем, что даем широкий спектр услуг: начиная от разработки сайтов заканчивая реализацией маркетинговых стратегий. Каждый обратившийся к нам бизнес не приносит скандальные результаты и своими силами не добиться их получается. Для начала мы погружаемся в проект и постепенно приходим к высоким конверсиям и сильным офферам. Наша миссия – помогать бизнесам раскрывать их потенциал, создавая инновационные и эффективные маркетинговые решения, которые способствуют росту и успеху наших клиентов.</p>
              <p className={styles.quote}>«Центр нашей деятельности – клиент. Всё работает для него и вокруг него. Мы с головой погружаемся в каждый проект и приходим к высоким результатам, делая свою работу с энтузиазмом»</p>
              <p className={styles.author}>Павел Коржуев, co-founder</p>
            </div>
          )}
        </div>
        <div className={styles.team}>
          <div className={styles.member}>
            <Image
              src="/images/konstantin.png"
              alt="Константин Ким"
              width={475}
              height={475}
              className={styles.memberImage}
            />
            <p className={styles.memberName}>Константин Ким</p>
          </div>
          <div className={styles.member}>
            <Image
              src="/images/pavel.png"
              alt="Павел Коржуев"
              width={475}
              height={475}
              className={styles.memberImage}
            />
            <p className={styles.memberName}>Павел Коржуев</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeAre
