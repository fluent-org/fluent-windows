import { themeGet } from '@fluent-windows/styles'
import { Style, Styles } from 'jss'
import { Theme, lighten } from '../styles'
import { TooltipClassProps } from './Tooltip.type'

const root = (theme: Theme): Style => ({
  backgroundColor: lighten(themeGet('colors.black.default', '#000')(theme), 0.6),
  color: themeGet('colors.white.default', '#fff')(theme),
  fontSize: '0.625rem',
  fontWeight: 500,
  padding: '4px 8px',
  margin: '6px 0',
  maxWidth: 320,
  borderRadius: 2,
  zIndex: 10001
})

export const styles = (theme: Theme): Styles<TooltipClassProps> => ({
  root: root(theme)
})
