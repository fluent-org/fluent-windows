import * as React from 'react'
import classNames from 'classnames'
import {
  usePopper,
  useHover,
  useClick,
  useTouch,
  useFocus,
  useClickOutside
} from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Tooltip.styled'
import { Theme } from '../styles'
import { TooltipClassProps, TooltipProps, TooltipPropTypes } from './Tooltip.type'

import Portal from '../Portal'
import Transition from '../Transition'

export const name = 'Tooltip'

const useStyles = createUseStyles<Theme, TooltipClassProps>(styles, { name })

const Tooltip: React.FC<TooltipProps> = (props): React.ReactElement => {
  const {
    as: Component = 'div',
    className: classNameProp,
    children,
    title,
    visible,
    onChange,
    trigger = 'hover',
    ...propperOptions
  } = props
  const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>(propperOptions)
  const isControlled = React.useMemo((): boolean => !!visible, [visible])

  const hoverHandler = useHover(onChange)
  const clickHandler = useClick(onChange)
  useClickOutside(
    referenceRef,
    (): void => {
      clickHandler[2] && clickHandler[2](false)
      onChange && onChange(false)
    }
  )
  const touchHandler = useTouch(onChange)
  const focusHandler = useFocus(onChange)
  const triggerMap = {
    hover: hoverHandler,
    click: clickHandler,
    touch: touchHandler,
    focus: focusHandler
  }
  const [currentStatus, bind] = triggerMap[trigger]
  const isVisible = isControlled ? visible : currentStatus

  const classes = useStyles(props)
  const className = classNames(classes.root, classNameProp)

  const content =
    typeof title === 'string' ? (
      <Component className={className} ref={popperRef}>
        {title}
      </Component>
    ) : (
      React.cloneElement(title, { ref: popperRef, ...bind })
    )
  return (
    <>
      {React.cloneElement(children, { ref: referenceRef, ...bind })}
      <Portal>
        <Transition visible={isVisible} wrapper={false} mountOnEnter unmountOnExit>
          {content}
        </Transition>
      </Portal>
    </>
  )
}

Tooltip.displayName = 'FTooltip'

Tooltip.propTypes = TooltipPropTypes

Tooltip.defaultProps = {
  trigger: 'hover'
}

export default Tooltip
