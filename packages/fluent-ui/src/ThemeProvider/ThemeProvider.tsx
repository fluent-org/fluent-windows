import * as React from 'react'
import { FC, ReactElement, ReactNode } from 'react'
import { ThemeProvider as BaseProvider } from '@xstyled/styled-components'
import defaultTheme, { Theme } from '../theme'
import { deepMerge } from '../utils'
import Normalize from './normalize'

interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  children
}: ThemeProviderProps): ReactElement => {
  const mergeTheme = deepMerge<Theme>(defaultTheme, theme)
  return (
    <BaseProvider theme={mergeTheme}>
      <>
        <Normalize />
        {children}
      </>
    </BaseProvider>
  )
}

export default ThemeProvider
