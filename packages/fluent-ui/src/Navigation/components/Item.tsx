import * as React from 'react'
import { NavigationContext } from '../Navigation'
import {
  StyledItemWrapper,
  StyledItemActiveBar,
  StyledItemIconWrapper,
  StyledItemTextWrapper
} from './Item.styled'
import { NavigationItemProps, NavigationID } from '../Navigation.type'

type Child = React.ReactChild | any

const Item = ({ id, onClick, children, ...rest }: NavigationItemProps): React.ReactElement => {
  const container: {
    icon: any
    content: any
  } = {
    icon: null,
    content: null
  }
  React.Children.forEach(
    children,
    (child: Child): void => {
      if (
        child.type &&
        child.type.displayName &&
        String.prototype.includes.call(child.type.displayName, 'FIcon')
      ) {
        container.icon = React.cloneElement(child, {
          style: { width: 16, height: 16 }
        })
      } else {
        container.content = React.cloneElement(child, {
          style: { fontSize: 14 }
        })
      }
    }
  )

  // handle active item
  const { value: activeID, onChange, expanded, reveal, horizontal } = React.useContext(
    NavigationContext
  )
  function handleItemClick(e: React.MouseEvent<HTMLDivElement>): void {
    onClick && onClick(e)
    onChange && onChange(id as NavigationID)
  }
  const [active, setActive] = React.useState(false)
  React.useEffect((): void => {
    if (id) {
      if (activeID === id) setActive(true)
      else if (activeID && activeID !== id) setActive(false)
    }
  }, [activeID, id])

  return (
    <StyledItemWrapper onClick={handleItemClick} reveal={reveal} {...rest}>
      {!!id && <StyledItemActiveBar active={active} horizontal={horizontal} />}
      <StyledItemIconWrapper>{container.icon}</StyledItemIconWrapper>
      <StyledItemTextWrapper expanded={expanded}>{container.content}</StyledItemTextWrapper>
    </StyledItemWrapper>
  )
}

Item.displayName = 'FNavigationItem'

export default Item
