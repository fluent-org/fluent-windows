import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'
import TextArea from './components/TextArea'

export type InputClassProps =
  | 'root'
  | 'error'
  | 'disabled'
  | 'wrapper'
  | 'clearedIcon'
  | 'suffix'
  | 'ghost'

export interface InputProps
  extends StandardProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement,
    'onChange' | 'prefix'
  > {
  value?: string
  onChange?: (value: string) => void
  label?: string
  placeholder?: string
  disabled?: boolean
  cleared?: boolean
  password?: boolean
  error?: boolean
  suffix?: React.ReactNode
  ghost?: boolean
}

export const InputPropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  cleared: PropTypes.bool,
  password: PropTypes.bool,
  error: PropTypes.bool,
  suffix: PropTypes.node,
  ghost: PropTypes.bool
}

export interface InputType extends React.ForwardRefExoticComponent<InputProps> {
  TextArea: typeof TextArea
}
