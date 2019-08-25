import * as React from 'react'
import { StandardProps } from '..'
import Panel from './components/Panel'
import { BoxProps } from '../Box'
import { NavigationProps } from '../Navigation'

export interface TabsProps extends Omit<BoxProps, 'onChange'>, NavigationProps {
  value?: React.ReactText
  onChange?: (value: React.ReactText) => void
  children: React.ReactElement | React.ReactElement[]
}

export interface TabsPanelProps extends StandardProps {
  value?: React.ReactText
  title?: string
  children: React.ReactNode
}

export interface TabsType extends React.ForwardRefExoticComponent<TabsProps> {
  Panel: typeof Panel
}
