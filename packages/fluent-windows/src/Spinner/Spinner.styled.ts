import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { SpinnerClassProps } from './Spinner.type'

const root = (theme: Theme): Style => ({
  display: 'inline-block',
  borderRadius: '50%',
  border: '1.5px solid',
  borderColor: `${theme.colors!.primary!.default} ${theme.colors!.primary!.light3} ${
    theme.colors!.primary!.light3
  }`,
  '@global': {
    '@keyframes rotate': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    }
  },
  animation: '$rotate 1.3s cubic-bezier(0.5, 0.2, 0.3, 0.65) infinite'
})

const sizeSmall: Style = {
  width: 16,
  height: 16
}
const sizeMedium: Style = {
  width: 20,
  height: 20
}
const sizeLarge: Style = {
  width: 28,
  height: 28
}

export const styles = (theme: Theme): Styles<SpinnerClassProps> => ({
  root: root(theme),
  sizeSmall,
  sizeMedium,
  sizeLarge
})
