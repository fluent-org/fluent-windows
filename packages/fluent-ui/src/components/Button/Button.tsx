import React, { SFC, ReactElement, ReactChild } from 'react'

import StyledButton from './Button.styled'

interface ButtonProps {
  variant?: 'primary' | 'accent'
  children: ReactChild
}

const Button: SFC<ButtonProps> = ({
  variant = 'primary',
  children
}: ButtonProps): ReactElement => {
  const color = variant === 'accent' ? 'white' : 'black'
  return (
    <StyledButton color={color} bg={variant}>
      {children}
    </StyledButton>
  )
}

export default Button
