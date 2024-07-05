import 'normalize.css'
import 'styles/globals.scss'
import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { getSelectorsByUserAgent } from 'react-device-detect'
import App, { AppContext } from 'next/app'
import { AppWrapper } from '@/context/state'
import ModalContainer from '@/components/for_pages/ModalContainer'

export interface AppProps extends NextAppProps {
  pageProps: {
    isMobile: boolean
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (pageProps.isMobile) {
      document.body.classList.add('mobile-ua')
      document.documentElement.className = 'mobile-ua'
    }
  },
    [])

  return (
    <AppWrapper isMobile={pageProps.isMobile}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <ModalContainer/>
    </AppWrapper>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const props = await App.getInitialProps(appContext)
  const ua = appContext.ctx.req ? appContext.ctx.req?.headers['user-agent'] : navigator.userAgent
  if (ua) {
    const { isMobile, isTablet } = getSelectorsByUserAgent(ua)
    const data = getSelectorsByUserAgent(ua)
    if (isTablet && typeof window !== 'undefined' && window.screen.width >= 992) {

      props.pageProps.isMobile = false
    } else {
      props.pageProps.isMobile = isMobile
    }

  } else {
    props.pageProps.isMobile = false
  }


  return props
}

export default MyApp
