import { FC } from 'react'
import styles from './blogs.module.scss'
import { BlogsProps } from './blogs.types'

import blogsData from '@/shared/dataBlogs/blogs.json'
import { BlogsData } from '@/shared/types/blogs'
import Link from 'next/link'

const Blogs: FC<BlogsProps> = ({
  count
}) => {

  const { blogs } = blogsData as BlogsData

  const blogsList = count ? blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count) : blogs

  return (
    <div className={styles.blogList}>
      {blogsList.map((blog: any) => (
        <div key={blog.id} className={styles.blogItem}>
          <Link
            href={`/blogs/${blog.slug}`}
            className={styles.blogLink}
          >
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            {
              !count && <p className={styles.blogDescription}>{blog.description}</p>
            }
            {blog.author && <p className={styles.blogAuthor}>Автор: {blog.author}</p>}
            <p className={styles.blogDate}>{blog.date}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blogs
