import * as React from 'react'
import { StyledTableHeadWrapper } from '../Table.styled'
import { TableContext, TableContextProps } from './TableContext'

const tableContext: TableContextProps = {
  variant: 'head'
}

const Head = React.forwardRef<HTMLTableElement, any>(
  (props, ref): React.ReactElement => {
    return (
      <TableContext.Provider value={tableContext}>
        <StyledTableHeadWrapper ref={ref} {...props} />
      </TableContext.Provider>
    )
  }
)
Head.displayName = 'FTableHead'

export default Head
