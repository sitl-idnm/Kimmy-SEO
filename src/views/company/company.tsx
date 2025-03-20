import { FC } from 'react'
import classNames from 'classnames'

import styles from './company.module.scss'
import { CompanyProps } from './company.types'
import { Wrapper } from '@/ui/wrapper'
import { Services } from '@/modules/ServicePage/services'
import { RedBoxWork } from '@/modules/redBoxWork'
import { Why } from '@/modules/why'
import { Clients } from '@/modules/clients'
import Faq from '@/modules/faq/faq'
import { FormSecond } from '@/modules/formSecond'
import { StandartText } from '@/ui/standartText'

const FaqData = [
  {
    title: 'Какие услуги вы оказываете?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'У меня не так много времени и ресурсов на маркетинг. Как вы сможете помочь?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'Какой бюджет мне нужен для начала работы с вами?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  },
  {
    title: 'Как вы оцениваете эффективность?',
    content: 'Мы гарантируем результат и предоставляем бесплатные доработки до достижения поставленных целей.'
  }
]

const Company: FC<CompanyProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Wrapper>

        <Services
          hasCost={false}
          showDescription={false}
        />
        <StandartText
          marginBottom={true}
          title='История создания'
          texts={[
            'Наша история началась с двух отдельных агентств. Павел Коржуев работал фрилансером и занимался рекламой, а в какой-то момент понял, что имеет достаточно ресурсов для создания своей компании. Константин Ким специализировался на разработке сайтов и SEO и имел свое агентство, которое существовало уже 4 года. Они познакомились, благодаря общему другу, и поняли, что могут создать вместе что-то интересное. Так, 1 июля 2023 года появилось агентство K.KIM, названное в честь основателей. За год наша команда выросла в три раза и мы стали опытными в разработке, дизайне и SEO. Мы продолжаем развиваться и ставить новые цели!'
          ]}
        />
        <RedBoxWork />
        <Why
          counter
          direction="row"
          titleJustify='start'
          titleAlign='start'
          cardsPerRow={3}
          title="Немного статистики"
          itemsData={[{
            icon: '',
            title: '15',
            description: "сотрудников в штате"
          },
          {
            icon: '',
            title: '5',
            description: "отделов"
          },
          {
            icon: '',
            title: '150+',
            description: "реализованных проектов "
          },
          {
            icon: '',
            title: '10 000+',
            description: "приведенных лидов"
          },
          {
            icon: '',
            title: '32',
            description: "платных сервиса использует команда ежемесячно"
          },
          {
            icon: '',
            title: '4',
            description: "модели ИИ помогают сотрудникам в работе"
          }]}
        />
        <Clients />
        <Faq
          faqData={FaqData}
        />
        <FormSecond />
      </Wrapper>
    </main>
  )
}

export default Company
