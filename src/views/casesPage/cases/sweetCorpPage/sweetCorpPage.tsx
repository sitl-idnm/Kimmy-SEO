import { FC } from 'react'
import classNames from 'classnames'

import styles from './sweetCorpPage.module.scss'
import { SweetCorpPageProps } from './sweetCorpPage.types'
import { IntroCase } from '@/modules/introCase'
import { ContentCase } from '@/modules/contentCaseSweetCorp'
import { MoveCasePage } from '@/modules/moveCasePage'
import { DefaultTextCase } from '@/components'

const SweetCorpPage: FC<SweetCorpPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <IntroCase
        backgroundImage={'/images/cases/sweetcorp/SweetCorpCaseBackground.png'}
        title={'Сайт с конверсией 4,3%'}
        text={<>для производителя сладких<br />новогодних подарков</>}
        buttonLink={''}
        description={'Разработали сайт с отдельными страницами для B2B и B2C сегментов'}
        tilda={false}
        webflow={true}
      />
      <DefaultTextCase
        mainText={<><span>Компания <span style={{fontWeight: 600}}>«Sweet Corp»</span> продает сладкие новогодние подарки оптом и в розницу. </span><span>Они работают с двумя сегментами аудитории:</span><ul><li>B2B: HR-специалисты и менеджеры по закупкам, которые заказывают сладкие новогодние подарки оптом для детей сотрудников;</li>
        <li>B2C: физические лица, которые покупают подарки в розницу на Ozon.</li></ul></>}
        subText={<><span>Компания обратилась к нам за созданием сайта, направленного на оба сегмента.</span><span>В этом кейсе мы расскажем, как делали сайт и что из этого получилось.</span></>}
      />
      <MoveCasePage
        firstAnchor={'Анализ конкурентов'}
        secondAnchor={'Анализ аудитории'}
        thirdAnchor={'Создание сайта'}
      />
      <ContentCase />
    </main>
  )
}

export default SweetCorpPage
