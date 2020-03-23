import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from '../Table.styled'
import { Theme } from '@fluent-windows/core/styles'
import { TableContext, TableContextProps } from './TableContext'
import { TableClassProps } from '../Table.type'

const tableContext: TableContextProps = {
  variant: 'body'
}

export const name = 'TableBody'

const useStyles = createUseStyles<Theme, TableClassProps>(styles, { name })

const Body = React.forwardRef<HTMLTableElement, any>(
  (props, ref): React.ReactElement => {
    // eslint-disable-next-line react/prop-types
    const { className: classNameProp, ...rest } = props
    const classes = useStyles(props)
    const className = classNames(classes.bodyRoot, classNameProp)
    return (
      <TableContext.Provider value={tableContext}>
        <tbody className={className} ref={ref} {...rest} />
      </TableContext.Provider>
    )
  }
)

Body.displayName = `F${name}`

export default Body
