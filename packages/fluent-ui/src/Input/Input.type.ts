import * as React from 'react'

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
