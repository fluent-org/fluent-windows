import * as React from 'react'
import { StandardProps } from '..'

export type Placement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'center'

export interface ToastProps extends StandardProps {
  children: React.ReactChild
  visible: boolean
  actions?: React.ReactElement | React.ReactElement[]
  placement?: Placement
}
