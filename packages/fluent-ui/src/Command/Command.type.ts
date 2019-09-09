import * as React from 'react'
import * as PropTypes from 'prop-types'
import Item from '../Item'
import { BoxProps, BoxPropTypes } from '../Box'

import Content from './components/Content'
import Secondary from './components/Secondary'

export type CommandClassProps = 'root' | 'content' | 'primary' | 'secondaryRoot'

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

export interface CommandProps extends BoxProps {
  reveal?: boolean
  children: CommandChild[] | CommandChild
}

export interface CommandType extends React.ForwardRefExoticComponent<CommandProps> {
  Content: typeof Content
  Secondary: typeof Secondary
}

export const CommandPropTypes = {
  ...BoxPropTypes,
  reveal: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired
}
