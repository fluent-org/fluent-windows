import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@fluent-ui/core'

import SEO from '../../components/seo'
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
        type: string
      }
      rawMarkdownBody: string
      htmlAst: {
        children: {
          tagName: string
          type: string
          properties: object
          children: {
            type: string
            value: string
          }[]
        }[]
        data: {}
        type: string
      }
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
            type: string
          }
        }
      }[]
    }
  }
}

const Template: React.FC<TemplateProps> = ({ data }: TemplateProps): React.ReactElement => {
  return (
    <Layout>
      <SEO title={data.doc.frontmatter.title} />
      <Box
        as="main"
        background="url(/wall.jpg) 50% center / cover no-repeat fixed"
        padding={[0, '3.6rem 3rem']}
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Nav data={data} />
        <Content data={data} />
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
        type
      }
      rawMarkdownBody
      htmlAst
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
            type
          }
        }
      }
    }
  }
`
