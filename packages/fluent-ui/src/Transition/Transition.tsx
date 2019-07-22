import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { Type, StyledContainer } from './Transition.styled'
import { FlattenSimpleInterpolation } from '../styles/styled'

export interface TransitionProps extends Omit<CSSTransitionProps, 'in'> {
  type?: Type
  visible?: boolean
  wrapper?: boolean
  custom?: FlattenSimpleInterpolation
}

const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  (
    {
      type = 'fade',
      wrapper = true,
      appear = true,
      timeout = 250,
      visible,
      custom,
      children,
      ...rest
    }: TransitionProps,
    ref
  ): React.ReactElement => {
    const [wrapperHeight, setWrapperHeight] = React.useState(0)
    return (
      <CSSTransition in={visible} appear={appear} timeout={timeout} classNames={type} {...rest}>
        <StyledContainer
          forwardRef={ref}
          visible={visible}
          type={type}
          wrapper={wrapper}
          wrapperHeight={wrapperHeight}
          setWrapperHeight={setWrapperHeight}
          custom={custom}
        >
          {children}
        </StyledContainer>
      </CSSTransition>
    )
  }
)

Transition.displayName = 'FTransition'

export default Transition
