import * as React from 'react'
import { BoxProps } from '../Box'

export interface ItemGroupProps extends Omit<BoxProps, 'prefix'> {
  level?: number
  title?: string
  prefix?: React.ReactElement
  children: React.ReactElement | React.ReactElement[]
  shrink?: 'expand' | 'float'
}
