import React, {
  ReactElement,
  ReactNode,
  Children,
  ReactComponentElement,
  ReactChild,
  cloneElement,
  useContext,
  useEffect,
  useState
} from 'react'
import Box from '../Box'
import { Icon } from '@fluent-ui/icons'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { NavigationContext } from './Navigation'
import { useDispatch } from '../../hooks/useAction'

export type ID = string | number

interface ItemProps {
  id?: ID
  title?: string
  children: ReactNode
}

type Child = ReactComponentElement<typeof Icon> | ReactChild | any

const StyledItemWrapper = styled.div`
  position: relative;
  max-height: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12;
  box-sizing: border-box;
  transition: ${th.transition('navigation')};
  &:hover {
    background-color: secondary;
  }
  &:active {
    background-color: primary;
  }
`
interface StyledItemActiveBarProps {
  active: boolean
}
const StyledItemActiveBar = styled.div<StyledItemActiveBarProps>`
  position: absolute;
  left: 0;
  top: 50%;
  background-color: accent;
  width: 6px;
  height: 24px;
  margin-top: -12px;
  transform: ${({ active }): string =>
    active ? 'scale3d(1,1,1)' : 'scale3d(0,0,0)'};
  transition: ${th.transition('navigation')};
`
const StyledItemIconWrapper = styled.div<{ expanded: boolean }>`
  margin-right: ${({ expanded }): string => (expanded ? '12px' : '0px')};
  height: 100%;
  transition: ${th.transition('navigation')};
`
const StyledItemTextWrapper = styled.div<{ expanded: boolean }>`
  width: ${({ expanded }): string => (expanded ? 'auto' : '0px')};
  opacity: ${({ expanded }): number => (expanded ? 1 : 0)};
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  transition: ${th.transition('navigation')};
`

const Item = ({ id, children }: ItemProps): ReactElement => {
  const container: {
    icon: any
    content: any
  } = {
    icon: null,
    content: null
  }
  Children.forEach(
    children,
    (child: Child): void => {
      if (child.type && child.type.displayName === 'FIcon') {
        container.icon = cloneElement(child, {
          style: { width: 16, height: 16 }
        })
      } else {
        container.content = cloneElement(child, {
          style: { fontSize: 14 }
        })
      }
    }
  )

  // handle active item
  const { value: activeID, expanded } = useContext(NavigationContext)
  const dispatch = useDispatch({ type: 'navigation/handleActive', payload: id })
  function handleItemClick(): void {
    dispatch()
  }
  const [active, setActive] = useState(false)
  useEffect((): void => {
    if (id) {
      if (activeID === id) setActive(true)
      else if (activeID && activeID !== id) setActive(false)
    }
  }, [activeID, id])

  return (
    <StyledItemWrapper onClick={handleItemClick}>
      {id && <StyledItemActiveBar active={active} />}
      <StyledItemIconWrapper expanded={expanded}>
        {container.icon}
      </StyledItemIconWrapper>
      <StyledItemTextWrapper expanded={expanded}>
        {container.content}
      </StyledItemTextWrapper>
    </StyledItemWrapper>
  )
}

export default Item
