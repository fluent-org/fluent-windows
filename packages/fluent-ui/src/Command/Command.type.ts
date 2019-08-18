import * as React from 'react'
import Item from '../Item'
import { BoxProps } from '../Box'
import { ThemeProps } from '../styles/createTheme'

import Content from './components/Content'
import Secondary from './components/Secondary'

export type CommandChild =
  | React.ReactComponentElement<typeof Item>
  | React.ReactComponentElement<typeof Content>
  | React.ReactComponentElement<typeof Secondary>
  | any

export interface CommandContainer {
  standard: React.ReactComponentElement<typeof Item>[]
  content: React.ReactComponentElement<typeof Content>[]
  secondary: React.ReactComponentElement<typeof Secondary>[]
}

export interface CommandProps extends BoxProps, ThemeProps {
  reveal?: boolean
  children: CommandChild[] | CommandChild
}

export interface CommandType extends React.ForwardRefExoticComponent<CommandProps> {
  Content: typeof Content
  Secondary: typeof Secondary
}
