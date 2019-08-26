import * as PropTypes from 'prop-types'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { FlattenSimpleInterpolation } from '../styles/styled'

export type TransitionType = 'fade' | 'zoom' | 'slide' | 'collapse' | 'grow' | 'custom'

export interface TransitionProps extends Omit<CSSTransitionProps, 'in'> {
  children: React.ReactElement
  type?: TransitionType
  visible?: boolean
  wrapper?: boolean
  custom?: FlattenSimpleInterpolation
}

export interface StyledContainerProps {
  children: React.ReactElement
  forwardRef: React.Ref<HTMLDivElement>
  type?: TransitionType
  visible?: boolean
  wrapper?: boolean
  wrapperHeight: number
  setWrapperHeight: React.Dispatch<number>
  custom?: FlattenSimpleInterpolation
}

export const TransitionPropTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf<TransitionType>(['fade', 'zoom', 'slide', 'collapse', 'grow', 'custom']),
  visible: PropTypes.bool,
  wrapper: PropTypes.bool,
  custom: PropTypes.any,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  addEndListener: PropTypes.func,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func
}
