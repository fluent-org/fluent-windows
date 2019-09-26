import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { InputClassProps, InputProps } from './Input.type'

const wrapper: Style = {
  display: 'inline-block',
  position: 'relative',
  minWidth: 200,
  font: 'inherit'
}

const root = (theme: Theme): Style => ({
  outline: 'none',
  font: 'inherit',
  width: '100%',
  borderRadius: 2,
  border: '2px solid',
  borderColor: theme.colors!.standard!.default,
  transition: theme.transitions!.input,
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
  ...theme.sizes!.medium!.input,
  '&:not(:first-child)': {
    paddingLeft: 30
  },
  '&:not(:last-child)': {
    paddingRight: 30
  }
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

const extra = (theme: Theme): Style => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors!.standard!.transparent3
})
const prefix = (theme: Theme): Style => ({
  ...extra(theme),
  left: 12
})
const suffix = (theme: Theme): Style => (props: InputProps): Style => ({
  ...extra(theme),
  right: 12 + (props.suffix && !!props.value ? 30 : 0)
})

export const styles = (theme: Theme): Styles<InputClassProps> => ({
  root: root(theme),
  error: error(theme),
  wrapper,
  clearedIcon: clearedIcon(theme),
  prefix: prefix(theme),
  suffix: suffix(theme)
})
