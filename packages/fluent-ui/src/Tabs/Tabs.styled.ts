import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { TabsClassProps } from './Tabs.type'

const root: Style = {}

const panel = (theme: Theme): Style => ({
  padding: 24,
  backgroundColor: theme.colors!.white!.default
})

export const styles = (theme: Theme): Styles<TabsClassProps> => ({
  root,
  panel: panel(theme)
})
