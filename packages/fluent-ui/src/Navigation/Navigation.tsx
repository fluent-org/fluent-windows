import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Navigation.styled'
import { Theme } from '../styles'
import {
  NavigationProps,
  NavigationID,
  NavigationContainer,
  NavigationChild,
  NavigationType,
  NavigationPropTypes,
  NavigationClassProps
} from './Navigation.type'
import { useReveal } from '@fluent-ui/hooks' // TODO treeShaking
import { omit } from '../utils'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Box from '../Box'

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

export const name = 'Navigation'

const useStyles = createUseStyles<Theme, NavigationClassProps>(styles, { name })

const Navigation: React.FC<NavigationProps> = React.forwardRef<HTMLDivElement, NavigationProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      horizontal = false,
      expanded = true,
      acrylic = false,
      reveal = false,
      value,
      onChange,
      children,
      ...rest
    } = props

    const container = React.useMemo<NavigationContainer>(
      (): NavigationContainer =>
        React.Children.toArray(children).reduce<NavigationContainer>(
          (acc, cur: NavigationChild): NavigationContainer => {
            if (cur.type && cur.type.displayName === 'FNavigationHeader') {
              return {
                ...acc,
                header: [...acc.header, cur]
              }
            } else if (cur.type && cur.type.displayName === 'FNavigationFooter') {
              return {
                ...acc,
                footer: [...acc.footer, cur]
              }
            }
            return {
              ...acc,
              content: [...acc.content, cur]
            }
          },
          {
            header: [],
            footer: [],
            content: []
          }
        ),
      [children]
    )

    const _reveal = React.useMemo((): boolean => (acrylic ? false : reveal), [acrylic, reveal])
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
      reveal: _reveal as boolean,
      acrylic: acrylic as boolean,
      horizontal: horizontal as boolean
    }
    const others = omit(rest, ['backgroundColor', 'color'])

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.horizontal]: horizontal,
        [classes.expanded]: expanded
      },
      classNameProp
    )
    const headerClassName = classNames(classes.header, {
      [classes.headerHorizontal]: horizontal
    })
    const contentClassName = classNames(classes.content, {
      [classes.contentHorizontal]: horizontal
    })
    const footerClassName = classNames(classes.footer, {
      [classes.footerHorizontal]: horizontal
    })

    return (
      <Box
        className={className}
        as={as}
        ref={ref}
        acrylic={acrylic}
        backgroundColor="standard.light2"
        {...others}
      >
        <NavigationContext.Provider value={contextValue}>
          <Box className={headerClassName}>{_reveal ? revealHeader : container.header}</Box>
          <Box className={contentClassName}>{_reveal ? revealContent : container.content}</Box>
          <Box className={footerClassName}>{_reveal ? revealFooter : container.footer}</Box>
        </NavigationContext.Provider>
      </Box>
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

Navigation.displayName = `F${name}`

Navigation.propTypes = NavigationPropTypes

Navigation.defaultProps = {
  horizontal: false,
  expanded: true,
  acrylic: false,
  reveal: false
}

export default Navigation as NavigationType
