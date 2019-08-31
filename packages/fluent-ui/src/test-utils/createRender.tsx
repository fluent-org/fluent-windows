import * as React from 'react'
import * as PropTypes from 'prop-types'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { SheetsRegistry } from 'react-jss'
import { ThemeProvider } from '../ThemeProvider'

interface WrapperProps {
  children?: React.ReactNode
}

let sheets: SheetsRegistry

const Wrapper: React.FC<WrapperProps> = ({ children }): React.ReactElement => {
  sheets = new SheetsRegistry()
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
  sheets: SheetsRegistry
}

const customRender = (ui: React.ReactElement, options?: RenderOptions): Result => ({
  ...render(ui, {
    wrapper: Wrapper,
    ...options
  }),
  sheets
})

export { customRender as render }
