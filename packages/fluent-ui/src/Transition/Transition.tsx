import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { Type, StyledContainer } from './Transition.styled'

export interface TransitionProps extends Omit<CSSTransitionProps, 'in'> {
  type?: Type
  visible?: boolean
}

const Transition = React.forwardRef<HTMLElement, TransitionProps>(
  (
    { type = 'fade', appear = true, timeout = 250, visible, children, ...rest }: TransitionProps,
    ref
  ): React.ReactElement => {
    return (
      <CSSTransition in={visible} appear={appear} timeout={timeout} classNames={type} {...rest}>
        <StyledContainer ref={ref} visible={visible} type={type}>
          {children}
        </StyledContainer>
      </CSSTransition>
    )
  }
)

Transition.displayName = 'FTransition'

export default Transition
