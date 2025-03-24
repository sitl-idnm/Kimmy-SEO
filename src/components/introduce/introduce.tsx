'use client'
import { FC, useCallback } from 'react'
import classNames from 'classnames'

import styles from './introduce.module.scss'
import { IntroduceProps } from './introduce.types'
import { Button } from '@/ui'
import { TypingSpan } from '../typingSpan'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const Introduce: FC<IntroduceProps> = ({
  className,
  title,
  hasTypingSpan = false,
  wordsArray = ['интернет-маркетинга', 'интернет-маркетинга'],
  typingInterval = 1500,
  titleVariant = 'large',
  buttonText = 'Получить консультацию',
  hasButton = true,
  buttonPosition = 'center',
  titleTag = 'h1',
  description
}) => {
  const rootClassName = classNames(styles.root, className)
  const titleClassName = classNames(
    titleVariant === 'large' ? styles.introduce__title : styles.introduce__title_medium
  )
  const introduceClassName = classNames(
    styles.introduce,
    styles[`introduce_${buttonPosition}`]
  )
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  const TitleTag = titleTag

  return (
    <div className={rootClassName}>
      <div className={introduceClassName}>
        <TitleTag className={titleClassName}>
          {title}
          {hasTypingSpan && (
            <>
              {' '}
              <TypingSpan
                words={wordsArray}
                interval={typingInterval}
              />
            </>
          )}
        </TitleTag>
        {description && (
          <p className={styles.introduce__description}>{description}</p>
        )}
        {hasButton && (
          <Button
            onClick={() => openWindows('детали')}
            tag='button'
            maxWidth='244px'
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Introduce
