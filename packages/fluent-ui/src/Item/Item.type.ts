import * as React from 'react'
import { NavigationID } from '../Navigation'

export interface ItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'>, StyledProps {
  id?: NavigationID
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}
