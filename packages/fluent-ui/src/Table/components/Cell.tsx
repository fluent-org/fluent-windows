import * as React from 'react'
import { StyledTableCellWrapper, StyledTableHeadCellWrapper } from '../Table.styled'
import { TableContext } from './TableContext'
import { TableCellProps } from '../Table.type'

const Cell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ textAlign = 'left', children, ...rest }: TableCellProps, ref): React.ReactElement => {
    const tableContext = React.useContext(TableContext)
    const Component =
      tableContext.variant === 'head' ? StyledTableHeadCellWrapper : StyledTableCellWrapper
    return (
      <Component ref={ref} textAlign={textAlign} {...rest}>
        {children}
      </Component>
    )
  }
)

Cell.displayName = 'FTableCell'

export default Cell
