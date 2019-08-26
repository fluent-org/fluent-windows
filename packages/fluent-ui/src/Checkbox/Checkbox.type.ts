import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface CheckboxProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  children?: React.ReactNode
}

export const CheckboxPropTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
}
