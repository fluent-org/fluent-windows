import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type SelectClassProps =
  | 'root'
  | 'disabled'
  | 'select'
  | 'selectDisabled'
  | 'icon'
  | 'disabledIcon'

export interface SelectProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'>,
    StyledProps {
  value?: string | number
  onChange?: (value: string | number) => void
  disabled?: boolean
  children: React.ReactElement | React.ReactElement[]
}

export const SelectPropTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired
}
