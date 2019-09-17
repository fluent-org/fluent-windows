import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from '../Table.styled'
import { Theme } from '@fluent-ui/core/styles'
import { TableContext } from './TableContext'
import { TableClassProps } from '../Table.type'

export const name = 'TableRow'

const useStyles = createUseStyles<Theme, TableClassProps>(styles, { name })

const Row = React.forwardRef<HTMLTableRowElement, any>(
  (props, ref): React.ReactElement => {
    const tableContext = React.useContext(TableContext)
    const isBodyRow = tableContext.variant === 'body'
    // eslint-disable-next-line react/prop-types
    const { className: classNameProp, ...rest } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.rowBody,
      {
        [classes.rowBody]: isBodyRow
      },
      classNameProp
    )

    return <tr className={className} ref={ref} {...rest} />
  }
)

Row.displayName = `F${name}`

export default Row
