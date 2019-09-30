import { Theme } from '@fluent-ui/core/styles'
import { Style, Styles } from 'jss'
import { lighten } from '../styles'
import { CardClassProps } from './Card.type'

const root = (theme: Theme): Style => ({
  overflow: 'hidden',
  borderRadius: 4,
  boxShadow: theme.shadows![2],
  backgroundColor: theme.colors!.white!.default,
  transition: theme.transitions!.card
})
const hover = (theme: Theme): Style => ({
  '&:hover': {
    cursor: 'pointer',
    boxShadow: theme.shadows![3]
  }
})
const acrylic = (theme: Theme): Style => ({
  '&::before': {
    transition: theme.transitions!.card,
    boxShadow: `inset 0 0 2px 1px ${lighten(theme.colors!.white!.default!, 0.2)}`
  },
  '&:hover': {
    '&::before': {
      backgroundColor: lighten(theme.colors!.white!.default!, 0.08),
      boxShadow: `inset 0 0 2px 1px ${lighten(theme.colors!.white!.default!, 0.4)}`
    }
  }
})

export const styles = (theme: Theme): Styles<CardClassProps> => ({
  root: root(theme),
  hover: hover(theme),
  acrylic: acrylic(theme)
})
