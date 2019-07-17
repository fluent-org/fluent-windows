import * as React from 'react'
import StyledButton from './Button.styled'

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  variant?: 'standard' | 'primary'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'standard', disabled, size, onClick, children, ...rest }: ButtonProps,
    ref
  ): React.ReactElement => (
    <StyledButton
      ref={ref}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
)

Button.displayName = 'FButton'

export default Button
