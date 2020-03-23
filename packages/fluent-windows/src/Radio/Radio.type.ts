import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type RadioClassProps =
  | 'root'
  | 'checked'
  | 'disabled'
  | 'circle'
  | 'circleChecked'
  | 'circleDisabled'

export interface RadioProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'>,
    StyledProps {
  checked?: boolean
  value?: string
  onChange?: (checked: string) => void
  disabled?: boolean
}

export const RadioPropTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
