import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ProgressClassProps } from './Progress.type'

const root = (theme: Theme): Style => ({
  position: 'relative',
  overflow: 'hidden',
  height: 4,
  backgroundColor: theme.colors!.standard!.default
})

const progress = (theme: Theme): Style => ({
  width: '100%',
  transformOrigin: 'left',
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  // isIndeterminate false
  background: theme.colors!.primary!.default,
  transition: 'transform 0.43s linear',
  // keyframes
  '@global': {
    '@keyframes indeterminateProgress': {
      from: {
        transform: 'translateX(-130%)'
      },
      to: {
        transform: 'translateX(100%)'
      }
    }
  }
})
const isIndeterminate = (theme: Theme): Style => ({
  background: `linear-gradient(to right,
    ${theme.colors!.standard!.default} 0%,
    ${theme.colors!.primary!.default} 50%,
    ${theme.colors!.standard!.default} 100%
  )`,
  animation: '$indeterminateProgress 2.6s infinite'
})

export const styles = (theme: Theme): Styles<ProgressClassProps> => ({
  root: root(theme),
  progress: progress(theme),
  isIndeterminate: isIndeterminate(theme)
})
