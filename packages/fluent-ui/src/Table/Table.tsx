import * as React from 'react'
import { StyledTableWrapper } from './Table.styled'
import { TableProps, ColumnsType, DataType, TablePropTypes } from './Table.type'
import Head from './components/Head'
import Body from './components/Body'
import Row from './components/Row'
import Cell from './components/Cell'
import Footer from './components/Footer'

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

class Table<T extends DataType> extends React.Component<TableProps<T>> {
  public static displayName = 'FTable'

  public static propTypes = TablePropTypes

  public static Head = Head
  public static Body = Body
  public static Footer = Footer
  public static Row = Row
  public static Cell = Cell

  private get theColumnsChildren(): React.ReactFragment {
    const { data, columns }: TableProps<T> = this.props
    return getColumnsChildren<T>(columns as ColumnsType<T>[], data as T[])
  }

  public render(): React.ReactElement {
    const { columns, children, ...rest }: TableProps<T> = this.props
    const theChildren = columns ? this.theColumnsChildren : children
    return <StyledTableWrapper {...rest}>{theChildren}</StyledTableWrapper>
  }
}

export default Table
