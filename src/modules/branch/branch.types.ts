export interface BranchItemData {
  title: string
  backgroundColor: string
  textColor: string
  linkText: string
  linkColor: string
  list?: string[]
}

export interface BranchProps {
  className?: string
  branchData?: BranchItemData[]
  showTitle?: boolean
}
