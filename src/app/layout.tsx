/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'

import localFont from 'next/font/local'
import { Provider } from '@service/provider'
import { CookieBanner } from '@/modules/cookieBanner'
import Script from 'next/script'

const inter = localFont({
  src: [
    {
      path: './fonts/InterTight-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-inter'
})
const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-manrope'
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Provider>
          <div id="root">
            <Header />
            {children}
            <CookieBanner />
            <Footer />
          </div>

          <div id="modal-root" />
        </Provider>

        <Script
          id="ym-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(105250589, "init", { ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true });`
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105250589" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
