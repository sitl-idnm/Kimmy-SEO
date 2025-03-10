import { FC } from 'react'
import { Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
// import { FormFirst } from '@/modules/formFirst'
import { Favour, Introduce } from '@/components'
import { FormSecond } from '@/modules/formSecond'
// import { Tenet } from '@/modules/tenet'
// import { Conversion } from '@/modules/conversion'
import { Case } from '@/modules/case'
// import { DrawerMenu } from '@/modules/drawerMenu'
import NewModalContainer from '../../components/newModalContainer/newModalContainer'
import { RedBoxWork } from '@/modules/redBoxWork'
import Faq from '@/modules/faq/faq'
import Clients from '@/modules/clients/clients'
import Why from '@/modules/why/why'
import HowWeWork from '@/modules/howwework/howwework'
import { BlogsMain } from '@/modules/blogsMain'
import { BlackBoxModal } from '@/modules/blackBoxModal'
import { BlackBoxLink } from '@/modules/blackBoxLink'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <Wrapper>
        <Introduce />
        <Favour />
        <HowWeWork />
        <RedBoxWork />
        <Case />
        <BlackBoxModal />
        {/* <FormFirst /> */}
        {/* <Conversion /> */}
        {/* <Treaty /> */}
        {/* <Tenet /> */}
        <Why />
        <BlogsMain />
        <BlackBoxLink />
        <Clients />
        <Faq />
        <FormSecond />
      </Wrapper>
      {/* <DrawerMenu /> */}
    </main>
  )
}

export default Home
