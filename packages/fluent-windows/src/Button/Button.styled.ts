import { Styles, Style } from 'jss'
import { ButtonClassProps } from './Button.type'
import { Theme } from '../styles'

const root = (theme: Theme): Style => ({
  display: 'inline-block',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  minWidth: 56,
  verticalAlign: 'middle',
  border: '2px solid',
  borderRadius: 2,
  textAlign: 'center',
  lineHeight: 1.5,
  transition: theme.transitions!.button,
  '&:disabled': {
    color: theme.colors!.standard!.dark2,
    backgroundColor: theme.colors!.standard!.light1,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
})
const variantStandard = (theme: Theme): Style => ({
  color: theme.colors!.black!.default,
  backgroundColor: theme.colors!.white!.default,
  borderColor: theme.colors!.standard!.default,
  '&:hover, &:focus': {
    borderColor: theme.colors!.standard!.dark1
  },
  '&:active': {
    backgroundColor: theme.colors!.standard!.default,
    borderColor: theme.colors!.standard!.dark3
  }
})
const variantPrimary = (theme: Theme): Style => ({
  color: theme.colors!.white!.default,
  backgroundColor: theme.colors!.primary!.default,
  borderColor: theme.colors!.primary!.default,
  boxShadow: theme.shadows![3],
  '&:hover, &:focus': {
    backgroundColor: theme.colors!.primary!.dark1,
    borderColor: theme.colors!.primary!.dark1
  },
  '&:active': {
    backgroundColor: theme.colors!.primary!.dark3,
    borderColor: theme.colors!.primary!.dark3,
    boxShadow: theme.shadows![4]
  }
})
const sizeSmall = (theme: Theme): Style => theme.sizes!.small!.button
const sizeMedium = (theme: Theme): Style => theme.sizes!.medium!.button
const sizeLarge = (theme: Theme): Style => theme.sizes!.large!.button
const block = {
  width: '100%'
}

const ghost = (theme: Theme): Style => ({
  color: 'inherit',
  backgroundColor: 'transparent',
  borderColor: theme.colors!.standard!.transparent1,
  '&:hover, &:focus': {
    backgroundColor: 'transparent',
    borderColor: theme.colors!.standard!.transparent2
  },
  '&:active': {
    backgroundColor: 'transparent',
    borderColor: theme.colors!.standard!.transparent3
  }
})

const rounded: Style = {
  borderRadius: 44
}

export const styles = (theme: Theme): Styles<ButtonClassProps> => ({
  root: root(theme),
  variantStandard: variantStandard(theme),
  variantPrimary: variantPrimary(theme),
  sizeSmall: sizeSmall(theme),
  sizeMedium: sizeMedium(theme),
  sizeLarge: sizeLarge(theme),
  block,
  ghost: ghost(theme),
  rounded
})
