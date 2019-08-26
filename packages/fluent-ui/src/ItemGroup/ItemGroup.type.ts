import * as React from 'react'
import * as PropTypes from 'prop-types'
import { BoxProps, BoxPropTypes } from '../Box'

type Shrink = 'expand' | 'float'

export interface ItemGroupProps extends Omit<BoxProps, 'prefix'> {
  level?: number
  title?: string
  prefix?: React.ReactElement
  children: React.ReactElement | React.ReactElement[]
  shrink?: Shrink
}

export const ItemGroupPropTypes = {
  ...BoxPropTypes,
  level: PropTypes.number,
  title: PropTypes.string,
  prefix: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired,
  shrink: PropTypes.oneOf<Shrink>(['expand', 'float'])
}
