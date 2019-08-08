import * as React from 'react'
import { ChevronDownMed as ChevronDownMedIcon } from '@fluent-ui/icons'
import Item from '../Item'
import Transition from '../Transition'
import {
  StyledItemGroupWrapper,
  StyledItemGroupTitleWrapper,
  StyledItemGroupTitleIconWrapper,
  StyledItemGroupItemWrapper
} from './ItemGroup.styled'
import { ItemGroupProps } from './ItemGroup.type'
import { NavigationContext } from '../Navigation/Navigation'
import { useReveal } from '@fluent-ui/hooks'

// TODO horizontal support

const ItemGroup = React.memo(
  ({ children, title, icon, level = 1 }: ItemGroupProps): React.ReactElement => {
    const { value: activeID, expanded, reveal, acrylic } = React.useContext(NavigationContext)

    const [open, setOpen] = React.useState(false)
    const handleOpen = React.useCallback((): void => {
      if (expanded === true) setOpen((v): boolean => !v)
    }, [expanded])

    // handle active item
    const childIds = React.useMemo(
      (): number[] =>
        React.Children.map(children, (child: React.ReactElement): number => child.props.id),
      [children]
    )
    const [isActiveGroup, setIsActiveGroup] = React.useState(false)
    React.useEffect((): void => {
      if (activeID) {
        const target = childIds.find((v): boolean => v === activeID)
        if (target !== undefined) {
          setIsActiveGroup(true)
        } else {
          setIsActiveGroup(false)
        }
      }
    }, [activeID, childIds])

    // If expanded is false, set open to false
    const openRecords: React.MutableRefObject<boolean> = React.useRef(false)
    React.useEffect((): void => {
      if (expanded === true) {
        openRecords.current = isActiveGroup || open
      }
    }, [open, isActiveGroup]) // eslint-disable-line
    React.useEffect((): void => {
      if (expanded === false) {
        setOpen(false)
      }
      if (expanded === true) {
        setOpen(openRecords.current)
      }
    }, [expanded, isActiveGroup])

    // handle Reveal Effects
    const [RevealWrapper] = useReveal(66)
    const hasIcon = !!icon
    const titleElement = reveal ? (
      <RevealWrapper>
        <Item>
          {hasIcon ? (
            [
              React.cloneElement(icon as React.ReactElement, { key: 'StyledItemGroupTitleIcon' }),
              <span key="StyledItemGroupTitle">{title}</span>
            ]
          ) : (
            <span>{title}</span>
          )}
        </Item>
      </RevealWrapper>
    ) : (
      <Item>
        {hasIcon ? (
          [
            React.cloneElement(icon as React.ReactElement, { key: 'StyledItemGroupTitleIcon' }),
            <span key="StyledItemGroupTitle">{title}</span>
          ]
        ) : (
          <span>{title}</span>
        )}
      </Item>
    )
    const childElements = reveal
      ? React.Children.map(
          children,
          (child, i): React.ReactElement => {
            if (child.type) {
              if ((child as any).type.displayName === 'FItem') {
                return <RevealWrapper key={i}>{child}</RevealWrapper>
              } else if ((child as any).type.displayName === 'FItemGroup') {
                return React.cloneElement(child, { level: level + 1 })
              }
            }
            return child
          }
        )
      : React.Children.map(
          children,
          (child): React.ReactElement => {
            if (child.type && (child as any).type.displayName === 'FItemGroup') {
              return React.cloneElement(child, { level: level + 1 })
            }
            return child
          }
        )

    return (
      <StyledItemGroupWrapper>
        <StyledItemGroupTitleWrapper onClick={handleOpen} active={isActiveGroup}>
          {titleElement}
          <StyledItemGroupTitleIconWrapper open={open} expanded={expanded} acrylic={acrylic}>
            <ChevronDownMedIcon />
          </StyledItemGroupTitleIconWrapper>
        </StyledItemGroupTitleWrapper>
        <Transition visible={open} type="collapse">
          <StyledItemGroupItemWrapper level={level}>{childElements}</StyledItemGroupItemWrapper>
        </Transition>
      </StyledItemGroupWrapper>
    )
  }
)

ItemGroup.displayName = 'FItemGroup'

export default ItemGroup
