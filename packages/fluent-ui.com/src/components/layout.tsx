/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactChild, ReactElement, SFC } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import { ThemeProvider, Theme } from '@fluent-ui/core'

interface LayoutProps {
  children: ReactChild
}

const theme: Theme = {
  colors: {
    // primary: 'rgba(0, 0, 0, 0.2)',
    // accent: 'rgba(0, 120, 215, 1)'
  }
}

const Layout: SFC<LayoutProps> = ({ children }: LayoutProps): ReactElement => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data): ReactElement => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        {/* <ThemeProvider theme={theme}>
        </ThemeProvider> */}
      </>
    )}
  />
)

export default Layout
