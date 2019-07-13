import * as React from 'react'
import styled, { css } from 'styled-components'
import { variant } from '@xstyled/system'
import { createBaseTransition } from '../styles/createTransition'

export type Type = 'fade' | 'zoom' | 'slide'
export interface StyledContainerProps {
  type?: Type
  visible?: boolean
}

export const fade = css`
  &.fade-enter {
    opacity: 0;
    &-active {
      opacity: 1;
    }
  }
  &.fade-exit {
    opacity: 1;
    &-active {
      opacity: 0;
    }
  }
`

export const zoom = css`
  &.zoom-enter {
    transform: scale3d(0, 0, 0);
    &-done {
      transform: none;
    }
  }
  &.zoom-exit {
    transform: none;
    &-active {
      transform: scale3d(0, 0, 0);
    }
    &-done {
      transform: scale3d(0, 0, 0);
    }
  }
`

export const slide = css`
  &.slide-enter {
    transform: translateY(100vh);
    &-done {
      transform: none;
    }
  }
  &.slide-exit {
    transform: none;
    &-active {
      transform: translateY(100vh);
    }
    &-done {
      transform: translateY(100vh);
    }
  }
`

export const type = variant({
  prop: 'type',
  default: 'fade',
  variants: {
    fade: css`
      transition: ${createBaseTransition(['opacity'])};
      ${({ visible }: StyledContainerProps): string | false =>
        visible ? `opacity: 1;` : `opacity: 0;`}
    `,
    zoom: css`
      transition: ${createBaseTransition(['transform'])};
      ${({ visible }: StyledContainerProps): string | false =>
        visible ? `transform: none;` : `transform: scale3d(0, 0, 0);`}
    `,
    slide: css`
      transition: ${createBaseTransition(['transform'])};
      ${({ visible }: StyledContainerProps): string | false =>
        visible ? `transform: none;` : `transform: translateY(100vh);`}
    `
  }
})

export const StyledContainer = styled(
  ({ children, ...props }): React.ReactElement => React.cloneElement(children, props)
)<StyledContainerProps>`
  ${type}

  ${fade}
  ${zoom}
  ${slide}
`
