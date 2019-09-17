import { Style, Styles } from 'jss'
import { FormLabelClassProps } from './FormLabel.type'

const root: Style = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center'
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
  positionTop,
  positionBottom,
  positionLeft,
  positionRight
}
