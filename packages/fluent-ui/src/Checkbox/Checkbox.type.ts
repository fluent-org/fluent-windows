import * as React from 'react'
import { StandardProps } from '..'

export interface CheckboxProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  children?: React.ReactNode
}
