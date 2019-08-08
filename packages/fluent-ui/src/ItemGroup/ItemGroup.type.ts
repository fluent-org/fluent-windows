import * as React from 'react'

export interface ItemGroupProps extends StyledProps {
  title?: string
  icon?: React.ReactElement
  children: React.ReactElement | React.ReactElement[]
  level?: number
}
