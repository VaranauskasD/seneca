import React, {
  ReactElement,
  JSXElementConstructor,
  ComponentType,
} from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

const AllTheProviders = (props: { children?: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders as ComponentType, ...options })
