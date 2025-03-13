'use client'
import { FC, useState } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import Link from 'next/link'

import styles from './form.module.scss'
import { FormProps } from './form.types'

const Form: FC<FormProps> = ({
  className,
  mail,
  project,
  work,
  quizData
}) => {
  const rootClassName = classNames(styles.root, className)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.target.value = value.replace(/\d/g, '')
  }

  const handleNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.target.value = value.replace(/\D/g, '')
  }

  const sanitizeInput = (input: string) => {
    const sanitized = input.replace(/<[^>]*>/g, '')
    if (sanitized !== input) {
      throw new Error('HTML tags are not allowed')
    }
    return sanitized
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const formatQuizData = (data: Record<number, string>) => {
    return Object.entries(data)
      .map(([step, answer]) => `Шаг ${step}: ${answer}`)
      .join('\n')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    if (data.mail && !isValidEmail(data.mail as string)) {
      setSuccessMessage('Ошибка отправки заявки. Неправильный email адрес.')
      return
    }

    if (project) {
      try {
        data.project = sanitizeInput(data.project as string)
      } catch (error) {
        setSuccessMessage('Ошибка отправки заявки. HTML теги не разрешены.')
        return
      }
    }

    const token = '7862004029:AAFZ807gLMhUIzqjfh4DB62muUmzWv9JfrY'
    const chatId = '-4654232429'

    const quizResults = quizData ? `\n\nРезультаты квиза:\n${formatQuizData(quizData)}` : ''

    const message = `🎯 *Пришла новая заявка с SEO-сайта KIM!*

👤 *Контактные данные:*
• Имя: ${data.name}
• Телефон: ${data.phone}${data.mail ? `\n• Почта: ${data.mail}` : ''}

${data.project ? `💡 *О проекте:*\n${data.project}\n` : ''}${quizResults ? `\n📋 *Результаты опроса:*${quizResults}` : ''}`

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      setSuccessMessage('Форма успешно отправлена!')
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSuccessMessage('Ошибка при отправке заявки.')
    }
  }

  return (
    <div className={rootClassName}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <input
            type="text"
            name="name"
            placeholder='Имя'
            required
            onChange={handleNameInput}
            style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined}
          />
          <label className={styles.placeholder}>Имя*</label>
        </div>
        <div className={styles.form_wrapper}>
          <input
            type="text"
            name="phone"
            placeholder='Телефон'
            required
            onChange={handleNumberInput}
            style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined}
          />
          <label className={styles.placeholder}>Телефон*</label>
        </div>
        {/* Часть формы для страницы работа у нас */}
        {work !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="text" name="url" placeholder='Ссылка на резюме' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Ссылка на резюме'} style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined} />
            <label className={styles.placeholder}>Ссылка на резюме</label>
          </div>
        )}
        {work !== undefined && (
          <div className={styles.form_wrapper}>
            <textarea name="project" placeholder='Расскажите про свой проект' onFocus={(e) => e.target.placeholder = ''} style={work ? { color: 'black', backgroundColor: '#FAFAFA' } : undefined} onBlur={(e) => e.target.placeholder = 'Расскажите про свой проект'} ></textarea>
            <label className={styles.placeholder}>Расскажите про свой проект</label>
          </div>
        )}

        {/* Часть формы для второй формы на главной странице */}
        {mail !== undefined && (
          <div className={styles.form_wrapper}>
            <input
              type="mail"
              name="mail"
              placeholder='Почта'
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Почта'}
            />
            <label className={styles.placeholder}>Почта</label>
          </div>
        )}
        {project !== undefined && (
          <div className={styles.form_wrapper}>
            <textarea
              name="project"
              placeholder='Расскажите про свой проект'
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Расскажите про свой проект'}
            />
            <label className={styles.placeholder}>Расскажите про свой проект</label>
          </div>
        )}
        <div className={styles.form_wrapper}>
          <input type="checkbox" required />
          <label style={work ? { color: 'black' } : undefined}>
            Согласен на обработку <Link href='/privacy-policy' target='_blank' style={work ? { color: '#CB172C' } : undefined}>персональных данных</Link>
          </label>
        </div>
        {mail !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="checkbox" />
            <label>Согласен на получение email - рассылок</label>
          </div>
        )}
        {work !== undefined && (
          <div className={styles.form_wrapper}>
            <input type="checkbox" />
            <label style={work ? { color: 'black' } : undefined}>Согласен на получение email - рассылок</label>
          </div>
        )}
        <div className={styles.form_wrapper}>
          <input type="submit" value={'Отправить'} />
        </div>
        {successMessage && (
          <div className={styles.successMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="white" />
              <path d="M8 12L11.5 16L16 7" stroke="#CB172C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  )
}

export default Form
