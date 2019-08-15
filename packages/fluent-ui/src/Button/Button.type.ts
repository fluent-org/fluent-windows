import * as React from 'react'

export interface ButtonProps
  extends StandardProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    StyledProps {
  variant?: 'standard' | 'primary'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
