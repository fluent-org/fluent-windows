import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@fluent-ui/core'

import Nav from './nav'
import Content from './content'

import Layout from '../layout'

export interface TemplateProps {
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
      rawMarkdownBody: string
    }
    api: {
      frontmatter: {
        components: string
        title: string
      }
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

const Template: React.FC<TemplateProps> = ({ data }: TemplateProps): React.ReactElement => {
  return (
    <Layout>
      <Box
        as="main"
        background="url(/wall.jpg) 50% center / cover no-repeat fixed"
        padding="3.6rem 3rem"
        width="100vw"
        height="100vh"
        overflow="hidden"
      >
        <Box
          background="inherit"
          width="100%"
          height="100%"
          borderRadius={2}
          boxShadow="3"
          overflow="hidden"
          display="flex"
          justifyContent="space-between"
        >
          <Nav data={data} />
          <Content data={data} />
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
    doc: markdownRemark(frontmatter: { title: { eq: $title }, api: { nin: true } }) {
      frontmatter {
        components
        title
      }
      rawMarkdownBody
    }
    api: markdownRemark(frontmatter: { title: { eq: $title }, api: { eq: true } }) {
      frontmatter {
        components
        title
      }
      rawMarkdownBody
    }
    docs: allMarkdownRemark(filter: { frontmatter: { api: { nin: true } } }) {
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
