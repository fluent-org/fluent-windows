import React, {
  forwardRef,
  ReactElement,
  ForwardRefExoticComponent,
  Children,
  ReactComponentElement,
  createContext
} from 'react'
import Box from '../Box'
import Item, { ID } from './Item'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../../theme'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { StyledHeader, StyledFooter, StyledContent } from './Navigation.styled'
import { useAction } from '../../hooks/useAction'

interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  response?: boolean
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

export const NavigationContext = createContext<ID>('')

const Navigation: NavigationType = forwardRef<HTMLDivElement, NavigationProps>(
  (
    { value, onChange, children, ...rest }: NavigationProps,
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

    useAction(
      'navigation/handleActive',
      (id): void => {
        onChange && onChange(id)
      },
      [value]
    )

    return (
      <NavigationContext.Provider value={value as ID}>
        <Box
          ref={ref}
          maxWidth={260}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          {...rest}
        >
          <StyledHeader>{container.header}</StyledHeader>
          <StyledContent>{container.content}</StyledContent>
          <StyledFooter>{container.footer}</StyledFooter>
        </Box>
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
  backgroundColor: '#e6e6e6'
}

export default Navigation
