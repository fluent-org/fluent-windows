import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ItemClassProps } from './Item.type'

const root = (theme: Theme): Style => ({
  position: 'relative',
  cursor: 'pointer',
  textDecoration: 'none',
  minHeight: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '12px 20px',
  transition: theme.transitions!.default,
  color: 'inherit',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: theme.colors!.standard!.transparent1
  },
  '&:active': {
    color: theme.colors!.black!.default,
    backgroundColor: theme.colors!.standard!.transparent2
  }
})
const reveal = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.standard!.light2,
  '&:hover': {
    backgroundColor: theme.colors!.standard!.light1
  },
  '&:active': {
    backgroundColor: theme.colors!.standard!.dark1
  }
})

const activeBar = (theme: Theme): Style => ({
  position: 'absolute',
  backgroundColor: theme.colors!.primary!.default,
  transition: theme.transitions!.default,
  // horizontal false
  width: 6,
  height: 24,
  left: 0,
  top: '50%',
  marginTop: -12,
  // active false
  transform: 'scale3d(0, 0, 0)'
})
const activeBarHorizontal: Style = {
  // horizontal false
  width: '80%',
  height: 4,
  left: '10%',
  bottom: 0
}
const activeBarActive: Style = {
  transform: 'scale3d(1, 1, 1)'
}

const prefixRoot = (theme: Theme): Style => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions!.default
})

const text = (theme: Theme): Style => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontSize: 14,
  transition: theme.transitions!.default,
  // expanded false
  width: 0,
  opacity: 0,
  paddingLeft: 0
})
const textExpanded: Style = {
  width: 'auto',
  opacity: 1
}
const textNoChildren: Style = {
  paddingLeft: '0 !important'
}
const textHasPrefix: Style = {
  paddingLeft: 12
}

export const styles = (theme: Theme): Styles<ItemClassProps> => ({
  root: root(theme),
  reveal: reveal(theme),
  activeBar: activeBar(theme),
  activeBarHorizontal,
  activeBarActive,
  prefixRoot: prefixRoot(theme),
  text: text(theme),
  textExpanded,
  textNoChildren,
  textHasPrefix
})
