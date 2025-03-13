import { ReactNode } from 'react'

export interface IntroduceProps {
  className?: string
  title: ReactNode
  hasTypingSpan?: boolean
  wordsArray?: string[]
  typingInterval?: number
  titleVariant?: 'large' | 'medium'
  buttonText?: string
  hasButton?: boolean
  buttonPosition?: 'center' | 'left' | 'right'
  titleTag?: 'h1' | 'h2'
}
