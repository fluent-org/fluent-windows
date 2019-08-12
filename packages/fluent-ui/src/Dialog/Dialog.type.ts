import * as React from 'react'
import Title from './components/Title'
import Content from './components/Content'
import Actions from './components/Actions'

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

export interface DialogProps {
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
