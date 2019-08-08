import * as React from 'react'
import { useReveal } from '@fluent-ui/hooks' // TODO treeShaking
import { omit } from '../utils'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

import { StyledHeader, StyledFooter, StyledContent, StyledContainer } from './Navigation.styled'
import {
  NavigationProps,
  NavigationID,
  NavigationContainer,
  NavigationChild,
  NavigationType
} from './Navigation.type'

export const NavigationContext = React.createContext<{
  value: NavigationID
  onChange: (id: NavigationID) => void
  expanded: boolean
  reveal: boolean
  acrylic: boolean
  horizontal: boolean
}>({
  value: '',
  onChange: (): void => {},
  expanded: true,
  reveal: false,
  acrylic: false,
  horizontal: false
})

const Navigation = React.forwardRef<HTMLDivElement, NavigationProps>(
  (
    { horizontal, expanded, acrylic, reveal, value, onChange, children, ...rest }: NavigationProps,
    ref
  ): React.ReactElement => {
    const container: NavigationContainer = {
      header: [],
      footer: [],
      content: []
    }
    React.Children.forEach(
      children,
      (child: NavigationChild): void => {
        if (child.type && child.type.displayName === 'FNavigationHeader') {
          container.header.push(child)
        } else if (child.type && child.type.displayName === 'FNavigationFooter') {
          container.footer.push(child)
        } else {
          container.content.push(child)
        }
      }
    )

    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal(66)
    const revealHeader = React.useMemo(
      (): React.ReactElement[] =>
        container.header.map(
          (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
        ),
      [] // eslint-disable-line
    )
    const revealContent = React.useMemo(
      (): React.ReactElement[] =>
        container.content.map(
          (child, i): React.ReactElement => {
            if (child.type && child.type.displayName === 'FItem') {
              return <RevealWrapper key={i}>{child}</RevealWrapper>
            }
            return child
          }
        ),
      [] // eslint-disable-line
    )
    const revealFooter = React.useMemo(
      (): React.ReactElement[] =>
        container.footer.map(
          (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
        ),
      [] // eslint-disable-line
    )

    const contextValue = {
      value: value as NavigationID,
      onChange: onChange as (id: NavigationID) => void,
      expanded: expanded as boolean,
      reveal: reveal as boolean,
      acrylic: acrylic as boolean,
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
            {reveal ? revealHeader : container.header}
          </StyledHeader>
          <StyledContent horizontal={horizontal}>
            {reveal ? revealContent : container.content}
          </StyledContent>
          <StyledFooter horizontal={horizontal}>
            {reveal ? revealFooter : container.footer}
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

Navigation.displayName = 'FNavigation'

Navigation.defaultProps = {
  horizontal: false,
  expanded: true,
  acrylic: false
}

export default Navigation as NavigationType
