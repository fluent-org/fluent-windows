import * as React from 'react'
import { IconButtonStyled } from './IconButton.styled'
import { ButtonProps } from '../Button/Button'

// eslint-disable-next-line
export interface IconButtonProps extends ButtonProps {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { variant = 'standard', disabled, size, onClick, children, ...rest }: IconButtonProps,
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

export default IconButton
