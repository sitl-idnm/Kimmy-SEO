import { FC } from 'react'
import { StandartText, Wrapper } from '@/ui'
import classNames from 'classnames'

import styles from './servicePage.module.scss'
import { ServicePageProps } from './servicePage.types'
import { FormFirst } from '@/modules/formFirst'
import { Branch } from '@/modules/branch'
import { Why } from '@/modules/why'
import { RedBoxWork } from '@/modules/redBoxWork'
import { Case } from '@/modules/case'
import { Review } from '@/modules/review'
import { FormSecond } from '@/modules/formSecond'
import { Favour } from '@/components/favour'
import { Introduce } from '@/components/introduce'
import { Services } from '@/modules/ServicePage/services'

const ServicePage: FC<ServicePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>
        <Introduce title={<>Услуги комплексного интернет<br />маркетинга и системного интегратора</>}
          titleTag="h1"
          titleVariant="large"
          hasTypingSpan={false}
          hasButton={false}
        />
        <Favour />
        <Why />
        <Services />
        <FormFirst />
        <Branch />
        <Why />
        <RedBoxWork />
        <Case />
        <Review />
        <FormSecond />
        <StandartText />
      </Wrapper>
    </main>
  )
}

export default ServicePage
