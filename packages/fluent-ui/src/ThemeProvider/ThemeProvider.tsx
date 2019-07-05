import * as React from 'react'
import { FC, ReactElement, ReactNode } from 'react'
import { ThemeProvider as BaseProvider } from '@xstyled/styled-components'
import createTheme, { Theme } from '../styles/createTheme'

import Normalize from './normalize'

interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  children
}: ThemeProviderProps): ReactElement => {
  const customTheme = createTheme(theme)
  return (
    <BaseProvider theme={customTheme}>
      <>
        <Normalize />
        {children}
      </>
    </BaseProvider>
  )
}

export default ThemeProvider
