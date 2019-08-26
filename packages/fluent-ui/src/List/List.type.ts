import * as React from 'react'
import * as PropTypes from 'prop-types'
import { BoxProps, BoxPropTypes } from '../Box'

export interface ListProps extends Omit<BoxProps, 'title'> {
  title?: React.ReactChild
  children: React.ReactElement | React.ReactElement[]
  reveal?: boolean
}

export const ListPropTypes = {
  ...BoxPropTypes,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired,
  reveal: PropTypes.bool
}
