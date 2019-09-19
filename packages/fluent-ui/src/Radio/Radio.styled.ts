import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { RadioClassProps } from './Radio.type'

const root = (theme: Theme): Style => ({
  width: 20,
  height: 20,
  borderRadius: '50%',
  position: 'relative',
  display: 'inline-block',
  border: '2px solid',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: theme.transitions!.radio!,
  backgroundColor: theme.colors!.white!.default,
  // checked false
  borderColor: theme.colors!.standard!.default,
  '&:hover': {
    borderColor: theme.colors!.standard!.dark1
  },
  // input element
  '& > input': {
    width: '100%',
    height: '100%',
    opacity: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    cursor: 'pointer'
  }
})
const checked = (theme: Theme): Style => ({
  borderColor: theme.colors!.primary!.default,
  '&:hover': {
    borderColor: theme.colors!.primary!.default
  }
})
const disabled = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.standard!.light1,
  borderColor: theme.colors!.standard!.default,
  cursor: 'not-allowed',
  pointerEvents: 'none',
  '& > input': {
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
})

const circle = (theme: Theme): Style => ({
  borderRadius: '50%',
  transition: theme.transitions!.radio,
  backgroundColor: theme.colors!.black!.default,
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: 12,
  height: 12,
  marginLeft: -6,
  marginTop: -6,
  opacity: 0
})
const circleChecked: Style = {
  opacity: 1
}
const circleDisabled = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.standard!.dark3
})

export const styles = (theme: Theme): Styles<RadioClassProps> => ({
  root: root(theme),
  checked: checked(theme),
  disabled: disabled(theme),
  circle: circle(theme),
  circleChecked,
  circleDisabled: circleDisabled(theme)
})
