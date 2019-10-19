import { Style, Styles } from 'jss'
import { FormLabelClassProps } from './FormLabel.type'

const root: Style = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const text: Style = {
  letterSpacing: '0.007em'
}

const positionTop: Style = {
  flexDirection: 'column'
}
const positionBottom: Style = {
  flexDirection: 'column-reverse'
}
const positionLeft: Style = {
  flexDirection: 'row'
}
const positionRight: Style = {
  flexDirection: 'row-reverse'
}

export const styles: Styles<FormLabelClassProps> = {
  root,
  text,
  positionTop,
  positionBottom,
  positionLeft,
  positionRight
}
