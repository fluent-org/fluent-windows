import * as React from 'react'
import { styled, css, variant, th } from '../styles/styled'
import Box from '../Box'
import { NavigationContext } from './Navigation'
import * as CSS from 'csstype'

export type ID = string | number

interface ItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'>, StyledProps {
  id?: ID
  title?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}

type Child = React.ReactChild | any

const StyledItemWrapper = styled(Box)<{
  reveal: boolean
}>`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  max-height: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  transition: ${th.transition('navigation')};
  color: ${th.color('black.default')};
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('standard.light2') : 'transparent'};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('standard.light1') : th.color('standard.transparent1')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('standard.dark1') : th.color('standard.transparent2')};
  }
`
const StyledItemActiveBar = styled.div<{
  active: boolean
  horizontal: boolean
}>`
  position: absolute;
  background-color: ${th.color('primary.default')};
  transition: ${th.transition('navigation')};
  ${variant({
    prop: 'horizontal',
    variants: {
      true: css`
        width: 80%;
        height: 4px;
        left: 10%;
        bottom: 0;
      `,
      false: css`
        width: 6px;
        height: 24px;
        left: 0;
        top: 50%;
        margin-top: -12px;
      `
    }
  })}
  ${variant({
    prop: 'active',
    variants: {
      true: css`
        transform: scale3d(1, 1, 1);
      `,
      false: css`
        transform: scale3d(0, 0, 0);
      `
    }
  })}
`
const StyledItemIconWrapper = styled.div`
  height: 100%;
  transition: ${th.transition('navigation')};
`
const StyledItemTextWrapper = styled.div<{ expanded: boolean }>`
  width: ${({ expanded }): string => (expanded ? 'auto' : '0px')};
  opacity: ${({ expanded }): number => (expanded ? 1 : 0)};
  padding-left: ${({ children, expanded }): string =>
    children ? (expanded ? '12px' : '0px') : '0px'};
  flex: 1;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  transition: ${th.transition('navigation')};
`

const Item: React.FC<ItemProps> = ({
  id,
  onClick,
  children,
  ...rest
}: ItemProps): React.ReactElement => {
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
    onChange && onChange(id as ID)
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
