'use client'

import { FC } from 'react'
import styles from './favourItem.module.scss'
import { FavourItemProps } from './favourItem.types'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import classNames from 'classnames'

const FavourItem: FC<FavourItemProps> = ({
  title,
  linkText,
  linkColor,
  backgroundColor,
  textColor,
  imageSrc,
  text,
  list,
  isTitleLeft
}) => {
  const setModalContent = useSetAtom(openModalContent)

  const handleOpenModal = (name: string) => {
    setModalContent(name)
  }

  return (
    <li className={styles.favour__item} style={{ backgroundColor }} onClick={() => handleOpenModal(title)}>
      <div>
        <h2
          className={classNames(styles.favour__title, {
            [styles.favour__title_left]: isTitleLeft
          })}
          style={{ color: textColor }}
        >
          {title}
        </h2>
        {text && <p style={{ color: textColor }}>{text}</p>}
        {list && (
          <ul className={styles.favour__list}>
            {list.map((item, index) => (
              <li key={index} style={{ color: textColor }}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {imageSrc && <Image
        src={imageSrc}
        width={280}
        height={280}
        quality={100}
        alt={title}
        className={styles.favour__image} />}
      <button className={styles.favour__description} style={{ color: linkColor }}>
        {linkText}
      </button>
    </li>
  )
}

export default FavourItem
