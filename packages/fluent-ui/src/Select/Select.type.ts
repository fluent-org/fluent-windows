import * as React from 'react'
import { StandardProps } from '..'

export interface SelectProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  value?: string | number
  onChange?: (value: string | number) => void
  disabled?: boolean
  children: React.ReactElement | React.ReactElement[]
}
