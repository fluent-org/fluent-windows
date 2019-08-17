import * as React from 'react'
import { NavigationID } from '../Navigation'

export interface ItemProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement, 'prefix'>,
    StyledProps {
  value?: NavigationID
  prefix?: React.ReactElement
  active?: boolean
  children?: React.ReactChild
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
