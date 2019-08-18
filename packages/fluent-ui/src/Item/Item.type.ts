import * as React from 'react'
import { NavigationID } from '../Navigation'
import { BoxProps } from '../Box'

export interface ItemProps extends Omit<BoxProps, 'prefix'>, Omit<StyledProps, 'as'> {
  value?: NavigationID
  prefix?: React.ReactElement
  active?: boolean
  children?: React.ReactChild
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
