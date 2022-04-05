import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { ViewportProvider } from '../providers'

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#000000',
    dynamic: {
      text: {
        start: {
          r: 159,
          g: 147,
          b: 139,
        },
        end: {
          r: 76,
          g: 173,
          b: 148,
        },
        range: {
          r: -83,
          g: 26,
          b: 9,
        },
      },
      primary: {
        minStart: {
          r: 238,
          g: 109,
          b: 46,
        },
        minEnd: {
          r: 249,
          g: 210,
          b: 159,
        },
        maxStart: {
          r: 89,
          g: 202,
          b: 217,
        },
        maxEnd: {
          r: 121,
          g: 224,
          b: 195,
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
      secondary: {
        start: {
          r: 248,
          g: 202,
          b: 163,
        },
        end: {
          r: 165,
          g: 231,
          b: 226,
        },
        range: {
          r: -83,
          g: 29,
          b: 63,
        },
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
