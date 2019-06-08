import React, { SFC, ReactElement, ReactChild } from 'react'
import StyledButton from './Button.styled'

interface ButtonProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  children: ReactChild
}

const Button: SFC<ButtonProps> = ({
  variant = 'primary',
  disabled,
  size,
  children
}: ButtonProps): ReactElement => {
  return (
    <StyledButton variant={variant} disabled={disabled} size={size}>
      {children}
    </StyledButton>
  )
}

export default Button
