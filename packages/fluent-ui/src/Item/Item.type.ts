import * as React from 'react'
import { NavigationID } from '../Navigation'

export interface ItemProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'id' | 'prefix'>,
    StyledProps {
  id?: NavigationID
  prefix?: React.ReactElement
  children?: React.ReactChild
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
