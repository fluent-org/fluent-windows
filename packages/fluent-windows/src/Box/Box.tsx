import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles, withTheme } from '@fluent-windows/styles'
import propTypes from '@styled-system/prop-types'
import { styles } from './Box.styled'
import { BoxClassProps, BoxProps, BoxPropTypes } from './Box.type'
import { omit } from '../utils'
import { Theme } from '../styles'
import { omitProps } from './omitProps'

export const name = 'Box'

const useStyles = createUseStyles<Theme, BoxClassProps>(styles, { name })

const Box: React.FC<BoxProps> = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'div',
      className: classNameProp,
      id,
      style,
      onClick,
      children,
      acrylic = false,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      classes.system,
      {
        [classes.acrylic]: acrylic
      },
      classNameProp
    )

    const otherProps = omit(rest, omitProps)

    const _props = {
      className,
      ref,
      id,
      style,
      onClick,
      ...otherProps
    }

    return <Component {..._props}>{children}</Component>
  }
)

Box.displayName = `F${name}`

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.layout,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...BoxPropTypes
}

// @ts-ignore
export default withTheme(Box)
