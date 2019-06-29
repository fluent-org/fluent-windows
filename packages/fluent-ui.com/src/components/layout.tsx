import React, { ReactElement, SFC, ReactNode } from 'react'

import { ThemeProvider, Theme, Box } from '@fluent-ui/core'

interface LayoutProps {
  children: ReactNode
}

const theme: Theme = {
  colors: {
    // primary: 'rgba(0, 0, 0, 0.2)',
    // accent: 'rgba(0, 120, 215, 1)'
  }
}

const Layout: SFC<LayoutProps> = ({ children }: LayoutProps): ReactElement => (
  <ThemeProvider theme={theme}>
    <Box as="main">{children}</Box>
  </ThemeProvider>
)

export default Layout
