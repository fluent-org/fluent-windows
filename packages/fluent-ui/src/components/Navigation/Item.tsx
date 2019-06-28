import React, {
  ReactElement,
  ReactNode,
  Children,
  ReactComponentElement,
  ReactChild,
  cloneElement,
  useContext,
  useEffect,
  useState,
  MouseEventHandler,
  MouseEvent
} from 'react'
import { Icon } from '@fluent-ui/icons'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { NavigationContext } from './Navigation'
import { useDispatch } from '../../hooks/useAction'
import * as CSS from 'csstype'

export type ID = string | number

interface ItemProps {
  id?: ID
  title?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  children: ReactNode
}

type Child = ReactComponentElement<typeof Icon> | ReactChild | any

const StyledItemWrapper = styled.div<{
  reveal: boolean
  backgroundColor: CSS.BackgroundColorProperty
  color: CSS.ColorProperty
}>`
  position: relative;
  max-height: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12;
  box-sizing: border-box;
  transition: ${th.transition('navigation')};
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('gray100') : 'transparent'};
  color: ${({ color }): string => color};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('gray200') : th.color('secondary')};
  }
  &:active {
    color: black;
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('gray300') : th.color('primary')};
  }
`
const StyledItemActiveBar = styled.div<{
  active: boolean
}>`
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

const Item = ({ id, onClick, children }: ItemProps): ReactElement => {
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
  const {
    value: activeID,
    expanded,
    backgroundColor,
    color,
    reveal
  } = useContext(NavigationContext)
  const dispatch = useDispatch({ type: 'navigation/handleActive', payload: id })
  function handleItemClick(e: MouseEvent<HTMLDivElement>): void {
    onClick && onClick(e)
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
    <StyledItemWrapper
      onClick={handleItemClick}
      reveal={reveal}
      backgroundColor={backgroundColor}
      color={color}
    >
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
