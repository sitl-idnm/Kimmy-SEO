import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'
import { ServicePageTemplate } from '@/modules/servicePageTemplate'
import classNames from 'classnames'
import { FC } from 'react'
import { SettingChatBotPageProps } from './page.types'
import { IntroWorkUs } from '@/modules/introWorkUs'

const SettingChatBotPage: FC<SettingChatBotPageProps> = ({ className }) => {
  const serviceData = getServiceData('setting-chat-bot')

  if (!serviceData) {
    return null
  }

  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <IntroWorkUs />
      <ServicePageTemplate />
    </main>
  )
}

export default SettingChatBotPage