import { getServiceData } from '@/shared/dataServices'
import styles from './page.module.scss'

export default function SermPage() {
  const serviceData = getServiceData('serm')

  if (!serviceData) {
    return null
  }

  return (
    <div className={styles.service}>
      {/* Hero секция */}
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>{serviceData.title}</h1>
        <p className={styles.hero__description}>{serviceData.description}</p>
        <p className={styles.hero__price}>Стоимость: {serviceData.price}</p>
      </section>

      {/* Здесь вы можете добавить свои уникальные модули */}

      {/* Пример секции с преимуществами */}
      {serviceData.features && serviceData.features.length > 0 && (
        <section className={styles.features}>
          <h2 className={styles.section__title}>Преимущества</h2>
          <ul className={styles.features__list}>
            {serviceData.features.map((feature, index) => (
              <li key={index} className={styles.features__item}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Пример секции с технологиями */}
      {serviceData.technologies && serviceData.technologies.length > 0 && (
        <section className={styles.technologies}>
          <h2 className={styles.section__title}>Технологии</h2>
          <ul className={styles.technologies__list}>
            {serviceData.technologies.map((tech, index) => (
              <li key={index} className={styles.technologies__item}>{tech}</li>
            ))}
          </ul>
        </section>
      )}

      {/*
        Добавьте здесь другие модули, специфичные для этой услуги.
        Например:
        - Процесс работы
        - Примеры проектов
        - Отзывы клиентов
        - FAQ
        и т.д.
      */}
    </div>
  )
}