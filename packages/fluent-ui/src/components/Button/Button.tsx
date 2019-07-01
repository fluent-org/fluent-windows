import * as React from 'react'
import {
  ReactElement,
  forwardRef,
  ReactNode,
  MouseEventHandler,
  ComponentPropsWithoutRef,
  ButtonHTMLAttributes
} from 'react'
import StyledButton from './Button.styled'

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      disabled,
      size,
      onClick,
      children,
      ...rest
    }: ButtonProps,
    ref
  ): ReactElement => (
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
