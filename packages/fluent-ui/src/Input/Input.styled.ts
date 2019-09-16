import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { InputClassProps } from './Input.type'

const wrapper: Style = {
  display: 'inline-block',
  position: 'relative',
  minWidth: 200,
  font: 'inherit'
}

const root = (theme: Theme) => ({
  outline: 'none',
  font: 'inherit',
  width: '100%',
  borderRadius: 2,
  border: '2px solid',
  borderColor: theme.colors!.standard!.default,
  transition: theme.transitions!.input,
  // ${th.size('medium.input')},
  '&:hover': {
    borderColor: theme.colors!.standard!.dark1
  },
  '&:active, &:focus': {
    borderColor: theme.colors!.primary!.default
  },
  '&:disabled': {
    color: theme.colors!.standard!.dark2,
    backgroundColor: theme.colors!.standard!.light1,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },
  ...theme.sizes!.medium!.input
})
const error = (theme: Theme): Style => ({
  borderColor: theme.colors!.error!.default,
  '&:hover': {
    borderColor: theme.colors!.error!.default
  },
  '&:active, &:focus': {
    borderColor: theme.colors!.error!.default
  }
})

const clearedIcon = (theme: Theme): Style => ({
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  fontSize: 12,
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions!.input,
  '&:hover': {
    backgroundColor: theme.colors!.primary!.default,
    color: theme.colors!.white!.default
  }
})

export const styles = (theme: Theme): Styles<InputClassProps> => ({
  root: root(theme),
  error: error(theme),
  wrapper,
  clearedIcon: clearedIcon(theme)
})
