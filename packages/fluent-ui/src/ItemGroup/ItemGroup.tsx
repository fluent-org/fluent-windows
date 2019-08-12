import * as React from 'react'
import {
  ChevronDownMed as ChevronDownMedIcon,
  ChevronRightMed as ChevronRightMedIcon
} from '@fluent-ui/icons'
import Item from '../Item'
import Transition from '../Transition'
import Box from '../Box'
import {
  StyledItemGroupTitleWrapper,
  StyledItemGroupTitleIconWrapper,
  StyledItemGroupItemWrapper
} from './ItemGroup.styled'
import { ItemGroupProps } from './ItemGroup.type'
import { NavigationContext } from '../Navigation/Navigation'
import { useReveal, useHover, usePopper } from '@fluent-ui/hooks'

const ItemGroup = React.memo(
  ({ level = 1, children, title, icon, shrink = 'expand' }: ItemGroupProps): React.ReactElement => {
    const { value: activeID, expanded, reveal, acrylic, horizontal } = React.useContext(
      NavigationContext
    )

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

    // handle click status (shrink expand)
    const [clickStatus, setOpen] = React.useState(false)
    const handleOpen = React.useCallback((): void => {
      if (expanded === true) setOpen((v): boolean => !v)
    }, [expanded])
    // If expanded is false, set clickStatus to false
    const openRecords: React.MutableRefObject<boolean> = React.useRef(false)
    React.useEffect((): void => {
      if (expanded === true) {
        openRecords.current = isActiveGroup || clickStatus
      }
    }, [clickStatus, isActiveGroup]) // eslint-disable-line
    React.useEffect((): void => {
      if (expanded === false) {
        setOpen(false)
      }
      if (expanded === true) {
        setOpen(openRecords.current)
      }
    }, [expanded, isActiveGroup])

    // handle hover status (shrink float)
    const [hoverStatus, bindHover] = useHover()
    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
      placement: horizontal && level === 1 ? 'bottom-start' : 'right-start',
      eventsEnabled: true,
      positionFixed: true,
      modifiers: {
        preventOverflow: {
          enabled: true,
          priority: ['right', 'bottom'],
          boundariesElement: 'viewport'
        },
        flip: {
          enabled: true
        }
      }
    })

    // handle Reveal Effects
    const [RevealWrapper] = useReveal(66)
    const titleElement = reveal ? (
      <RevealWrapper>
        <Item icon={icon}>{title}</Item>
      </RevealWrapper>
    ) : (
      <Item icon={icon}>{title}</Item>
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

    const isFloat = shrink === 'float' || horizontal

    return (
      <Box>
        {shrink === 'expand' && !horizontal && (
          <>
            <StyledItemGroupTitleWrapper
              ref={referenceRef}
              onClick={handleOpen}
              active={isActiveGroup}
            >
              {titleElement}
              <StyledItemGroupTitleIconWrapper
                open={clickStatus}
                expanded={expanded}
                acrylic={acrylic}
              >
                <ChevronDownMedIcon />
              </StyledItemGroupTitleIconWrapper>
            </StyledItemGroupTitleWrapper>

            <Transition visible={clickStatus} type="collapse">
              <StyledItemGroupItemWrapper level={level} acrylic={acrylic && horizontal}>
                {childElements}
              </StyledItemGroupItemWrapper>
            </Transition>
          </>
        )}
        {isFloat && (
          <StyledItemGroupTitleWrapper
            ref={referenceRef}
            active={isActiveGroup}
            float={isFloat}
            horizontal={horizontal}
            {...bindHover}
          >
            {titleElement}
            <StyledItemGroupTitleIconWrapper
              open={hoverStatus}
              expanded={expanded}
              acrylic={acrylic}
              float={isFloat}
              horizontal={horizontal}
            >
              {horizontal ? (
                level === 1 ? (
                  <ChevronDownMedIcon />
                ) : (
                  <ChevronRightMedIcon />
                )
              ) : (
                <ChevronRightMedIcon />
              )}
            </StyledItemGroupTitleIconWrapper>
            <Transition visible={hoverStatus} type="grow" wrapper={false}>
              <StyledItemGroupItemWrapper
                ref={popperRef}
                level={level}
                float={isFloat}
                acrylic={acrylic && isFloat}
              >
                {childElements}
              </StyledItemGroupItemWrapper>
            </Transition>
          </StyledItemGroupTitleWrapper>
        )}
      </Box>
    )
  }
)

ItemGroup.displayName = 'FItemGroup'

export default ItemGroup
