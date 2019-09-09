import { Theme } from '@fluent-ui/core/styles'
import { Style, Styles } from 'jss'
import { CardClassProps } from './Card.type'

const root = (theme: Theme): Style => ({
  boxShadow: theme.shadows![2],
  borderRadius: 4,
  overflow: 'hidden',
  backgroundColor: theme.colors!.white!.default,
  transition: theme.transitions!.card
})
const pure: Style = {
  boxShadow: 'none',
  borderRadius: 0
}
const dynamic: Style = {
  '&:hover': {
    transform: 'scale(1.1)'
  }
}

export const styles = (theme: Theme): Styles<CardClassProps> => ({
  root: root(theme),
  pure,
  dynamic
})
