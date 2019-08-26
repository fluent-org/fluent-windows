import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

type SpinnerSize = 'small' | 'medium' | 'large'
export type SpinnerLabelPosition = 'top' | 'right' | 'bottom' | 'left'

export interface SpinnerProps extends StandardProps {
  size?: SpinnerSize
  label?: React.ReactText
  labelPosition?: SpinnerLabelPosition
}

export const SpinnerPropTypes = {
  size: PropTypes.oneOf<SpinnerSize>(['small', 'medium', 'large']),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelPosition: PropTypes.oneOf<SpinnerLabelPosition>(['top', 'right', 'bottom', 'left'])
}
