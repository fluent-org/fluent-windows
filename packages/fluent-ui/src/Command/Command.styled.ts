import { Style, Styles } from 'jss'
import { CommandClassProps } from './Command.type'

const root: Style = {
  display: 'flex'
}
const content: Style = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  marginRight: 5
}
const primary: Style = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  flex: 1
}

const secondaryRoot: Style = {
  display: 'flex',
  flexDirection: 'column',
  width: 130,
  zIndex: 1001
}

export const styles: Styles<CommandClassProps> = {
  root,
  content,
  primary,
  secondaryRoot
}
