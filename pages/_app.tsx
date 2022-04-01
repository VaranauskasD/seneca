import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { ViewportProvider } from '../providers'

const theme = {
  primary: '#ffffff',
  secondary: '#000000',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </ThemeProvider>
  )
}

export default MyApp
