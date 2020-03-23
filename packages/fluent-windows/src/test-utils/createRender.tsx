import * as React from 'react'
import * as PropTypes from 'prop-types'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { SheetsRegistry } from '@fluent-windows/styles'
import { StyleSheet } from 'jss'
import ThemeProvider from '../ThemeProvider'

interface WrapperProps {
  children?: React.ReactNode
}

interface MySheetsRegistry extends SheetsRegistry {
  registry: StyleSheet[] | any
}

let sheets: MySheetsRegistry

const Wrapper: React.FC<WrapperProps> = ({ children }): React.ReactElement => {
  sheets = new SheetsRegistry() as MySheetsRegistry
  return (
    <ThemeProvider theme={{}} registry={sheets}>
      {children}
    </ThemeProvider>
  )
}
Wrapper.propTypes = {
  children: PropTypes.node
}

interface Result extends RenderResult {
  sheets: MySheetsRegistry
}

const customRender = (ui: React.ReactElement, options?: RenderOptions): Result => ({
  ...render(ui, {
    wrapper: Wrapper,
    ...options
  }),
  sheets
})

export { customRender as render }
