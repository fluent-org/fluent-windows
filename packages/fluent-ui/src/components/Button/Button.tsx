import React, {
  ReactElement,
  forwardRef,
  ReactNode,
  MouseEventHandler,
  ComponentPropsWithoutRef
} from 'react'
import StyledButton from './Button.styled'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
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
