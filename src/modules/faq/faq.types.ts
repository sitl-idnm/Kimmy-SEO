export interface FaqItem {
  title: string
  content: string
}

export interface FaqProps {
  className?: string
  faqData: FaqItem[]
}
