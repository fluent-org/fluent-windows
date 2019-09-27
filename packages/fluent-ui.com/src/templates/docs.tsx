import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@fluent-ui/core'
import { useDispatch } from '@fluent-ui/hooks'

import SEO from '../components/seo'
import Nav from '../components/docs/nav'
import Content from '../components/docs/content'

import Layout from '../components/layout'

export interface TemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    doc: {
      fields: {
        slug: string
      }
      frontmatter: {
        components: string
        title: string
        type: string
        langKey: string
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
      fields: {
        slug: string
      }
      frontmatter: {
        components: string
        title: string
        langKey: string
      }
      rawMarkdownBody: string
    }
    docs: {
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            type: string
            langKey: string
          }
        }
      }[]
    }
  }
  pageContext: {
    langKey: string
  }
}

const Template: React.FC<TemplateProps> = ({
  data,
  pageContext
}: TemplateProps): React.ReactElement => {
  React.useEffect((): void => {
    // eslint-disable-next-line
    const dispatch = useDispatch({ type: 'i18n/set', payload: pageContext.langKey })
    dispatch()
  }, [pageContext.langKey])

  return (
    <Layout>
      <SEO title={data.doc.frontmatter.title} />
      <Box
        as="main"
        background="url(/images/wall.jpg) 50% center / cover no-repeat fixed"
        padding={[0, '2.6rem 1.8rem']}
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Nav data={data} pageContext={pageContext} />
        <Content data={data} pageContext={pageContext} />
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
      fields {
        slug
      }
      frontmatter {
        components
        title
        type
        langKey
      }
      rawMarkdownBody
      htmlAst
    }
    api: markdownRemark(frontmatter: { title: { eq: $title }, api: { eq: true } }) {
      fields {
        slug
      }
      frontmatter {
        components
        title
        langKey
      }
      rawMarkdownBody
    }
    docs: allMarkdownRemark(filter: { frontmatter: { api: { nin: true } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
            langKey
          }
        }
      }
    }
  }
`
