import { Style, Styles } from 'jss'
import { Theme, lighten } from '../styles'
import { IconButtonClassProps } from './IconButton.type'

const root = (theme: Theme): Style => ({
  border: 'none',
  outline: 'none',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: 'inherit',
  borderRadius: '50%',
  overflow: 'hidden',
  transition: theme.transitions!.button,
  '&:disabled': {
    color: theme.colors!.standard!.dark3,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
})
const variantStandard = (theme: Theme): Style => ({
  color: theme.colors!.primary!.default,
  backgroundColor: 'transparent',
  '&:hover, &:focus': {
    backgroundColor: lighten('primary.light1', 0.08)
  },
  '&:active': {
    backgroundColor: lighten('primary.light1', 0.36)
  }
})
const variantPrimary = (theme: Theme): Style => ({
  color: theme.colors!.white!.default,
  backgroundColor: theme.colors!.primary!.default,
  boxShadow: theme.shadows![3],
  '&:hover, &:focus': {
    backgroundColor: theme.colors!.primary!.dark1
  },
  '&:active': {
    color: theme.colors!.white!.default,
    backgroundColor: theme.colors!.primary!.dark3,
    boxShadow: theme.shadows![4]
  }
})
const sizeSmall = (theme: Theme): Style => theme.sizes!.small!.iconButton
const sizeMedium = (theme: Theme): Style => theme.sizes!.medium!.iconButton
const sizeLarge = (theme: Theme): Style => theme.sizes!.large!.iconButton

export const styles = (theme: Theme): Styles<IconButtonClassProps> => ({
  root: root(theme),
  variantStandard: variantStandard(theme),
  variantPrimary: variantPrimary(theme),
  sizeSmall: sizeSmall(theme),
  sizeMedium: sizeMedium(theme),
  sizeLarge: sizeLarge(theme)
})
