import * as React from 'react'
import { ThemeProvider as BaseProvider } from '../styles/styled'
import createTheme, { Theme } from '../styles/createTheme'

interface ThemeProviderProps {
  theme: Theme
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children
}: ThemeProviderProps): React.ReactElement => {
  const customTheme = createTheme(theme)
  return (
    <BaseProvider theme={customTheme}>
      <>{children}</>
    </BaseProvider>
  )
}

export default ThemeProvider
