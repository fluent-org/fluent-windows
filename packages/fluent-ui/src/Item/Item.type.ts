import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StyledProps } from '..'
import { NavigationID } from '../Navigation'
import { BoxProps } from '../Box'

export type ItemClassProps =
  | 'root'
  | 'reveal'
  | 'activeBar'
  | 'activeBarHorizontal'
  | 'activeBarActive'
  | 'prefixRoot'
  | 'text'
  | 'textExpanded'
  | 'textNoChildren'
  | 'textHasPrefix'

export interface ItemProps extends Omit<BoxProps, 'prefix'>, Omit<StyledProps, 'as'> {
  value?: NavigationID
  prefix?: React.ReactElement
  active?: boolean
  children?: React.ReactChild
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const ItemPropTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prefix: PropTypes.element,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  onClick: PropTypes.func
}
