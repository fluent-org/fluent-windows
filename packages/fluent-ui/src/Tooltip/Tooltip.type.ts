import * as React from 'react'
import * as PropTypes from 'prop-types'
import { usePropperOptions } from '@fluent-ui/hooks'
import { StandardProps, StyledProps } from '../'

export type TooltipClassProps = 'root'

type Trigger = 'hover' | 'click' | 'touch' | 'focus'

export interface TooltipProps
  extends usePropperOptions,
    Omit<StandardProps, 'title' | 'onChange'>,
    StyledProps {
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
