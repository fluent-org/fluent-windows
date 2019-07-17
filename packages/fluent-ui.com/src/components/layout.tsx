import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, Normalize, Theme, Box } from '@fluent-ui/core'

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

const GlobalStyle = createGlobalStyle`
  code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Box as="main" background="url(/msft-verge-fluent.jpg) 50% center / cover no-repeat fixed">
      {children}
    </Box>
  </ThemeProvider>
)

export default Layout
