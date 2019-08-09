import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { FlattenSimpleInterpolation } from '../styles/styled'

export type TransitionType = 'fade' | 'zoom' | 'slide' | 'collapse' | 'grow'

export interface TransitionProps extends Omit<CSSTransitionProps, 'in'> {
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
