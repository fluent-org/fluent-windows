import * as React from 'react'

import { ThemeProvider, Normalize, Theme, Box } from '@fluent-ui/core'

interface LayoutProps {
  children: React.ReactNode
}

const theme: Theme = {
  colors: {
    primary: {
      // light2: '#000'
    }
  }
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <Box as="main">{children}</Box>
  </ThemeProvider>
)

export default Layout
