import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Button.styled'
import { ButtonClassProps, ButtonProps, ButtonPropTypes } from './Button.type'
import { Theme } from '../styles'

export const name = 'Button'

const useStyles = createUseStyles<Theme, ButtonClassProps>(styles, { name })

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'button',
      className: classNameProp,
      onClick,
      children,
      variant = 'standard',
      disabled,
      size = 'medium',
      block = false,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.variantStandard]: variant === 'standard',
        [classes.variantPrimary]: variant === 'primary',
        [classes.sizeSmall]: size === 'small',
        [classes.sizeMedium]: size === 'medium',
        [classes.sizeLarge]: size === 'large',
        [classes.block]: block
      },
      classNameProp
    )
    return (
      <Component className={className} ref={ref} onClick={onClick} disabled={disabled} {...rest}>
        {children}
      </Component>
    )
  }
)

Button.displayName = `F${name}`

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  variant: 'standard',
  size: 'medium',
  block: false
}

export default Button
