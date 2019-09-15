import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps, StyledProps } from '..'
import Title from './components/Title'
import Content from './components/Content'
import Actions from './components/Actions'

export type DialogClassProps = 'root' | 'title' | 'content' | 'actions' | 'mask'

export type DialogChild =
  | React.ReactComponentElement<typeof Title>
  | React.ReactComponentElement<typeof Content>
  | React.ReactComponentElement<typeof Actions>
  | any

export interface DialogContainer {
  title?: React.ReactComponentElement<typeof Title>
  content: React.ReactComponentElement<typeof Content>[]
  actions?: React.ReactComponentElement<typeof Actions>
}

export interface DialogProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement, 'onChange'>,
    StyledProps {
  children: DialogChild[] | DialogChild
  visible: boolean
  onChange?: (visible: boolean) => void
}

export interface DialogType extends React.ForwardRefExoticComponent<DialogProps> {
  Title: typeof Title
  Content: typeof Content
  Actions: typeof Actions
}

export interface DialogContextType {
  onChange: (visible: boolean) => void
}

export interface DialogTitleProps {
  children: React.ReactText
}

export const DialogPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}
