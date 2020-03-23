import * as PropTypes from 'prop-types'
import { BoxProps, BoxPropTypes } from '../Box'
import { StyledProps } from '../'

export type TypographyClassProps = 'root' | 'variants' | 'gutterTop' | 'gutterBottom' | 'noWrap'

export interface VariantMapping {
  h1: keyof JSX.IntrinsicElements
  h2: keyof JSX.IntrinsicElements
  h3: keyof JSX.IntrinsicElements
  h4: keyof JSX.IntrinsicElements
  h5: keyof JSX.IntrinsicElements
  h6: keyof JSX.IntrinsicElements
  subtitle1: keyof JSX.IntrinsicElements
  subtitle2: keyof JSX.IntrinsicElements
  body1: keyof JSX.IntrinsicElements
  body2: keyof JSX.IntrinsicElements
}

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'

export interface TypographyProps extends BoxProps, StyledProps {
  variant?: Variant
  variantMapping?: VariantMapping
  gutterTop?: boolean
  gutterBottom?: boolean
  noWrap?: boolean
}

export const TypographyPropTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf<Variant>([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2'
  ]),
  variantMapping: PropTypes.any,
  gutterTop: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  ...BoxPropTypes
}
