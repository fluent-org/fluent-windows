import { Style, Styles } from 'jss'
import { FormClassProps } from './Form.type'

const root: Style = {
  maxWidth: 300
}

const table: Style = {
  width: '100%',
  borderSpacing: '10px'
}

export const styles: Styles<FormClassProps> = {
  root,
  table
}
