import * as React from 'react'
import Field from './components/Field'
import { StandardProps } from '..'

export interface FormValue {
  [K: string]: any
}
export interface FormError {
  [K: string]: any
}
export interface FormState {
  values: FormValue
  errors: FormError
}

export interface FormProps
  extends Omit<
    StandardProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    'prefix'
  > {
  children: React.ReactElement | React.ReactElement[]
  prefix?: React.ReactChild
  suffix?: React.ReactChild

  initialState?: FormValue
  onSubmit: (value: FormValue, errors?: FormError) => void
}

export interface FormType extends React.ForwardRefExoticComponent<FormProps> {
  Field: typeof Field
}

export interface ValidationRule {
  /** validation error message */
  message?: React.ReactNode
  /** built-in validation type, available options: https://github.com/yiminghe/async-validator#type */
  type?: string
  /** indicates whether field is required */
  required?: boolean
  /** treat required fields that only contain whitespace as errors */
  whitespace?: boolean
  /** validate the exact length of a field */
  len?: number
  /** validate the min length of a field */
  min?: number
  /** validate the max length of a field */
  max?: number
  /** validate the value from a list of possible values */
  enum?: string | string[]
  /** validate from a regular expression */
  pattern?: RegExp
  /** transform a value before validation */
  transform?: (value: any) => any
  /** custom validate function (Note: callback must be called) */
  validator?: (rule: any, value: any, callback: any, source?: any, options?: any) => any
}

export interface FieldProps
  extends StandardProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  children: React.ReactElement
  onChange?: (value: any) => void
  label?: string

  name: string
  rules?: ValidationRule[]
}
