import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { InputClassProps, InputProps } from './Input.type'

const PADDING_RIGHT = 34

const wrapper = (theme: Theme): Style => (
  props: InputProps & { focus: boolean; _value: string }
): Style => ({
  display: 'inline-block',
  position: 'relative',
  minWidth: 180,
  '& > span': {
    fontWeight: 600,
    position: 'absolute',
    left: 0,
    top: 0,
    cursor: 'text',
    transition: theme.transitions!.inputLabel,
    transformOrigin: 'top left',
    ...theme.sizes!.medium!.inputLabel,
    color: props.focus ? theme.colors!.black!.default : theme.colors!.standard!.dark2,
    ...((props.focus || props._value) && theme.sizes!.medium!.inputLabelFocus)
  },
  '& > div': { margin: '0 !important' },
  ...(!props.disabled && {
    '&:hover': {
      '& input': {
        borderColor: theme.colors!.standard!.transparent1
      }
    }
  })
})
const disabled: Style = {
  cursor: 'not-allowed'
}

const root = (theme: Theme): Style => (
  props: InputProps & { focus: boolean; _value: string }
): Style => ({
  boxSizing: 'border-box',
  outline: 'none',
  font: 'inherit',
  width: '100%',
  borderRadius: 2,
  border: '2px solid',
  borderColor: 'transparent',
  transition: theme.transitions!.input,
  backgroundColor: theme.colors!.standard!.light2,
  '&::placeholder': {
    transition: theme.transitions!.input,
    ...(!props.disabled && {
      color: 'transparent'
    })
  },
  '&:active, &:focus': {
    borderColor: `${props.error ? '' : theme.colors!.black!.default} ${
      props.disabled ? '' : '!important'
    }`,
    backgroundColor: theme.colors!.white!.default,
    ...(!props.disabled && {
      '&::placeholder': {
        color: theme.colors!.standard!.dark2
      }
    })
  },
  '&:disabled': {
    color: theme.colors!.standard!.dark3,
    backgroundColor: theme.colors!.standard!.default,
    borderColor: theme.colors!.standard!.default,
    pointerEvents: 'none'
  },
  ...(props.label ? theme.sizes!.medium!.inputWithLabel : theme.sizes!.medium!.input),
  '&:not(:last-child)': {
    paddingRight: PADDING_RIGHT
  }
})
const error = (theme: Theme): Style => ({
  borderColor: `${theme.colors!.error!.default} !important`,
  '&:hover': {
    borderColor: `${theme.colors!.error!.default} !important`
  },
  '&:active, &:focus': {
    borderColor: `${theme.colors!.error!.default} !important`
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
const clearedIcon = (theme: Theme): Style => ({
  ...extra(theme),
  right: 6
})
const suffix = (theme: Theme): Style => ({
  ...extra(theme),
  right: 6
})

const ghost = (theme: Theme): Style => ({
  backgroundColor: `${theme.colors!.standard!.transparent1} !important`,
  borderColor: theme.colors!.standard!.transparent1,
  '&:hover': {
    borderColor: theme.colors!.standard!.transparent2
  },
  '&:active, &:focus': {
    borderColor: theme.colors!.standard!.transparent3
  }
})

export const styles = (theme: Theme): Styles<InputClassProps> => ({
  wrapper: wrapper(theme),
  disabled,
  root: root(theme),
  error: error(theme),
  clearedIcon: clearedIcon(theme),
  suffix: suffix(theme),
  ghost: ghost(theme)
})
