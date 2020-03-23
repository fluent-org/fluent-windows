import * as React from 'react'
import * as PropTypes from 'prop-types'
import { BoxProps, BoxPropTypes } from '../Box'
import Content from './components/Content'
import Actions from './components/Actions'
import Header from './components/Header'

export type CardClassProps = 'root' | 'hover' | 'acrylic'

export interface CardProps extends BoxProps {
  children: React.ReactNode
  pure?: boolean
  dynamic?: boolean
}

export interface CardType extends React.ForwardRefExoticComponent<CardProps> {
  Content: typeof Content
  Actions: typeof Actions
  Header: typeof Header
}

export const CardPropTypes = {
  ...BoxPropTypes,
  children: PropTypes.node.isRequired,
  pure: PropTypes.bool,
  dynamic: PropTypes.bool
}
