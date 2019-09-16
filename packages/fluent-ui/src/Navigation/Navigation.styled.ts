import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { NavigationClassProps, NavigationProps } from './Navigation.type'

const root = (theme: Theme): Style => ({ horizontal }: NavigationProps): Style => ({
  display: 'flex',
  justifyContent: 'space-between',
  transition: theme.transitions!.navigation,
  overflow: 'hidden',
  // horizontal false
  flexDirection: 'column',
  // expanded false
  maxWidth: horizontal ? '' : 44
})
const horizontal: Style = {
  maxHeight: 40,
  flexDirection: 'row'
}
const expanded = ({ horizontal }: NavigationProps): Style => ({
  maxWidth: horizontal ? '' : 260
})

const header: Style = {
  display: 'flex',
  // horizontal false
  flexDirection: 'column'
}
const headerHorizontal: Style = {
  flexDirection: 'row'
}

const footer: Style = {
  display: 'flex',
  // horizontal false
  flexDirection: 'column'
}
const footerHorizontal: Style = {
  flexDirection: 'row'
}

const content: Style = {
  display: 'flex',
  flex: 1,
  // horizontal false
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'auto'
}
const contentHorizontal: Style = {
  flexDirection: 'row',
  overflow: 'hidden'
}

export const styles = (theme: Theme): Styles<NavigationClassProps> => ({
  root: root(theme),
  horizontal,
  expanded,
  header,
  headerHorizontal,
  footer,
  footerHorizontal,
  content,
  contentHorizontal
})
