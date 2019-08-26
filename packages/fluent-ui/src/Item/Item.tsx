import * as React from 'react'
import { NavigationContext } from '../Navigation/Navigation'
import { ListContext } from '../List/List'
import { CommandContext } from '../Command/Command'
import {
  StyledItemWrapper,
  StyledItemActiveBar,
  StyledItemPrefixWrapper,
  StyledItemTextWrapper
} from './Item.styled'
import { NavigationID } from '../Navigation/Navigation.type'
import { ItemProps, ItemPropTypes } from './Item.type'

const Item: React.FC<ItemProps> = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ value, prefix, active, children, onClick, ...rest }, ref): React.ReactElement => {
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
    return (
      <StyledItemWrapper ref={ref} onClick={handleItemClick} reveal={reveal} {...rest}>
        {!!value && <StyledItemActiveBar active={active || _active} horizontal={horizontal} />}
        <StyledItemPrefixWrapper>{prefix}</StyledItemPrefixWrapper>
        <StyledItemTextWrapper expanded={expanded} hasPrefix={!!prefix}>
          {children}
        </StyledItemTextWrapper>
      </StyledItemWrapper>
    )
  }
)

Item.displayName = 'FItem'

Item.propTypes = ItemPropTypes

export default Item
