import { ReactNode } from 'react'

export interface WhyItemData {
  icon: ReactNode
  title: string
  description?: string
}

type FlexDirection = 'row' | 'column'
type FlexAlignment = 'start' | 'center' | 'end'
type CardsPerRow = 2 | 3 | 4

export interface WhyProps {
  className?: string
  direction?: FlexDirection
  titleJustify?: FlexAlignment
  titleAlign?: FlexAlignment
  itemsData?: WhyItemData[]
  cardsPerRow?: CardsPerRow
}
