export interface FavourItemData {
  title: string
  text: string
  linkText: string
  linkColor: string
  backgroundColor: string
  textColor: string
  imageSrc: string
}

export interface FavourProps {
  className?: string
  itemsData?: FavourItemData[]
}
