import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface ProgressProps extends StandardProps {
  value?: number
}

export const ProgressPropTypes = {
  value: PropTypes.number
}
