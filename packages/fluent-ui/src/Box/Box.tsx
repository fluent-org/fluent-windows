import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Box.styled'
import { BoxClassProps, BoxProps, BoxPropTypes } from './Box.type'
import propTypes from '@styled-system/prop-types'
import { Theme } from '../styles'

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
      acrylic = false
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

    // TODO Need to be more perfect
    const _props = {
      className,
      ref,
      id,
      style,
      onClick
    }

    return <Component {..._props} />
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

export default Box
