import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { ViewportProvider } from '../providers'

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#4CAD94',
    dynamic: {
      minStart: {
        r: 238,
        g: 109,
        b: 46,
        a: 1,
      },
      minEnd: {
        r: 249,
        g: 210,
        b: 159,
        a: 1,
      },
      maxStart: {
        r: 89,
        g: 202,
        b: 217,
        a: 1,
      },
      maxEnd: {
        r: 121,
        g: 224,
        b: 195,
        a: 1,
      },
      rangeStart: {
        r: -149,
        g: 93,
        b: 171,
      },
      rangeEnd: {
        r: -128,
        g: 14,
        b: 36,
      },
    },
  },
  breakpoints: {
    xs: 320,
    sm: 692,
    md: 900,
  },
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
