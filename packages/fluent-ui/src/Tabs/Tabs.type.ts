import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'
import Panel from './components/Panel'
import { BoxProps } from '../Box'
import { NavigationProps } from '../Navigation'

export type TabsClassProps = 'root' | 'panel'

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

export const TabsPropTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired
}
