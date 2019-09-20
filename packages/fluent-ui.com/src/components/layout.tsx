import * as React from 'react'
import { createGlobalStyle } from '@fluent-ui/styles'
import { ThemeProvider, Normalize, Theme } from '@fluent-ui/core'
import { useAction } from '@fluent-ui/hooks'
import { getCookie } from '../utils'

interface LayoutProps {
  children: React.ReactNode
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

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => {
  const [theme, setTheme] = React.useState<Theme>({})
  const global = typeof document !== `undefined` ? document : null
  useAction(
    'theme/setPrimaryColor',
    (primaryColor: string): void => {
      if (global) global.cookie = `primaryColor=${primaryColor};path=/;max-age=31536000`
      setTheme({
        colors: {
          primary: {
            default: primaryColor
          }
        }
      })
    },
    []
  )
  useAction(
    'theme/resetPrimaryColor',
    (): void => {
      if (global) global.cookie = `primaryColor=;path=/;max-age=31536000`
      setTheme({
        colors: {
          primary: {
            default: '#0078D4'
          }
        }
      })
    },
    []
  )
  React.useEffect((): void => {
    // @ts-ignore
    if (process.browser) {
      const primaryColor = getCookie('primaryColor') || '#0078D4'
      setTheme({
        colors: {
          primary: {
            default: primaryColor
          }
        }
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
