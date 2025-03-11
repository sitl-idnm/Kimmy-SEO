import { FC } from 'react'
import classNames from 'classnames'
import styles from './standartText.module.scss'
import { StandartTextProps } from './standartText.types'

const StandardText: FC<StandartTextProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        <p className={styles.text}>
          KIM Agency – это агентство интернет маркетинга в Москве, которое специализируется на предоставлении digital-решений для вашего бизнеса. Мы предлагаем широкий спектр маркетинговых и цифровых услуг, которые помогут вам достичь новых высот в онлайн-пространстве. Наша команда профессионалов занимается разработкой и реализацией эффективных стратегий для увеличения продаж и укрепления позиций вашего бизнеса в сфере digital.
        </p>
        <p className={styles.text}>
          KIM Agency предлагает комплекс услуг: от анализа рынка и создание performance-кампаний до разработки цифровых продуктов и продвижения бренда в интернете. Мы работаем над каждым проектом индивидуально, подбирая оптимальные стратегии для достижения максимальных результатов.
        </p>
        <p className={styles.text}>
          Наше агентство интернет маркетинга успешно реализует проекты по всей России, предлагая нашим клиентам лучшие решения для развития бизнеса.
        </p>
        <p className={styles.text}>
          KIM Agency – ваш надежный партнер в мире цифрового маркетинга и гарант высокого результата.
        </p>
      </div>
    </div>
  )
}

export default StandardText
