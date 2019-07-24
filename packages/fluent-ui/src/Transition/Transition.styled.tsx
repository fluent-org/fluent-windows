import * as React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { variant } from '@xstyled/system'
import { createBaseTransition } from '../styles/createTransition'
import Box from '../Box'
import { StyledContainerProps } from './Transition.type'

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

export const collapse = css`
  &.collapse-enter {
    height: 0;
    &-active {
      height: ${({ wrapperHeight }: StyledContainerProps): number => wrapperHeight}px;
    }
    &-done {
      height: auto;
    }
  }
  &.collapse-exit {
    height: ${({ wrapperHeight }: StyledContainerProps): number => wrapperHeight}px;
    &-active {
      height: 0;
    }
  }
`

export const type = variant({
  prop: 'type',
  default: 'fade',
  variants: {
    fade: css`
      transition: ${createBaseTransition(['opacity', 'visibility'])};
      ${({ visible }: StyledContainerProps): string =>
        visible ? `opacity: 1;` : `opacity: 0;visibility: hidden;`}
    `,
    zoom: css`
      transition: ${createBaseTransition(['transform', 'visibility'])};
      ${({ visible }: StyledContainerProps): string =>
        visible ? `transform: none;` : `transform: scale3d(0, 0, 0);visibility: hidden;`}
    `,
    slide: css`
      transition: ${createBaseTransition(['transform', 'visibility'])};
      ${({ visible }: StyledContainerProps): string =>
        visible ? `transform: none;` : `transform: translateY(100vh);visibility: hidden;`}
    `,
    collapse: css`
      overflow: hidden;
      transition: ${createBaseTransition(['height', 'visibility'])};
      ${({ visible, wrapperHeight }: StyledContainerProps): string =>
        visible ? `height: ${wrapperHeight}px;` : `height: 0;visibility: hidden;`}
    `,
    custom: ({ custom }: StyledContainerProps): FlattenSimpleInterpolation | string => custom || ''
  }
})

export const StyledContainer = styled(
  ({
    children,
    forwardRef,
    wrapper,
    setWrapperHeight,
    ...props
  }: StyledContainerProps): React.ReactElement => {
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const wrapperHeight = (wrapperRef && wrapperRef.current && wrapperRef.current.clientHeight) || 0
    React.useEffect((): void => {
      setWrapperHeight(wrapperHeight)
    }, [setWrapperHeight, wrapperHeight])
    return wrapper ? (
      <Box {...props} ref={forwardRef}>
        <Box ref={wrapperRef}>{children}</Box>
      </Box>
    ) : (
      React.cloneElement(children, props)
    )
  }
)<StyledContainerProps>`
  ${type}

  ${fade}
  ${zoom}
  ${slide}
  ${collapse}
`
