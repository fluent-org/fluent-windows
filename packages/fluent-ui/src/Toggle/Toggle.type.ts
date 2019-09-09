import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type ToggleClassProps =
  | 'root'
  | 'checked'
  | 'disabled'
  | 'checkedAndDisabled'
  | 'circle'
  | 'circleChecked'
  | 'circleDisabled'
  | 'circleCheckedAndDisabled'

export interface ToggleProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'>,
    StyledProps {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  children?: React.ReactNode
}

export const TogglePropTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
}
