import * as React from 'react'
import { ReactElement, SFC, useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { Box, Navigation } from '@fluent-ui/core'
import {
  GlobalNavigationButton as GlobalNavigationButtonIcon,
  Connected as ConnectedIcon
} from '@fluent-ui/icons'

import Header from './header'
import Layout from './layout'
import Playground from './playground'

import IconTemplate from '../docs/components/Icon/template'

interface TemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    doc: {
      frontmatter: {
        components: string
        title: string
      }
      fileAbsolutePath: string
      html: string
      rawMarkdownBody: string
    }
    docs: {
      edges: {
        node: {
          frontmatter: {
            title: string
          }
        }
      }[]
    }
  }
}

const Template: SFC<TemplateProps> = ({ data }: TemplateProps): ReactElement => {
  const activeId = data.docs.edges.findIndex(
    (v): boolean => v.node.frontmatter.title === data.doc.frontmatter.title
  )
  const [expanded, setExpanded] = useState(true)
  function handleExpanded(): void {
    setExpanded((e): boolean => !e)
  }
  function handleNavigation(title: string): void {
    navigate(`/components/${title.toLowerCase()}`)
  }

  return (
    <Layout>
      <Box display="flex" justifyContent="space-between">
        <Navigation
          value={`component${activeId}`}
          expanded={expanded}
          acrylic
          width={260}
          height="100vh"
        >
          <Navigation.Header>
            <Navigation.Item onClick={handleExpanded}>
              <GlobalNavigationButtonIcon />
            </Navigation.Item>
          </Navigation.Header>
          {data.docs.edges.map(
            (child, index): ReactElement => (
              <Navigation.Item
                id={`component${index}`}
                key={child.node.frontmatter.title}
                onClick={handleNavigation.bind(undefined, child.node.frontmatter.title)}
              >
                <ConnectedIcon />
                <span>{child.node.frontmatter.title}</span>
              </Navigation.Item>
            )
          )}
        </Navigation>
        <Box
          flex={1}
          maxHeight="100vh"
          display="flex"
          flexDirection="column"
          boxShadow="0px 0px 8px 0px rgba(0, 0, 0, 0.36)"
          transition="all 250ms cubic-bezier(0.4,0,0.2,1) 0ms"
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <Box overflow="auto" flex={1} padding="10px">
            <Markdown
              options={{
                overrides: {
                  pre: Playground as any,
                  IconTemplate
                }
              }}
            >
              {data.doc.rawMarkdownBody}
            </Markdown>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($title: String!) {
    site {
      siteMetadata {
        title
      }
    }
    doc: markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        components
        title
      }
      fileAbsolutePath
      html
      rawMarkdownBody
    }
    docs: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
