import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './IconButton.styled'
import { IconButtonClassProps, IconButtonProps, IconButtonPropTypes } from './IconButton.type'
import { Theme } from '../styles'

export const name = 'IconButton'

const useStyles = createUseStyles<Theme, IconButtonClassProps>(styles, { name })

const IconButton: React.FC<IconButtonProps> = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'button',
      className: classNameProp,
      variant = 'standard',
      disabled,
      size,
      onClick,
      children,
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
        [classes.sizeLarge]: size === 'large'
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

IconButton.displayName = `F${name}`

IconButton.propTypes = IconButtonPropTypes

IconButton.defaultProps = {
  variant: 'standard'
}

export default IconButton
