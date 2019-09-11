import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import Box from '../Box'
import { styles } from './Item.styled'
import { ItemClassProps, ItemProps, ItemPropTypes } from './Item.type'
import { Theme } from '../styles'

import { NavigationContext } from '../Navigation/Navigation'
import { NavigationID } from '../Navigation/Navigation.type'
import { ListContext } from '../List/List'
import { CommandContext } from '../Command/Command'

export const name = 'Item'

const useStyles = createUseStyles<Theme, ItemClassProps>(styles, { name })

const Item: React.FC<ItemProps> = React.forwardRef<HTMLDivElement, ItemProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      value,
      prefix,
      active,
      children,
      onClick,
      ...rest
    } = props
    // handle active item
    const {
      value: activeID,
      onChange,
      expanded,
      reveal: navigationReveal,
      horizontal
    } = React.useContext(NavigationContext)
    const { reveal: listReveal } = React.useContext(ListContext)
    const commandReveal = React.useContext(CommandContext)
    const reveal = navigationReveal || listReveal || commandReveal

    const handleItemClick = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(e)
        onChange && value && onChange(value as NavigationID)
      },
      [value, onChange, onClick]
    )
    const [_active, setActive] = React.useState(false)
    React.useEffect((): void => {
      if (value && activeID) {
        if (activeID === value) {
          setActive(true)
        } else {
          setActive(false)
        }
      }
    }, [activeID, value])

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.reveal]: reveal
      },
      classNameProp
    )
    const activeBarClassName = classNames(classes.activeBar, {
      [classes.activeBarHorizontal]: horizontal,
      [classes.activeBarActive]: active || _active
    })
    const textClassName = classNames(classes.text, {
      [classes.textExpanded]: expanded,
      [classes.textNoChildren]: !children,
      [classes.textHasPrefix]: !!prefix && expanded
    })
    return (
      <Box className={className} ref={ref} as={as} onClick={handleItemClick} {...rest}>
        {!!value && <div className={activeBarClassName} />}
        {!!prefix && <div className={classes.prefixRoot}>{prefix}</div>}
        {!!children && <div className={textClassName}>{children}</div>}
      </Box>
    )
  }
)

Item.displayName = `F${name}`

Item.propTypes = ItemPropTypes

export default Item
