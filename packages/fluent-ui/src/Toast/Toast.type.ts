import * as React from 'react'
import * as PropTypes from 'prop-types'
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

export const ToastPropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]),
  placement: PropTypes.oneOf<Placement>([
    'top-start',
    'top',
    'top-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'center'
  ])
}
