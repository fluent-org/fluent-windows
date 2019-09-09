import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ToggleClassProps } from './Toggle.type'

const root = (theme: Theme): Style => ({
  width: 40,
  height: 20,
  borderRadius: 20,
  position: 'relative',
  border: '2px solid',
  transition: theme.transitions!.toggle,
  // checked
  backgroundColor: 'transparent',
  borderColor: theme.colors!.black!.default,
  '&:active': {
    backgroundColor: theme.colors!.standard!.dark1,
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
  color: theme.colors!.white!.default,
  backgroundColor: theme.colors!.primary!.default,
  borderColor: theme.colors!.primary!.default,
  '&:active': {
    backgroundColor: theme.colors!.primary!.dark1,
    borderColor: theme.colors!.primary!.dark1
  }
})
const disabled = (theme: Theme): Style => ({
  borderColor: theme.colors!.standard!.default,
  pointerEvents: 'none',
  // input element
  '& > input': {
    cursor: 'not-allowed'
  }
})
const checkedAndDisabled = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.standard!.default
})

const circleSize = 12
const circle = (theme: Theme): Style => ({
  width: circleSize,
  height: circleSize,
  marginTop: -(circleSize / 2),
  borderRadius: '50%',
  transition: theme.transitions!.toggle,
  position: 'absolute',
  top: '50%',
  // checked false
  left: 3,
  backgroundColor: theme.colors!.black!.default
})
const circleChecked = (theme: Theme): Style => ({
  transform: 'translate3d(-100%, 0, 0)',
  left: '100%',
  marginLeft: -3,
  backgroundColor: theme.colors!.white!.default
})
const circleDisabled = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.standard!.dark1
})
const circleCheckedAndDisabled = (theme: Theme): Style => ({
  backgroundColor: theme.colors!.white!.default
})

export const styles = (theme: Theme): Styles<ToggleClassProps> => ({
  root: root(theme),
  checked: checked(theme),
  disabled: disabled(theme),
  checkedAndDisabled: checkedAndDisabled(theme),
  circle: circle(theme),
  circleChecked: circleChecked(theme),
  circleDisabled: circleDisabled(theme),
  circleCheckedAndDisabled: circleCheckedAndDisabled(theme)
})
