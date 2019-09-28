import { Style, Styles } from 'jss'
import { Theme } from '../../styles'
import { TextAreaClassProps, TextAreaProps } from './TextArea.type'

const root = (theme: Theme): Style => ({
  outline: 'none',
  font: 'inherit',
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

const ghost = (theme: Theme): Style => ({
  backgroundColor: 'transparent',
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
  root: root(theme),
  error: error(theme),
  ghost: ghost(theme),
  resize
})
