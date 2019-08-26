import * as React from 'react'
import StyledButton from './Button.styled'
import { ButtonProps, ButtonPropTypes } from './Button.type'

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'standard', disabled, size, block = false, onClick, children, ...rest },
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

Button.propTypes = ButtonPropTypes

export default Button
