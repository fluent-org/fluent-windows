import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type CheckboxClassProps = 'root' | 'checked' | 'disabled'

export interface CheckboxProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'>,
    StyledProps {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

export const CheckboxPropTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
