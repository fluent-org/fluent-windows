import * as React from 'react'
import { JssProvider, ThemeProvider as BaseProvider } from '@fluent-windows/styles'
import { Rule, StyleSheet, SheetsRegistry } from 'jss'
import createTheme, { Theme } from '../styles/createTheme'

interface ThemeProviderProps {
  theme?: Theme
  registry?: SheetsRegistry
  children: React.ReactNode
}

const generateId = (rule: Rule, sheet?: StyleSheet<string>): string => {
  const prefix = sheet && sheet.options.classNamePrefix!.replace(/-/g, '')
  return prefix ? `F${prefix}-${rule.key}` : rule.key
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  registry,
  children,
  ...rest
}: ThemeProviderProps): React.ReactElement => {
  const customTheme = createTheme(theme)
  return (
    <JssProvider generateId={generateId} registry={registry} {...rest}>
      <BaseProvider theme={customTheme}>{children}</BaseProvider>
    </JssProvider>
  )
}

export default ThemeProvider
