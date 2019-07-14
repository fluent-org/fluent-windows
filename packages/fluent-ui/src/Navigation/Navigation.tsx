import * as React from 'react'
import { useReveal } from '@fluent-ui/hooks' // TODO treeShaking
import Item, { ID } from './Item'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../styles/createTheme'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { StyledHeader, StyledFooter, StyledContent, StyledContainer } from './Navigation.styled'
import { omit } from '../utils'

interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  horizontal?: boolean
  response?: boolean
  expanded?: boolean
  acrylic?: boolean
  reveal?: boolean
  value?: ID
  onChange?: (id: ID) => void
}

interface NavigationType extends React.ForwardRefExoticComponent<NavigationProps> {
  Header: typeof Header
  Footer: typeof Footer
  Content: typeof Content
  Item: typeof Item
}

interface Container {
  header: React.ReactComponentElement<typeof Header>[]
  footer: React.ReactComponentElement<typeof Footer>[]
  content: React.ReactComponentElement<typeof Content>[]
}

type Child =
  | React.ReactComponentElement<typeof Header>
  | React.ReactComponentElement<typeof Footer>
  | React.ReactComponentElement<typeof Content>
  | any

export const NavigationContext = React.createContext<{
  value: ID
  onChange: (id: ID) => void
  expanded: boolean
  reveal: boolean
  horizontal: boolean
}>({
  value: '',
  onChange: (): void => {},
  expanded: true,
  reveal: false,
  horizontal: false
})

const Navigation = React.forwardRef<HTMLDivElement, NavigationProps>(
  (
    { horizontal, expanded, acrylic, reveal, value, onChange, children, ...rest }: NavigationProps,
    ref
  ): React.ReactElement => {
    const container: Container = {
      header: [],
      footer: [],
      content: []
    }
    React.Children.forEach(
      children,
      (child: Child): void => {
        if (child.type.displayName! === 'FNavigationHeader') {
          container.header.push(child)
        } else if (child.type.displayName === 'FNavigationFooter') {
          container.footer.push(child)
        } else {
          container.content.push(child)
        }
      }
    )

    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal(66)

    const contextValue = {
      value: value as ID,
      onChange: onChange as (id: ID) => void,
      expanded: expanded as boolean,
      reveal: reveal as boolean,
      horizontal: horizontal as boolean
    }
    const others = omit(rest, ['backgroundColor', 'color'])
    return (
      <NavigationContext.Provider value={contextValue}>
        <StyledContainer
          ref={ref}
          horizontal={horizontal}
          expanded={expanded as boolean}
          acrylic={acrylic}
          {...others}
        >
          <StyledHeader horizontal={horizontal}>
            {reveal
              ? container.header.map(
                  (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
                )
              : container.header}
          </StyledHeader>
          <StyledContent horizontal={horizontal}>
            {reveal
              ? container.content.map(
                  (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
                )
              : container.content}
          </StyledContent>
          <StyledFooter horizontal={horizontal}>
            {reveal
              ? container.footer.map(
                  (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
                )
              : container.footer}
          </StyledFooter>
        </StyledContainer>
      </NavigationContext.Provider>
    )
  }
)

Object.defineProperty(Navigation, 'Header', {
  get(): typeof Header {
    return Header
  }
})
Object.defineProperty(Navigation, 'Footer', {
  get(): typeof Footer {
    return Footer
  }
})
Object.defineProperty(Navigation, 'Content', {
  get(): typeof Content {
    return Content
  }
})
Object.defineProperty(Navigation, 'Item', {
  get(): typeof Item {
    return Item
  }
})

Navigation.displayName = 'FNavigation'

Navigation.defaultProps = {
  horizontal: false,
  expanded: true,
  acrylic: false
}

export default Navigation as NavigationType
