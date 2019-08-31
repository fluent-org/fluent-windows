import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Box.styled'
import { BoxProps, BoxPropTypes } from './Box.type'
import propTypes from '@styled-system/prop-types'
import { Theme } from '../styles'

const useStyles = createUseStyles<Theme, 'root' | 'system' | 'acrylic'>(styles, { name: 'Box' })

const Box: React.FC<BoxProps> = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    { as: Component = 'div', acrylic = false, className: classNameProp, ...rest },
    ref
  ): React.ReactElement => {
    const classes = useStyles(rest)
    const className = classNames(
      classes.root,
      classes.system,
      {
        [classes.acrylic]: acrylic
      },
      classNameProp
    )
    return <Component className={className} ref={ref} {...rest} />
  }
)

Box.displayName = 'FBox'

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
