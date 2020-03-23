import { Style, Styles } from 'jss'
import { Theme } from '../../styles'
import { TextAreaClassProps, TextAreaProps } from './TextArea.type'

const wrapper = (theme: Theme): Style => (
  props: TextAreaProps & { focus: boolean; _value: string }
): Style => ({
  display: 'inline-block',
  position: 'relative',
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
  '& > textarea': { margin: '0 !important' },
  ...(!props.disabled && {
    '&:hover': {
      '& textarea': {
        borderColor: theme.colors!.standard!.transparent1
      }
    }
  })
})
const disabled: Style = {
  cursor: 'not-allowed'
}

const root = (theme: Theme): Style => (
  props: TextAreaProps & { focus: boolean; _value: string }
): Style => ({
  boxSizing: 'border-box',
  outline: 'none',
  font: 'inherit',
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
  ...(props.label ? theme.sizes!.medium!.inputWithLabel : theme.sizes!.medium!.input)
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

const resize = ({ resize }: TextAreaProps): Style => ({
  resize
})

export const styles = (theme: Theme): Styles<TextAreaClassProps> => ({
  wrapper: wrapper(theme),
  disabled,
  root: root(theme),
  error: error(theme),
  ghost: ghost(theme),
  resize
})
