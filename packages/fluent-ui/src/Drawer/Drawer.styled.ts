import { styled, th, css, FlattenSimpleInterpolation } from '../styles/styled'
import { createBaseTransition } from '../styles/createTransition'
import { DrawerProps } from './Drawer.type'

const anchorTransitionMap = {
  left: '-100%, 0, 0',
  right: '100%, 0, 0',
  top: '0, -100%, 0',
  bottom: '0, 100%, 0'
}
export const createSwipe = (anchor: DrawerProps['anchor']): any => css`
  transition: ${createBaseTransition(['transform', 'visibility'])};
  ${({ visible }: any): string =>
    visible ? `transform: none;` : `transform: translate3d(-100%, 0, 0);visibility: hidden;`}
  &.custom-enter {
    transform: translate3d(${anchorTransitionMap[anchor!]});
    &-done {
      transform: none;
    }
  }
  &.custom-exit {
    transform: none;
    &-active {
      transform: translate3d(${anchorTransitionMap[anchor!]});
    }
    &-done {
      transform: translate3d(${anchorTransitionMap[anchor!]});
    }
  }
`

interface StyledDrawerProps {
  anchor: DrawerProps['anchor']
}
const anchorMap = {
  left: css`
    height: 100%;
    left: 0;
    right: auto;
    top: 0;
    bottom: 0;
  `,
  right: css`
    height: 100%;
    left: auto;
    right: 0;
    top: 0;
    bottom: 0;
  `,
  top: css`
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
  `,
  bottom: css`
    width: 100%;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
  `
}
export const StyledDrawer = styled.div<StyledDrawerProps>`
  position: fixed;
  z-index: 1001;
  box-shadow: ${th.shadow(1)};
  background-color: ${th.color('white.default')};
  ${({ anchor }: StyledDrawerProps): FlattenSimpleInterpolation => anchorMap[anchor!]}
`

export const StyledMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: ${th.color('standard.transparent2')};
`
