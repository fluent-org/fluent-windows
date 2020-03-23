import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from '../Table.styled'
import { Theme } from '../../styles'
import { TableCellProps, TableClassProps, TextAlign } from '../Table.type'
import { TableContext } from './TableContext'
import classNames from 'classnames'

export const name = 'TableCell'

const useStyles = createUseStyles<Theme, TableClassProps>(styles, { name })

const Cell: React.FC<TableCellProps> = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (props, ref): React.ReactElement => {
    const { className: classNameProp, textAlign = 'left', children, ...rest } = props

    const tableContext = React.useContext(TableContext)
    const Component = tableContext.variant === 'head' ? 'th' : 'td'

    const classes = useStyles(props)
    const className = classNames(
      {
        [classes.cellRoot]: tableContext.variant !== 'head',
        [classes.headCellRoot]: tableContext.variant === 'head',
        [classes.cellTextAlignLeft]: textAlign === 'left',
        [classes.cellTextAlignRight]: textAlign === 'right',
        [classes.cellTextAlignCenter]: textAlign === 'center',
        [classes.cellTextAlignJustify]: textAlign === 'justify'
      },
      classNameProp
    )
    return (
      <Component className={className} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

Cell.displayName = `F${name}`

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  textAlign: PropTypes.oneOf<TextAlign>(['inherit', 'left', 'right', 'center', 'justify'])
}

Cell.defaultProps = {
  textAlign: 'left'
}

export default Cell
