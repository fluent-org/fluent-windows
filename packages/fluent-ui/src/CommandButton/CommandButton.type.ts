import * as React from 'react'

export interface CommandButtonProps
  extends StandardProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    StyledProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
