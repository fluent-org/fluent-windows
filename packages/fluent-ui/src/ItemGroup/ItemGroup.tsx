import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { useReveal, useHover, usePopper } from '@fluent-ui/hooks'
import {
  ChevronDownMed as ChevronDownMedIcon,
  ChevronRightMed as ChevronRightMedIcon
} from '@fluent-ui/icons'
import Item from '../Item'
import Transition from '../Transition'
import Box from '../Box'

import { styles } from './ItemGroup.styled'
import { ItemGroupClassProps, ItemGroupProps, ItemGroupPropTypes } from './ItemGroup.type'
import { NavigationContext } from '../Navigation/Navigation'
import { ListContext } from '../List/List'

import { Theme } from '../styles'

export const name = 'ItemGroup'

const useStyles = createUseStyles<Theme, ItemGroupClassProps>(styles, { name })

const ItemGroup: React.FC<ItemGroupProps> = React.forwardRef<HTMLDivElement, ItemGroupProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      level = 1,
      children,
      title,
      prefix,
      shrink = 'expand',
      ...rest
    } = props
    const {
      value: activeID,
      expanded,
      reveal: navigationReveal,
      acrylic,
      horizontal
    } = React.useContext(NavigationContext)
    const { reveal: listReveal } = React.useContext(ListContext)
    const reveal = navigationReveal || listReveal

    // handle active item
    const childIds = React.useMemo(
      (): number[] =>
        React.Children.map(children, (child: React.ReactElement): number => child.props.value),
      [children]
    )
    const isActiveGroup = React.useMemo((): boolean => {
      if (activeID) {
        const target = childIds.find((v): boolean => v === activeID)
        if (target !== undefined) {
          return true
        }
      }
      return false
    }, [activeID, childIds])
    // handle click status (shrink expand)
    const [clickStatus, setOpen] = React.useState(isActiveGroup)

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
        <Item prefix={prefix}>{title}</Item>
      </RevealWrapper>
    ) : (
      <Item prefix={prefix}>{title}</Item>
    )
    const childElements = reveal
      ? React.Children.map(
          children,
          (child: React.ReactElement, i): React.ReactElement => {
            if (child.type) {
              if ((child as any).type.displayName === 'FItem') {
                return <RevealWrapper key={i}>{child}</RevealWrapper>
              } else if ((child as any).type.displayName === `F${name}`) {
                return React.cloneElement(child, { level: level + 1 })
              }
            }
            return child
          }
        )
      : React.Children.map(
          children,
          (child: React.ReactElement): React.ReactElement => {
            if (child.type && (child as any).type.displayName === `F${name}`) {
              return React.cloneElement(child, { level: level + 1 })
            }
            return child
          }
        )

    const isFloat = shrink === 'float' || horizontal

    const classes = useStyles(props)
    const titleClassName = classNames(classes.titleRoot, {
      [classes.titleActive]: isActiveGroup,
      [classes.titleFloatAndHorizontal]: isFloat && horizontal
    })
    const titlePrefixClassName = classNames(classes.titlePrefix, {
      [classes.titlePrefixNotFloatOpen]: !isFloat && clickStatus,
      [classes.titlePrefixNotFloatClose]: !isFloat && !clickStatus,
      [classes.titlePrefixHorizontal]: horizontal,
      [classes.titlePrefixExpanded]: !horizontal && expanded,
      [classes.titlePrefixAcrylic]: acrylic
    })
    const className = classNames(classes.root, {
      [classes.level]: !isFloat,
      [classes.float]: isFloat
    })
    return (
      <Box className={classNameProp} ref={ref} as={as} {...rest}>
        {shrink === 'expand' && !horizontal && (
          <>
            <div className={titleClassName} ref={referenceRef} onClick={handleOpen}>
              {titleElement}
              <div className={titlePrefixClassName}>
                <ChevronDownMedIcon />
              </div>
            </div>

            <Transition visible={clickStatus} type="collapse">
              <Box className={className} acrylic={acrylic && horizontal}>
                {childElements}
              </Box>
            </Transition>
          </>
        )}
        {isFloat && (
          <div className={titleClassName} ref={referenceRef} {...bindHover}>
            {titleElement}
            <div className={titlePrefixClassName}>
              {horizontal ? (
                level === 1 ? (
                  <ChevronDownMedIcon />
                ) : (
                  <ChevronRightMedIcon />
                )
              ) : (
                <ChevronRightMedIcon />
              )}
            </div>
            <Transition visible={hoverStatus} type="grow" wrapper={false}>
              <Box className={className} ref={popperRef} acrylic={acrylic && isFloat}>
                {childElements}
              </Box>
            </Transition>
          </div>
        )}
      </Box>
    )
  }
)

ItemGroup.displayName = `F${name}`

ItemGroup.propTypes = ItemGroupPropTypes

ItemGroup.defaultProps = {
  level: 1
}

export default ItemGroup
