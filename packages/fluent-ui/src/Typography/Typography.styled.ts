import { Styles, Style } from 'jss'
import { TypographyClassProps, TypographyProps } from './Typography.type'
import { Theme } from '../styles'

const root: Style = {}
const variants = (theme: Theme): Style => ({ variant = 'body1' }: TypographyProps): Style => {
  return theme.typographies!.variants![variant]
}
const gutterTop: Style = {
  marginTop: '0.65em'
}
const gutterBottom: Style = {
  marginBottom: '0.35em'
}
const noWrap: Style = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}

export const styles = (theme: Theme): Styles<TypographyClassProps> => ({
  root,
  variants: variants(theme),
  gutterTop,
  gutterBottom,
  noWrap
})
