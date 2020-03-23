import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from '../Table.styled'
import { Theme } from '@fluent-windows/core/styles'
import { TableContext, TableContextProps } from './TableContext'
import { TableClassProps } from '../Table.type'

const tableContext: TableContextProps = {
  variant: 'head'
}

export const name = 'TableHead'

const useStyles = createUseStyles<Theme, TableClassProps>(styles, { name })

const Head = React.forwardRef<HTMLTableElement, any>(
  (props, ref): React.ReactElement => {
    // eslint-disable-next-line react/prop-types
    const { className: classNameProp, ...rest } = props
    const classes = useStyles(props)
    const className = classNames(classes.headRoot, classNameProp)
    return (
      <TableContext.Provider value={tableContext}>
        <thead className={className} ref={ref} {...rest} />
      </TableContext.Provider>
    )
  }
)
Head.displayName = `F${name}`

export default Head
