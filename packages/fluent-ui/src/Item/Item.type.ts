import * as React from 'react'
import { NavigationID } from '../Navigation'

export interface ItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'>, StyledProps {
  id?: NavigationID
  icon?: React.ReactElement
  children?: React.ReactChild
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
