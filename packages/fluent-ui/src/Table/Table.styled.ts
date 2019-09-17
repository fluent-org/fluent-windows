import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { TableClassProps } from './Table.type'

const root = (theme: Theme): Style => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'table',
  borderSpacing: 0,
  borderCollapse: 'collapse',
  boxShadow: theme.shadows![1]
})

const headRoot: Style = {
  display: 'table-header-group'
}
const bodyRoot: Style = {
  display: 'table-row-group'
}
const footRoot: Style = {
  display: 'table-row-group'
}
const rowRoot: Style = {
  display: 'table-row',
  color: 'inherit',
  outline: 'none',
  textAlign: 'inherit'
}
const rowBody = (theme: Theme): Style => ({
  '&:hover': {
    backgroundColor: theme.colors!.standard!.light2
  }
})

const cellRoot = (theme: Theme): Style => ({
  display: 'table-cell',
  padding: '14px 40px 14px 16px',
  verticalAlign: 'middle',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: '0.015em',
  borderBottom: `1px solid ${theme.colors!.standard!.default}`
})
const headCellRoot = (theme: Theme): Style => ({
  display: 'table-cell',
  padding: '14px 40px 14px 16px',
  verticalAlign: 'middle',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: 1.3,
  letterSpacing: '0.015em',
  borderBottom: `1px solid ${theme.colors!.standard!.default}`
})
const cellTextAlignLeft: Style = {
  textAlign: 'left'
}
const cellTextAlignRight: Style = {
  textAlign: 'right'
}
const cellTextAlignCenter: Style = {
  textAlign: 'center'
}
const cellTextAlignJustify: Style = {
  textAlign: 'justify'
}

export const styles = (theme: Theme): Styles<TableClassProps> => ({
  root: root(theme),
  headRoot,
  bodyRoot,
  footRoot,
  rowRoot,
  rowBody: rowBody(theme),
  cellRoot: cellRoot(theme),
  headCellRoot: headCellRoot(theme),
  cellTextAlignLeft,
  cellTextAlignRight,
  cellTextAlignCenter,
  cellTextAlignJustify
})
