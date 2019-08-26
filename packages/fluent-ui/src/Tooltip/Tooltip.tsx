import * as React from 'react'
import {
  usePopper,
  useHover,
  useClick,
  useTouch,
  useFocus,
  useClickOutside
} from '@fluent-ui/hooks'
import Portal from '../Portal'
import Transition from '../Transition'
import { StyledTooltip } from './Tooltip.styled'
import { TooltipProps, TooltipPropTypes } from './Tooltip.type'

const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  visible,
  onChange,
  trigger = 'hover',
  ...propperOptions
}): React.ReactElement => {
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

  const content =
    typeof title === 'string' ? (
      <StyledTooltip ref={popperRef}>{title}</StyledTooltip>
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

export default Tooltip
