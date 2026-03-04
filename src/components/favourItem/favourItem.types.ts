export interface FavourItemProps {
  className?: string
  title: string
  text?: string
  linkText: string
  linkColor: string
  backgroundColor: string
  textColor: string
  imageSrc?: string
  list?: string[]
  isTitleLeft?: boolean
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  flexDirection?: 'row' | 'column'
  /** Сноска внутри карточки (другой фон). Опционально. */
  footer?: string[]
  footerTitle?: string
}
