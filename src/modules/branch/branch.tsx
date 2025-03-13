import { FC } from 'react'
import classNames from 'classnames'

import styles from './branch.module.scss'
import { BranchProps } from './branch.types'
import { FavourItem } from '@/components'

const defaultBranchData = [
  {
    title: 'E-commerce и ритейл',
    backgroundColor: '#18181B',
    textColor: '#FFFFFF',
    linkText: '',
    linkColor: '',
    list: [
      'Разработка интернет-магазинов и маркетплейсов',
      'SEO-оптимизация для роста органического трафика',
      'Performance-реклама для масштабирования продаж',
      'Контент-стратегия и визуальный брендинг'
    ]
  },
  {
    title: 'Web3, блокчейн и AI',
    backgroundColor: '#F9F9F9',
    textColor: '#18181B',
    linkText: '',
    linkColor: '',
    list: [
      'Токеномика и разработка маркетинговых стратегий для DAO',
      'PR и комьюнити-менеджмент в криптоиндустрии',
      'Листинг на биржах и маркетинг NFT-проектов'
    ]
  },
  {
    title: 'HoReCa',
    backgroundColor: '#CB172C',
    textColor: '#FFFFFF',
    linkText: '',
    linkColor: '',
    list: [
      'SMM и SERM-маркетинг',
      'Таргетированная реклама для привлечения гостей',
      'Автоматизация маркетинга и CRM-стратегии'
    ]
  }
]

const Branch: FC<BranchProps> = ({
  className,
  branchData = defaultBranchData,
  showTitle = true
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.container}>
        {showTitle && (
          <h2 className={styles.title}>
            Мы предоставляем маркетинговые<br />
            решения для разных отраслей
          </h2>
        )}
        <div className={styles.content}>
          {branchData.map((item, index) => (
            <FavourItem
              key={index}
              title={item.title}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              linkText={item.linkText}
              linkColor={item.linkColor}
              list={item.list}
              isTitleLeft
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Branch
