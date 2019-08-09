import * as React from 'react'
import { NavigationContext } from '../Navigation/Navigation'
import {
  StyledItemWrapper,
  StyledItemActiveBar,
  StyledItemIconWrapper,
  StyledItemTextWrapper
} from './Item.styled'
import { NavigationID } from '../Navigation/Navigation.type'
import { ItemProps } from './Item.type'

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ id, icon, children, onClick, ...rest }: ItemProps, ref): React.ReactElement => {
    // handle active item
    const { value: activeID, onChange, expanded, reveal, horizontal } = React.useContext(
      NavigationContext
    )
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
        <StyledItemIconWrapper>{icon}</StyledItemIconWrapper>
        <StyledItemTextWrapper expanded={expanded} hasIcon={!!icon}>
          {children}
        </StyledItemTextWrapper>
      </StyledItemWrapper>
    )
  }
)

Item.displayName = 'FItem'

export default Item
