import React, {
  forwardRef,
  ReactElement,
  ForwardRefExoticComponent,
  Children,
  ReactComponentElement,
  createContext
} from 'react'
import Item, { ID } from './Item'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../../theme'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import {
  StyledHeader,
  StyledFooter,
  StyledContent,
  StyledContainer
} from './Navigation.styled'
import { useAction } from '../../hooks/useAction'

interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  response?: boolean
  expanded?: boolean
  acrylic?: boolean
  value?: ID
  onChange?: (id: ID) => void
}

interface NavigationType extends ForwardRefExoticComponent<NavigationProps> {
  Header?: typeof Header
  Footer?: typeof Footer
  Content?: typeof Content
  Item?: typeof Item
}

interface Container {
  header: ReactComponentElement<typeof Header>[]
  footer: ReactComponentElement<typeof Footer>[]
  content: ReactComponentElement<typeof Content>[]
}

type Child =
  | ReactComponentElement<typeof Header>
  | ReactComponentElement<typeof Footer>
  | ReactComponentElement<typeof Content>
  | any

export const NavigationContext = createContext<{
  value: ID
  expanded: boolean
}>({ value: '', expanded: true })

const Navigation: NavigationType = forwardRef<HTMLDivElement, NavigationProps>(
  (
    { expanded, acrylic, value, onChange, children, ...rest }: NavigationProps,
    ref
  ): ReactElement => {
    const container: Container = {
      header: [],
      footer: [],
      content: []
    }
    Children.forEach(
      children,
      (child: Child): void => {
        if (child.type.name! === 'Header') {
          container.header.push(child)
        } else if (child.type.name === 'Footer') {
          container.footer.push(child)
        } else {
          container.content.push(child)
        }
      }
    )

    // handle active item
    useAction(
      'navigation/handleActive',
      (id): void => {
        onChange && onChange(id)
      },
      [value]
    )

    const contextValue = {
      value: value as ID,
      expanded: expanded as boolean
    }
    return (
      <NavigationContext.Provider value={contextValue}>
        <StyledContainer
          ref={ref}
          expanded={expanded as boolean}
          acrylic={acrylic}
          {...rest}
        >
          <StyledHeader>{container.header}</StyledHeader>
          <StyledContent>{container.content}</StyledContent>
          <StyledFooter>{container.footer}</StyledFooter>
        </StyledContainer>
      </NavigationContext.Provider>
    )
  }
)

Navigation.Header = Header
Navigation.Footer = Footer
Navigation.Content = Content
Navigation.Item = Item

Navigation.displayName = 'FNavigation'

Navigation.defaultProps = {
  backgroundColor: '#e6e6e6',
  expanded: true,
  acrylic: false
}

export default Navigation
