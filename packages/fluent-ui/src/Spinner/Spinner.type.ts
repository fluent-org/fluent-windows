import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type SpinnerClassProps = 'root' | 'sizeSmall' | 'sizeMedium' | 'sizeLarge'

type SpinnerSize = 'small' | 'medium' | 'large'

export interface SpinnerProps extends StandardProps, StyledProps {
  size?: SpinnerSize
}

export const SpinnerPropTypes = {
  size: PropTypes.oneOf<SpinnerSize>(['small', 'medium', 'large'])
}
