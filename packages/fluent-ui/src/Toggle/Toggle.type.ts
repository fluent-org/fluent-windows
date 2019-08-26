import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface ToggleProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
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
