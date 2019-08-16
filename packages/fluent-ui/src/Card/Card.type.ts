import * as React from 'react'
import { BoxProps } from '../Box'
import Content from './components/Content'
import Actions from './components/Actions'
import Header from './components/Header'

export interface CardProps extends BoxProps {
  children?: React.ReactNode
  pure?: boolean
  dynamic?: boolean
}

export interface CardType extends React.ForwardRefExoticComponent<CardProps> {
  Content: typeof Content
  Actions: typeof Actions
  Header: typeof Header
}
