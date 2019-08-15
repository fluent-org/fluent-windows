import * as React from 'react'

export interface RadioProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  checked?: boolean
  value?: string
  onChange?: (checked: string) => void
  disabled?: boolean
  children?: React.ReactNode
}
