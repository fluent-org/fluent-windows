import React, { SFC, ReactElement, forwardRef, ReactNode } from 'react'
import StyledButton from './Button.styled'

interface ButtonProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  children: ReactNode
}

const Button: SFC<ButtonProps> = forwardRef<{}, ButtonProps>(
  (
    { variant = 'primary', disabled, size, children, ...rest }: ButtonProps,
    ref
  ): ReactElement => (
    <StyledButton
      ref={ref}
      variant={variant}
      disabled={disabled}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  )
)

Button.displayName = 'FButton'

export default Button
