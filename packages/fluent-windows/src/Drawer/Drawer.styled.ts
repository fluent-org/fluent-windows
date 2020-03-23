import { Styles, Style } from 'jss'
import { Theme } from '../styles'
import { createBaseTransition } from '../styles/createTransition'
import { DrawerProps, DrawerClassProps } from './Drawer.type'

const anchorTransitionMap = {
  left: '-100%, 0, 0',
  right: '100%, 0, 0',
  top: '0, -100%, 0',
  bottom: '0, 100%, 0'
}
export const createSwipe = (anchor: DrawerProps['anchor']): Style => ({
  transition: createBaseTransition(['transform', 'visibility']),
  '&.custom-enter': {
    transform: `translate3d(${anchorTransitionMap[anchor!]})`,
    '&-done': {
      transform: 'none'
    }
  },
  '&.custom-exit': {
    transform: 'none',
    '&-active': {
      transform: `translate3d(${anchorTransitionMap[anchor!]})`
    },
    '&-done': {
      transform: `translate3d(${anchorTransitionMap[anchor!]})`
    }
  }
})

const anchorMap = {
  left: {
    height: '100%',
    left: 0,
    right: 'auto',
    top: 0,
    bottom: 0
  },
  right: {
    height: '100%',
    left: 'auto',
    right: 0,
    top: 0,
    bottom: 0
  },
  top: {
    width: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 'auto'
  },
  bottom: {
    width: '100%',
    left: 0,
    right: 0,
    top: 'auto',
    bottom: 0
  }
}

export const root = (theme: Theme): Style => ({ anchor }: DrawerProps): Style => ({
  position: 'fixed',
  zIndex: 1001,
  boxShadow: theme.shadows![3],
  backgroundColor: theme.colors!.white!.default,
  ...anchorMap[anchor!]
})

export const mask = (theme: Theme): Style => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
  backgroundColor: theme.colors!.standard!.transparent2
})

export const styles = (theme: Theme): Styles<DrawerClassProps> => ({
  root: root(theme),
  mask: mask(theme)
})
