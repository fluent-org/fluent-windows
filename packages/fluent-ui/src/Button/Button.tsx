import * as React from 'react'
import StyledButton from './Button.styled'
import { ButtonProps } from './Button.type'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'standard',
      disabled,
      size,
      block = false,
      onClick,
      children,
      ...rest
    }: ButtonProps,
    ref
  ): React.ReactElement => (
    <StyledButton
      ref={ref}
      variant={variant}
      disabled={disabled}
      size={size}
      block={block}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
)

Button.displayName = 'FButton'

export default Button
