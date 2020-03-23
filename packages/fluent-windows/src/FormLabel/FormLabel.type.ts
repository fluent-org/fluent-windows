import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'

export type FormLabelClassProps =
  | 'root'
  | 'text'
  | 'positionTop'
  | 'positionBottom'
  | 'positionLeft'
  | 'positionRight'

export type Position = 'top' | 'right' | 'bottom' | 'left'

export interface FormLabelProps extends StandardProps, StyledProps {
  label: React.ReactText
  children: React.ReactElement
  position?: Position
}

export const FormLabelPropTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf<Position>(['top', 'right', 'bottom', 'left'])
}
