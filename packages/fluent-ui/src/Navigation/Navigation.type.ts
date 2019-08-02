import { BoxProps } from '../Box'
import { ThemeProps } from '../styles/createTheme'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Item from './components/Item'

export type NavigationID = string | number

export interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  horizontal?: boolean
  response?: boolean
  expanded?: boolean
  acrylic?: boolean
  reveal?: boolean
  value?: NavigationID
  onChange?: (id: NavigationID) => void
}

export interface NavigationType
  extends React.ForwardRefExoticComponent<NavigationProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof Header
  Footer: typeof Footer
  Content: typeof Content
  Item: typeof Item
}

export interface NavigationContainer {
  header: React.ReactComponentElement<typeof Header>[]
  footer: React.ReactComponentElement<typeof Footer>[]
  content: React.ReactComponentElement<typeof Content>[]
}

export type NavigationChild =
  | React.ReactComponentElement<typeof Header>
  | React.ReactComponentElement<typeof Footer>
  | React.ReactComponentElement<typeof Content>
  | any

export interface NavigationContentProps {
  children: React.ReactNode
}
export interface NavigationHeaderProps {
  children: React.ReactNode
}
export interface NavigationFooterProps {
  children: React.ReactNode
}

export interface NavigationItemProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'id'>,
    StyledProps {
  id?: NavigationID
  title?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}
