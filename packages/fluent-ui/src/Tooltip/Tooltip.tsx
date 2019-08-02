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
import { TooltipProps } from './Tooltip.type'

const Tooltip = ({
  children,
  title,
  visible,
  onChange,
  trigger = 'hover',
  ...propperOptions
}: TooltipProps): React.ReactElement => {
  const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>(propperOptions)
  const isControlled = React.useMemo((): boolean => !!visible, [visible])

  const defaultOnChange = () => {}
  const hoverHandler = useHover(onChange || defaultOnChange)
  const clickHandler = useClick(onChange || defaultOnChange)
  useClickOutside(
    referenceRef,
    (): void => {
      clickHandler[2] && clickHandler[2](false)
      onChange && onChange(false)
    }
  )
  const touchHandler = useTouch(onChange || defaultOnChange)
  const focusHandler = useFocus(onChange || defaultOnChange)
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

export default Tooltip
