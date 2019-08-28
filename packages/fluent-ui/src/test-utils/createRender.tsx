import * as React from 'react'
import * as PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../ThemeProvider'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }): React.ReactElement => (
  <ThemeProvider theme={{}}>{children}</ThemeProvider>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

const customRender = (ui: React.ReactElement, options: any) =>
  render(ui, { wrapper: Wrapper, ...options })

export { customRender as render }
