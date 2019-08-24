import * as React from 'react'

export interface TableContextProps {
  variant: 'head' | 'body' | 'footer'
}

const defaultValue: TableContextProps = {
  variant: 'body'
}

export const TableContext = React.createContext<TableContextProps>(defaultValue)
