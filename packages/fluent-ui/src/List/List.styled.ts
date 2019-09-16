import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ListClassProps, ListProps } from './List.type'

const root = (theme: Theme): Style => ({ reveal }: ListProps): Style => ({
  width: '100%',
  maxWidth: 360,
  padding: '8px 0',
  boxShadow: theme.shadows![2],
  backgroundColor: reveal ? theme.colors!.standard!.light2 : theme.colors!.white!.default
})
const title = (theme: Theme): Style => ({
  padding: '0 12px 6px',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  fontWeight: 500,
  color: theme.colors!.standard!.transparent3
})

export const styles = (theme: Theme): Styles<ListClassProps> => ({
  root: root(theme),
  title: title(theme)
})
