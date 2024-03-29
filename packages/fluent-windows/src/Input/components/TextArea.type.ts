import { StandardProps } from '../..'
import * as React from 'react'
import * as PropTypes from 'prop-types'

export type TextAreaClassProps = 'wrapper' | 'disabled' | 'root' | 'error' | 'ghost' | 'resize'

type Resize = 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline'

export interface TextAreaProps
  extends StandardProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement,
    'onChange'
  > {
  value?: string
  onChange?: (value: string) => void
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  ghost?: boolean
  resize?: Resize
}

export const TextAreaPropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  ghost: PropTypes.bool,
  resize: PropTypes.oneOf<Resize>(['none', 'both', 'horizontal', 'vertical', 'block', 'inline'])
}
