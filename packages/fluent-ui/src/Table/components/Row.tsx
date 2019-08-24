import * as React from 'react'
import { StyledTableRowWrapper } from '../Table.styled'
import { TableContext } from './TableContext'

const Row = React.forwardRef<HTMLTableRowElement, any>(
  (props, ref): React.ReactElement => {
    const tableContext = React.useContext(TableContext)
    const isBodyRow = tableContext.variant === 'body'
    return <StyledTableRowWrapper ref={ref} isBodyRow={isBodyRow} {...props} />
  }
)

Row.displayName = 'FTableRow'

export default Row
