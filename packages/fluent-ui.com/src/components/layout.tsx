import * as React from 'react'
import { createGlobalStyle } from '@fluent-ui/styles'
import { ThemeProvider, Normalize, Theme } from '@fluent-ui/core'

interface LayoutProps {
  children: React.ReactNode
}

const theme: Theme = {
  colors: {
    standard: {
      // light2: '#000'
    }
  }
}

const GlobalStyle = createGlobalStyle({
  body: {
    overflow: 'hidden'
  },
  code: {
    backgroundColor: 'rgba(27, 31, 35, 0.05)',
    borderRadius: 3,
    fontSize: '85%',
    margin: 0,
    padding: '0.2em 0.4em'
  },
  img: {
    display: 'block',
    width: '100%'
  }
})

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Layout
