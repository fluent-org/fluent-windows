import * as React from 'react'
import * as PropTypes from 'prop-types'
import Field from './components/Field'
import { StandardProps } from '..'

export type FormClassProps = 'root' | 'table'
export type FormFieldClassProps = 'label' | 'labelRequired'

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

export const FormPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  initialState: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export const FieldPropTypes = {
  children: PropTypes.element.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  rules: PropTypes.array
}
