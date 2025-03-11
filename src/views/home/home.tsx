import { FC } from 'react'
import { StandartText, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'

import { Favour, Introduce } from '@/components'
import { FormSecond } from '@/modules/formSecond'
import { Case } from '@/modules/case'
import NewModalContainer from '../../components/newModalContainer/newModalContainer'
import { RedBoxWork } from '@/modules/redBoxWork'
import Faq from '@/modules/faq/faq'
import Clients from '@/modules/clients/clients'
import Why from '@/modules/why/why'
import HowWeWork from '@/modules/howwework/howwework'
import Quiz from '@/modules/quiz/quiz'
import Branch from '@/modules/branch/branch'
import Review from '@/modules/review/review'
import { BlogsMain } from '@/modules/blogsMain'
import { BlackBoxModal } from '@/modules/blackBoxModal'
import { BlackBoxLink } from '@/modules/blackBoxLink'
import { Services } from '@/modules/ServicePage/services'

const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <NewModalContainer />
      <Wrapper>
        <Introduce />
        <Favour />
        <Services mainPage />
        <HowWeWork />
        <Branch />
        <RedBoxWork />
        <Case />
        <Why />
        <BlogsMain />
        <BlackBoxLink />
        <Clients />
        <Quiz />
        <Faq />
        <Review />
        <FormSecond />
        <StandartText />
      </Wrapper>
      {/* <DrawerMenu /> */}
    </main>
  )
}

export default Home
