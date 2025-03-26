'use client'

import { FC } from 'react'
import classNames from 'classnames'

// Импорты иконок
import figmaIcon from '@icons/tools/figma.svg'

import styles from './tools.module.scss'
import { ToolsProps } from './tools.types'

const tools = [
  { id: 'figma', name: 'Figma', Icon: figmaIcon },
  { id: 'photoshop', name: 'Photoshop', Icon: figmaIcon },
  { id: 'illustrator', name: 'Illustrator', Icon: figmaIcon },
  { id: 'xd', name: 'Adobe XD', Icon: figmaIcon },
  { id: 'after-effects', name: 'After Effects', Icon: figmaIcon },
  { id: 'premiere', name: 'Premiere Pro', Icon: figmaIcon },
  { id: 'indesign', name: 'InDesign', Icon: figmaIcon },
  { id: 'lightroom', name: 'Lightroom', Icon: figmaIcon },
  { id: 'blender', name: 'Blender', Icon: figmaIcon }
]

const platforms = [
  { id: 'vk', name: 'VK', Icon: figmaIcon },
  { id: 'telegram', name: 'Telegram', Icon: figmaIcon },
  { id: 'whatsapp', name: 'WhatsApp', Icon: figmaIcon },
  { id: 'instagram', name: 'Instagram', Icon: figmaIcon },
  { id: 'youtube', name: 'YouTube', Icon: figmaIcon },
  { id: 'facebook', name: 'Facebook', Icon: figmaIcon },
  { id: 'tiktok', name: 'TikTok', Icon: figmaIcon },
  { id: 'pinterest', name: 'Pinterest', Icon: figmaIcon },
  { id: 'linkedin', name: 'LinkedIn', Icon: figmaIcon }
]

const Tools: FC<ToolsProps> = ({
  className,
  title = 'Работаем, используя надежные платформы и инструменты'
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.content}>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h3 className={styles.subtitle}>Инструменты</h3>
            <div className={styles.grid}>
              {tools.map((tool) => (
                <div key={tool.id} className={styles.item}>
                  <div className={styles.iconWrapper}>
                    <tool.Icon className={styles.icon} />
                  </div>
                  <span className={styles.name}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subtitle}>Платформы</h3>
            <div className={styles.grid}>
              {platforms.map((platform) => (
                <div key={platform.id} className={styles.item}>
                  <div className={styles.iconWrapper}>
                    <platform.Icon className={styles.icon} />
                  </div>
                  <span className={styles.name}>{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
