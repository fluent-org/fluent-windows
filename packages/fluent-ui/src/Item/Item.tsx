import * as React from 'react'
import { NavigationContext } from '../Navigation/Navigation'
import { ListContext } from '../List/List'
import {
  StyledItemWrapper,
  StyledItemActiveBar,
  StyledItemPrefixWrapper,
  StyledItemTextWrapper
} from './Item.styled'
import { NavigationID } from '../Navigation/Navigation.type'
import { ItemProps } from './Item.type'

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, prefix, children, onClick, ...rest }: ItemProps, ref): React.ReactElement => {
    // handle active item
    const {
      value: activeID,
      onChange,
      expanded,
      reveal: navigationReveal,
      horizontal
    } = React.useContext(NavigationContext)
    const { reveal: listReveal } = React.useContext(ListContext)
    const reveal = navigationReveal || listReveal

    const handleItemClick = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(e)
        onChange && id && onChange(id as NavigationID)
      },
      [id, onChange, onClick]
    )
    const [active, setActive] = React.useState(false)
    React.useEffect((): void => {
      if (id && activeID) {
        if (activeID === id) {
          setActive(true)
        } else {
          setActive(false)
        }
      }
    }, [activeID, id])
    return (
      <StyledItemWrapper ref={ref} onClick={handleItemClick} reveal={reveal} {...rest}>
        {!!id && <StyledItemActiveBar active={active} horizontal={horizontal} />}
        <StyledItemPrefixWrapper>{prefix}</StyledItemPrefixWrapper>
        <StyledItemTextWrapper expanded={expanded} hasPrefix={!!prefix}>
          {children}
        </StyledItemTextWrapper>
      </StyledItemWrapper>
    )
  }
)

Item.displayName = 'FItem'

export default Item
