import * as React from 'react'

type SpinnerSize = 'small' | 'medium' | 'large'
export type SpinnerLabelPosition = 'top' | 'right' | 'bottom' | 'left'

export interface SpinnerProps extends StandardProps {
  size?: SpinnerSize
  label?: React.ReactText
  labelPosition?: SpinnerLabelPosition
}
