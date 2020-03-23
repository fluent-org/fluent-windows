import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type ProgressClassProps = 'root' | 'progress' | 'isIndeterminate'

export interface ProgressProps extends StandardProps, StyledProps {
  value?: number
}

export const ProgressPropTypes = {
  value: PropTypes.number
}
