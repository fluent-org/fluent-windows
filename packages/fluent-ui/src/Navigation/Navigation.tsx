import * as React from 'react'
import {
  forwardRef,
  ReactElement,
  ForwardRefExoticComponent,
  Children,
  ReactComponentElement,
  createContext
} from 'react'
import Item, { ID } from './Item'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../theme'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import {
  StyledHeader,
  StyledFooter,
  StyledContent,
  StyledContainer
} from './Navigation.styled'
import { useReveal } from '../hooks/useReveal'
import * as CSS from 'csstype'

interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  horizontal?: boolean
  response?: boolean
  expanded?: boolean
  acrylic?: boolean
  reveal?: boolean
  value?: ID
  onChange?: (id: ID) => void
}

interface NavigationType extends ForwardRefExoticComponent<NavigationProps> {
  Header: typeof Header
  Footer: typeof Footer
  Content: typeof Content
  Item: typeof Item
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
  onChange: (id: ID) => void
  expanded: boolean
  backgroundColor: CSS.BackgroundColorProperty
  color: CSS.ColorProperty
  reveal: boolean
  horizontal: boolean
}>({
  value: '',
  onChange: (): void => {},
  expanded: true,
  backgroundColor: '#e6e6e6',
  color: '#000',
  reveal: false,
  horizontal: false
})

const Navigation = forwardRef<HTMLDivElement, NavigationProps>(
  (
    {
      horizontal,
      expanded,
      acrylic,
      reveal,
      value,
      onChange,
      backgroundColor,
      color,
      children,
      ...rest
    }: NavigationProps,
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

    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal(66)

    const contextValue = {
      value: value as ID,
      onChange: onChange as (id: ID) => void,
      expanded: expanded as boolean,
      backgroundColor: backgroundColor as CSS.BackgroundColorProperty,
      color: color as CSS.ColorProperty,
      reveal: reveal as boolean,
      horizontal: horizontal as boolean
    }
    return (
      <NavigationContext.Provider value={contextValue}>
        <StyledContainer
          ref={ref}
          horizontal={horizontal}
          expanded={expanded as boolean}
          acrylic={acrylic}
          backgroundColor={backgroundColor}
          color={color}
          {...rest}
        >
          <StyledHeader horizontal={horizontal}>
            {reveal
              ? container.header.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
                )
              : container.header}
          </StyledHeader>
          <StyledContent horizontal={horizontal}>
            {reveal
              ? container.content.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
                )
              : container.content}
          </StyledContent>
          <StyledFooter horizontal={horizontal}>
            {reveal
              ? container.footer.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
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
  backgroundColor: '#e6e6e6',
  horizontal: false,
  expanded: true,
  acrylic: false
}

export default Navigation as NavigationType
