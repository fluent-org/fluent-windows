import * as PropTypes from 'prop-types'
import { usePropperOptions } from '@fluent-ui/hooks'

type Trigger = 'hover' | 'click' | 'touch' | 'focus'

export interface TooltipProps extends usePropperOptions {
  children: React.ReactElement
  title: React.ReactElement | string
  visible?: boolean
  onChange?: (visible: boolean) => void
  trigger?: Trigger
}

export const TooltipPropTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  visible: PropTypes.bool,
  onChange: PropTypes.func,
  trigger: PropTypes.oneOf<Trigger>(['hover', 'click', 'touch', 'focus'])
}
