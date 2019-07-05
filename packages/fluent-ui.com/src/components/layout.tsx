import * as React from 'react'
import { ReactElement, SFC, ReactNode } from 'react'

import { ThemeProvider, Theme, Box } from '@fluent-ui/core'

interface LayoutProps {
  children: ReactNode
}

const theme: Theme = {
  colors: {
    primary: {
      // light2: '#000'
    }
  }
}

const Layout: SFC<LayoutProps> = ({ children }: LayoutProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Box as="main">{children}</Box>
  </ThemeProvider>
)

export default Layout
