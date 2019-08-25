import * as React from 'react'
import * as CSS from 'csstype'
import { StandardProps, StyledProps } from '..'

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

export interface TypographyProps extends StandardProps, StyledProps {
  children: React.ReactChild
  variant?: Variant
  variantMapping?: VariantMapping
  gutterTop?: boolean
  gutterBottom?: boolean
  noWrap?: boolean
  color?: CSS.Color
  backgroundColor?: CSS.Color
}
