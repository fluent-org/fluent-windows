import * as React from 'react'
import { StyledTableFooterWrapper } from '../Table.styled'
import { TableContext, TableContextProps } from './TableContext'

const tableContext: TableContextProps = {
  variant: 'footer'
}

const Footer = React.forwardRef<HTMLTableElement, any>(
  (props, ref): React.ReactElement => {
    return (
      <TableContext.Provider value={tableContext}>
        <StyledTableFooterWrapper ref={ref} {...props} />
      </TableContext.Provider>
    )
  }
)
Footer.displayName = 'FTableFooter'

export default Footer
