import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface InputProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  cleared?: boolean
  password?: boolean
  error?: boolean
}

export const InputPropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  cleared: PropTypes.bool,
  password: PropTypes.bool,
  error: PropTypes.bool
}
