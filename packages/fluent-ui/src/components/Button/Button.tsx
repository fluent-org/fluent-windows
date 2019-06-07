import React, { SFC, ReactElement, ReactChild } from 'react'
import StyledButton from './Button.styled'

interface ButtonProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean

  children: ReactChild
}

const Button: SFC<ButtonProps> = ({
  variant = 'primary',
  disabled,
  children
}: ButtonProps): ReactElement => {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button
