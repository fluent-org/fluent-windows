import * as React from 'react'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from './Typography.styled'
import { Theme } from '../styles'
import {
  TypographyClassProps,
  TypographyProps,
  TypographyPropTypes,
  VariantMapping
} from './Typography.type'

import Box from '../Box'
import classNames from 'classnames'

export const defaultVariantMapping: VariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
}

export const name = 'Typography'

const useStyles = createUseStyles<Theme, TypographyClassProps>(styles, { name })

const Typography: React.FC<TypographyProps> = React.forwardRef<HTMLDivElement, TypographyProps>(
  (props, ref): React.ReactElement => {
    const {
      as,
      className: classNameProp,
      variant = 'body1',
      variantMapping = defaultVariantMapping,
      gutterTop = false,
      gutterBottom = false,
      noWrap = false,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      classes.variants,
      {
        [classes.gutterTop]: gutterTop,
        [classes.gutterBottom]: gutterBottom,
        [classes.noWrap]: noWrap
      },
      classNameProp
    )

    const component = as || variantMapping[variant] || defaultVariantMapping[variant] || 'span'

    return <Box className={className} ref={ref} as={component} {...rest} />
  }
)

Typography.displayName = `F${name}`

Typography.propTypes = TypographyPropTypes

Typography.defaultProps = {
  variant: 'body1',
  variantMapping: defaultVariantMapping,
  gutterTop: false,
  gutterBottom: false,
  noWrap: false
}

export default Typography
