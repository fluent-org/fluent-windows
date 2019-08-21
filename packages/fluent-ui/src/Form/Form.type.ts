import * as React from 'react'
import Field from './components/Field'

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
