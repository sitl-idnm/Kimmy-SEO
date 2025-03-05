import { FC } from 'react'
import classNames from 'classnames'

import styles from './clients.module.scss'
import { ClientsProps } from './clients.types'

const Clients: FC<ClientsProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <div className={rootClassName}></div>
  )
}

export default Clients
