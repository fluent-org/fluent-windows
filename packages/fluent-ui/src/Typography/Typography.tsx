import * as React from 'react'

import { TypographyProps, VariantMapping } from './Typography.type'
import { StyledTypography } from './Typography.styled'

const defaultVariantMapping: VariantMapping = {
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

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  (
    {
      as,
      variant = 'body1',
      variantMapping = defaultVariantMapping,
      gutterBottom = false,
      noWrap = false,
      ...rest
    }: TypographyProps,
    ref
  ): React.ReactElement => {
    const component = as || variantMapping[variant] || defaultVariantMapping[variant] || 'span'
    return (
      <StyledTypography
        ref={ref}
        as={component}
        variant={variant}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        {...rest}
      />
    )
  }
)

Typography.displayName = 'FTypography'

export default Typography
