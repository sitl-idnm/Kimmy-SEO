'use client'

import { FC } from 'react'
import classNames from 'classnames'
import { IntroWorkUs } from '@/modules/introWorkUs'
import { StandartText } from '@/ui'
import { Why } from '@/modules/why'
import AcceptIcon from '@icons/accept.svg'
import AcceptIconBlack from '@icons/accept-black.svg'
import { FormFirst } from '@/modules/formFirst'
import { Case } from '@/modules/case'
import { Clients } from '@/modules/clients'
import { Review } from '@/modules/review'
import { Faq } from '@/modules/faq'
import { Button } from '@/ui'
import { Heading } from '@/ui'
import styles from './uxUiPage.module.scss'

const PAGE_URL = 'https://kim-agency.ru/ux-ui'
const ORGANIZATION_NAME = 'K.KIM'

const faqData = [
  {
    title: 'Сколько занимает работа?',
    content:
      'Срок зависит от состава проекта: небольшой сайт можно собрать быстрее, а сложное приложение требует исследования, прототипов и согласований.'
  },
  {
    title: 'Можно ли вносить правки?',
    content:
      'Да, правки закладываются в процесс, чтобы итоговый дизайн был согласован с бизнес-целями и ожиданиями команды.'
  },
  {
    title: 'Что получит клиент на выходе?',
    content:
      'Готовые макеты, логику экранов, правила по элементам, понятный пользовательский сценарий и материалы для передачи в разработку.'
  }
]

export const UxUiPageView: FC = () => {
  const rootClassName = classNames(styles.root)

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="UI & UX дизайн от K KIM" />
      <meta itemProp="url" content={PAGE_URL} />

      <nav
        className="visually-hidden"
        itemProp="breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="1" />
            <meta itemProp="name" content="Главная" />
            <meta itemProp="item" content="https://kim-agency.ru/" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content="2" />
            <meta itemProp="name" content="UI/UX дизайн" />
            <meta itemProp="item" content={PAGE_URL} />
          </li>
        </ol>
      </nav>

      <div className="visually-hidden" itemProp="mainEntity" itemScope itemType="https://schema.org/Service">
        <meta itemProp="name" content="UI/UX дизайн" />
        <meta
          itemProp="description"
          content="Создаем интерфейсы, в которых удобно принимать решение, оставлять заявку, покупать и возвращаться снова."
        />
        <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content={ORGANIZATION_NAME} />
          <meta itemProp="url" content="https://kim-agency.ru/" />
        </div>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="RUB" />
          <meta itemProp="price" content="40000" />
          <meta itemProp="description" content="Минимальная цена на услугу UI/UX дизайна" />
        </div>
        <span itemProp="areaServed">Москва и Россия</span>
      </div>

      <div className="visually-hidden" itemScope itemType="https://schema.org/FAQPage">
        {faqData.map((q, idx) => (
          <div key={idx} itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <meta itemProp="name" content={q.title} />
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <meta itemProp="text" content={q.content} />
            </div>
          </div>
        ))}
      </div>

      <main className={rootClassName}>
        <IntroWorkUs
          className={styles.introBlock}
          title="UI & UX дизайн от K KIM"
          text="Создаем интерфейсы, в которых удобно принимать решение, оставлять заявку, покупать и возвращаться снова. Для бизнеса это рабочий инструмент: он снижает потери на пути пользователя, делает продукт понятнее и помогает расти конверсии. Если вам важно усилить пользовательский опыт и удобное взаимодействие, такая услуга решает задачу системно."
          highlightedText=""
          titleClassName={styles.introTitleSmall}
          buttons={(
            <div className={styles.introButtonsWrap}>
              <Button
                tag="a"
                href="#order-form"
                maxWidth="320px"
                className={styles.introHeroButton}
              >
                Заказать UX/UI дизайн
              </Button>
            </div>
          )}
        />

        <StandartText
          marginBottom
          title="Что дает бизнесу сильный интерфейс"
          texts={[
            'Хороший интерфейс помогает человеку быстрее понять ценность предложения, не теряться в сценариях и без лишних шагов доходить до целевого действия. Когда визуальная часть и логика продуманы вместе, проект выглядит цельно, а пользовательский путь становится предсказуемым для бизнеса. Именно поэтому заказать UI/UX дизайн стоит тогда, когда нужна понятная система, в которой каждая деталь работает на результат.'
          ]}
        />

        <StandartText
          marginBottom
          title="Что входит в работу"
          texts={[
            'Мы начинаем с задачи, аудитории и контекста. Изучаем продукт, конкурентов, текущие барьеры и точки роста. Затем собираем логику экранов, проверяем сценарии и после этого переходим к визуальной части. В работу обычно входят:'
          ]}
        />

        <Why
          direction="column"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={3}
          title=""
          showTitle={false}
          itemsData={[
            { icon: <AcceptIconBlack />, title: 'Исследование поведения user и ключевых сценариев', description: '' },
            { icon: <AcceptIconBlack />, title: 'Прототипирование структуры страниц и экранов', description: '' },
            { icon: <AcceptIconBlack />, title: 'Создание визуальной концепции и design-системы', description: '' },
            { icon: <AcceptIconBlack />, title: 'Адаптация под мобильный формат и разные устройства', description: '' },
            { icon: <AcceptIconBlack />, title: 'Подготовка макетов для передачи в разработку', description: '' }
          ]}
        />

        <StandartText
          marginBottom
          title="Как идет разработка"
          texts={[
            'Сначала фиксируем цели бизнеса и метрики, затем собираем структуру, прототип, визуальный стиль и правила для команды. В проекте участвуют дизайнер, стратег и специалисты по digital-аналитике, поэтому решения опираются на опыт реальных запусков. Мы не рисуем UI ради красоты и не собираем UX из догадок: нам важно, чтобы интерфейс был понятным, масштабируемым и удобным в работе дальше.'
          ]}
        />

        <Why
          direction="row"
          titleJustify="center"
          titleAlign="center"
          cardsPerRow={2}
          title="Плюсы разработки такого дизайна"
          itemsData={[
            {
              icon: <AcceptIcon />,
              title: 'Понятный пользовательский путь',
              description:
                'Человек быстрее понимает продукт, меньше теряется в сценариях и чаще доходит до заявки, покупки или обращения.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Ниже потери на этапе взаимодействия',
              description:
                'Убираются лишние шаги, неочевидные кнопки и перегруженные экраны, из-за которых сайт или приложение теряет конверсию.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Быстрее запуск и меньше переделок',
              description:
                'Ошибки видны еще на уровне прототипа, поэтому команда не тратит бюджет на исправления после релиза.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Единая система для команды',
              description:
                'Макеты, компоненты и правила собираются в общую design-систему, с которой легче работать дальше.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Удобство для разных устройств',
              description:
                'Интерфейс заранее адаптируется под мобильный формат, планшеты и десктоп, без хаоса в элементах.'
            },
            {
              icon: <AcceptIcon />,
              title: 'Основа для роста продукта',
              description:
                'Такой подход упрощает развитие проекта: можно добавлять новые разделы, функции и экраны без пересборки с нуля.'
            }
          ]}
        />

        <section className={styles.pricing}>
          <Heading size="md" className={styles.pricingMainTitle}>Цена и стоимость UI/UX</Heading>
          <p className={styles.pricingText}>
            Цена зависит от объема экранов, глубины аналитики, наличия готового контента и сложности продукта.
          </p>
          <div className={styles.pricingRow}>
            <div className={styles.pricingBadge}>
              <p className={styles.pricingBadgeLabel}>Минимальная цена</p>
              <p className={styles.pricingBadgeValue}>от 40 000 ₽</p>
            </div>
          </div>
        </section>

        <div id="order-form">
          <FormFirst
            className={styles.formBlock}
            title="Заказать UX/UI дизайн"
            paragraph=""
            submitValue="Отправить заявку"
            project
            projectPlaceholder="Краткое описание проекта"
          />
        </div>

        <StandartText
          className={styles.afterOrderFormText}
          marginBottom
          title="Почему с K KIM удобнее работать"
          texts={[
            'K KIM работает с клиентами в Москве и других регионах и помогает бизнесу смотреть на интерфейс как на часть продаж, маркетинга и роста. Команда экспертов реализовала более 150 проектов, поэтому мы умеем соединять эстетику, логику и коммерческую задачу. Клиент получает инструмент, с которым проще продавать, тестировать гипотезы и масштабировать продукт без хаоса. Это экономит время, снижает риск ошибок и позволяет не заказывать новую систему с нуля через несколько месяцев.'
          ]}
        />

        <Case />

        <Clients title="Нам доверяют" />

        <section className={styles.tech}>
          <Heading size="md" className={styles.techTitle}>
            Наши технологии
          </Heading>
          <p className={styles.techText}>
            Для проектирования интерфейсов мы используем связку инструментов:
          </p>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <p className={styles.techCardTitle}>Инструменты</p>
              <ul className={styles.techList}>
                <li>Figma</li>
                <li>Tilda</li>
                <li>Freepik</li>
              </ul>
            </div>
          </div>
          <p className={styles.techText}>
            Такой стек помогает быстрее согласовывать решения, держать единый interface продукта и не терять детали на этапе передачи в разработку. Команда видит, как устроен user flow, заказчик понимает будущий результат еще до запуска, разработчики получают аккуратную и понятную систему экранов, состояний и правил.
          </p>
        </section>

        <Review />

        <Why
          direction="row"
          titleJustify="start"
          titleAlign="start"
          cardsPerRow={2}
          title="Мы также делаем"
          itemsData={[
            { icon: <AcceptIcon />, title: 'Разработка сайтов', description: '' },
            { icon: <AcceptIcon />, title: 'Разработка чат-ботов', description: '' },
            { icon: <AcceptIcon />, title: 'Разработка ИИ-агентов', description: '' },
            { icon: <AcceptIcon />, title: 'Техническая поддержка', description: '' }
          ]}
        />

        <Faq faqData={faqData} title="FAQ" />

        <FormFirst
          className={styles.formBlock}
          title="Обсудить проект"
          paragraph="Если нужен интерфейс, который продает, объясняет и удерживает внимание, оставьте заявку. Мы разберем задачу и покажем, как превратить идею в понятный цифровой продукт."
          submitValue="Обсудить проект"
        />
      </main>
    </div>
  )
}
