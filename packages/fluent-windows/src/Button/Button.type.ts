import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

type Variant = 'standard' | 'primary'
type Size = 'small' | 'medium' | 'large'

export type ButtonClassProps =
  | 'root'
  | 'variantStandard'
  | 'variantPrimary'
  | 'sizeSmall'
  | 'sizeMedium'
  | 'sizeLarge'
  | 'block'
  | 'ghost'
  | 'rounded'

export interface ButtonProps
  extends StandardProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    StyledProps {
  variant?: Variant
  disabled?: boolean
  size?: Size
  block?: boolean
  ghost?: boolean
  rounded?: boolean

  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export const ButtonPropTypes = {
  variant: PropTypes.oneOf<Variant>(['standard', 'primary']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf<Size>(['small', 'medium', 'large']),
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
