import React, { ReactElement, SFC } from 'react'
import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { Box, Navigation } from '@fluent-ui/core'
import { Icon } from '@fluent-ui/icons'

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
  return (
    <Layout>
      <Navigation
        value={activeId}
        acrylic
        width={260}
        height="100vh"
        position="fixed"
        left={0}
        top={0}
        backgroundColor="#000"
        color="#fff"
      >
        <Navigation.Header>
          <Navigation.Item>
            <Icon type="GlobalNavigationButton" />
          </Navigation.Item>
        </Navigation.Header>
        {data.docs.edges.map(
          (child, index): ReactElement => (
            <Navigation.Item id={index} key={child.node.frontmatter.title}>
              <Icon type="Connected" />
              <span>{child.node.frontmatter.title}</span>
            </Navigation.Item>
          )
        )}
      </Navigation>
      <Box flex={1} paddingLeft={260} paddingTop={64}>
        <Header siteTitle={data.site.siteMetadata.title} />
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
