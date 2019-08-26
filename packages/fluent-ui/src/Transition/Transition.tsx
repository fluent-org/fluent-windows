import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { StyledContainer } from './Transition.styled'
import { TransitionProps, TransitionPropTypes } from './Transition.type'

const Transition: React.FC<TransitionProps> = React.forwardRef<HTMLDivElement, TransitionProps>(
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
    },
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

Transition.propTypes = TransitionPropTypes

export default Transition
