import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface RadioProps
  extends StandardProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement, 'onChange'> {
  checked?: boolean
  value?: string
  onChange?: (checked: string) => void
  disabled?: boolean
  children?: React.ReactNode
}

export const RadioPropTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
}
