import * as React from 'react'
import { StyledTableBodyWrapper } from '../Table.styled'
import { TableContextProps, TableContext } from './TableContext'

const tableContext: TableContextProps = {
  variant: 'body'
}

const Body = React.forwardRef<HTMLTableElement, any>(
  (props, ref): React.ReactElement => {
    return (
      <TableContext.Provider value={tableContext}>
        <StyledTableBodyWrapper ref={ref} {...props} />
      </TableContext.Provider>
    )
  }
)

Body.displayName = 'FTableBody'

export default Body
