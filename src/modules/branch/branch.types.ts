import { ReactNode } from "react"

export interface BranchItemData {
  title: string
  backgroundColor: string
  textColor: string
  linkText: string
  linkColor: string
  list?: string[]
  imageSrc?: string
}

export interface BranchProps {
  title?: string | ReactNode
  className?: string
  branchData?: BranchItemData[]
  showTitle?: boolean
  itemsPerRow?: 2 | 3 | 4
  listJustifyContent?: 'flex-start' | 'center' | 'flex-end'
  listAlignItems?: 'flex-start' | 'center' | 'flex-end'
  listFlexDirection?: 'row' | 'column'
  isTitleLeft?: boolean
}
