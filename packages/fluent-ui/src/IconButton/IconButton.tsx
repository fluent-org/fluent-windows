import * as React from 'react'
import { IconButtonStyled } from './IconButton.styled'
import { IconButtonProps, IconButtonPropTypes } from './IconButton.type'

const IconButton: React.FC<IconButtonProps> = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { variant = 'standard', disabled, size, onClick, children, ...rest },
    ref
  ): React.ReactElement => {
    return (
      <IconButtonStyled
        ref={ref}
        variant={variant}
        disabled={disabled}
        size={size}
        onClick={onClick}
        {...rest}
      >
        {children}
      </IconButtonStyled>
    )
  }
)

IconButton.displayName = 'FIconButton'

IconButton.propTypes = IconButtonPropTypes

export default IconButton
