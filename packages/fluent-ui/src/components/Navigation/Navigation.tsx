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
import { useReveal } from '../../hooks/useReveal'
import * as CSS from 'csstype'

interface NavigationProps extends Omit<BoxProps, 'onChange'>, ThemeProps {
  response?: boolean
  expanded?: boolean
  acrylic?: boolean
  reveal?: boolean
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
  backgroundColor: CSS.BackgroundColorProperty
  color: CSS.ColorProperty
  reveal: boolean
}>({
  value: '',
  expanded: true,
  backgroundColor: '#e6e6e6',
  color: '#000',
  reveal: false
})

const Navigation: NavigationType = forwardRef<HTMLDivElement, NavigationProps>(
  (
    {
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

    // handle active item
    useAction(
      'navigation/handleActive',
      (id): void => {
        onChange && onChange(id)
      },
      [value]
    )

    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal(66)

    const contextValue = {
      value: value as ID,
      expanded: expanded as boolean,
      backgroundColor: backgroundColor as CSS.BackgroundColorProperty,
      color: color as CSS.ColorProperty,
      reveal: reveal as boolean
    }
    return (
      <NavigationContext.Provider value={contextValue}>
        <StyledContainer
          ref={ref}
          expanded={expanded as boolean}
          acrylic={acrylic}
          backgroundColor={backgroundColor}
          color={color}
          {...rest}
        >
          <StyledHeader>
            {reveal
              ? container.header.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
                )
              : container.header}
          </StyledHeader>
          <StyledContent>
            {reveal
              ? container.content.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
                )
              : container.content}
          </StyledContent>
          <StyledFooter>
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
