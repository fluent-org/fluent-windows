import React, { SFC, ReactChild, ReactElement } from 'react'
import { ThemeProvider as BaseProvider } from '@xstyled/styled-components'
import defaultTheme, { Theme } from '../../theme'
import { deepMerge } from '../../utils'
import 'normalize.css'

interface ThemeProviderProps {
  theme: Theme
  children: ReactChild
}

const ThemeProvider: SFC<ThemeProviderProps> = ({
  theme,
  children
}: ThemeProviderProps): ReactElement => {
  const mergeTheme = deepMerge<Theme>(defaultTheme, theme)
  return <BaseProvider theme={mergeTheme}>{children}</BaseProvider>
}

export default ThemeProvider
