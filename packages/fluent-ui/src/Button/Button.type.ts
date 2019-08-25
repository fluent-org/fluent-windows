import * as React from 'react'
import { StandardProps, StyledProps } from '..'

export interface ButtonProps
  extends StandardProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    StyledProps {
  variant?: 'standard' | 'primary'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  block?: boolean

  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
