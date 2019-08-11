import * as React from 'react'

export interface ItemGroupProps extends StyledProps {
  level?: number
  title?: string
  icon?: React.ReactElement
  children: React.ReactElement | React.ReactElement[]
  shrink?: 'expand' | 'float'
}
