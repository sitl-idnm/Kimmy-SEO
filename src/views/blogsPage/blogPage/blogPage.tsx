import { FC } from 'react'
import classNames from 'classnames'

import styles from './blogPage.module.scss'
import { BlogPageProps } from './blogPage.types'

const BlogPage: FC<BlogPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
    </main>
  )
}

export default BlogPage
