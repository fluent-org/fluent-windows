import * as React from 'react'
import { BoxProps } from '../Box'

export interface ListProps extends Omit<BoxProps, 'title'> {
  title?: React.ReactChild
  children: React.ReactElement | React.ReactElement[]
  reveal?: boolean
}
