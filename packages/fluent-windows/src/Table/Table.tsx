import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { Theme } from '../styles'
import { styles } from './Table.styled'
import { TableProps, ColumnsType, DataType, TablePropTypes, TableClassProps } from './Table.type'

import Head from './components/Head'
import Body from './components/Body'
import Row from './components/Row'
import Cell from './components/Cell'

function getColumnsChildren<T extends DataType>(
  columns: ColumnsType<T>[],
  data: T[]
): React.ReactFragment {
  const theHeadChildren = columns.map(
    (cell): React.ReactElement => {
      return <Cell key={cell.field}>{cell.title}</Cell>
    }
  )
  const theBodyChildren = data.map(
    (row, index): React.ReactElement => (
      <Row key={row.key}>
        {columns.map(
          (cell): React.ReactElement => {
            const text = row[cell.field]
            const content = typeof cell.render === 'function' ? cell.render(text, row, index) : text
            return <Cell key={text}>{content}</Cell>
          }
        )}
      </Row>
    )
  )
  return (
    <>
      <Head>
        <Row>{theHeadChildren}</Row>
      </Head>
      <Body>{theBodyChildren}</Body>
    </>
  )
}

export const name = 'Table'

const useStyles = createUseStyles<Theme, TableClassProps>(styles, { name })

function Table<T extends DataType>(props: TableProps<T>): React.ReactElement {
  const { className: classNameProp, data, columns, children, ...rest }: TableProps<T> = props
  const theChildren = columns
    ? getColumnsChildren<T>(columns as ColumnsType<T>[], data as T[])
    : children

  const classes = useStyles(props)
  const className = classNames(classes.root, classNameProp)
  return (
    <table className={className} {...rest}>
      {theChildren}
    </table>
  )
}

Table.displayName = `F${name}`

Table.propTypes = TablePropTypes

export default Table
