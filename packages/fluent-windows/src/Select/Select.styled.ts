import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { SelectClassProps } from './Select.type'

const root: Style = {
  display: 'inline-block',
  position: 'relative',
  minWidth: 160,
  height: 32,
  font: 'inherit',
  cursor: 'pointer'
}
const disabled: Style = {
  cursor: 'not-allowed'
}

const select = (theme: Theme): Style => ({
  outline: 'none',
  font: 'inherit',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  borderRadius: 2,
  border: '2px solid',
  paddingLeft: 12,
  paddingRight: 32,
  display: 'flex',
  alignItems: 'center',
  borderColor: theme.colors!.standard!.default,
  transition: theme.transitions!.input,
  '&:hover': {
    borderColor: theme.colors!.standard!.dark1
  },
  '&:active, &:focus': {
    borderColor: theme.colors!.primary!.default
  }
})
const selectDisabled = (theme: Theme): Style => ({
  color: theme.colors!.standard!.dark2,
  backgroundColor: theme.colors!.standard!.light1,
  cursor: 'not-allowed',
  '&:hover, &:active, &:focus': {
    borderColor: theme.colors!.standard!.default
  }
})

const icon = (theme: Theme): Style => ({
  width: 32,
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  fontSize: 12,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  // disabledIcon false
  color: theme.colors!.standard!.dark3,
  cursor: 'pointer'
})
const disabledIcon = (theme: Theme): Style => ({
  color: theme.colors!.standard!.dark2,
  cursor: 'not-allowed'
})

export const styles = (theme: Theme): Styles<SelectClassProps> => ({
  root,
  disabled,
  select: select(theme),
  selectDisabled: selectDisabled(theme),
  icon: icon(theme),
  disabledIcon: disabledIcon(theme)
})
