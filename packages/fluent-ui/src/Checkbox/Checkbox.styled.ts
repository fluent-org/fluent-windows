import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { CheckboxClassProps } from './Checkbox.type'

const root = (theme: Theme): Style => ({
  width: 20,
  height: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: 2,
  border: '2px solid',
  transition: theme.transitions!.checkbox,
  color: theme.colors!.black!.default,
  backgroundColor: theme.colors!.white!.default,
  borderColor: theme.colors!.standard!.default,
  '&:hover, &:focus': {
    borderColor: theme.colors!.standard!.dark1
  },
  '&:active': {
    color: theme.colors!.white!.default,
    backgroundColor: theme.colors!.primary!.default,
    borderColor: theme.colors!.primary!.default
  },
  '& > input': {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1
  }
})
const checked = (theme: Theme): Style => ({
  color: theme.colors!.white!.default,
  backgroundColor: theme.colors!.primary!.default,
  borderColor: theme.colors!.primary!.default,
  '&:hover, &:focus': {
    borderColor: theme.colors!.primary!.default
  },
  '&:active': {
    backgroundColor: theme.colors!.primary!.dark3,
    borderColor: theme.colors!.primary!.dark3
  }
})
const disabled = (theme: Theme): Style => ({
  color: theme.colors!.standard!.dark2,
  backgroundColor: theme.colors!.standard!.light1,
  borderColor: theme.colors!.standard!.default,
  pointerEvents: 'none',
  cursor: 'not-allowed'
})

export const styles = (theme: Theme): Styles<CheckboxClassProps> => ({
  root: root(theme),
  checked: checked(theme),
  disabled: disabled(theme)
})
