import React, { ReactElement, SFC } from 'react'
import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'

import Layout from './layout'
import Playground from './playground'

interface TemplateProps {
  data: {
    doc: {
      frontmatter: {
        components: string
        title: string
      }
      fileAbsolutePath: string
      html: string
      rawMarkdownBody: string
    }
  }
}

const Template: SFC<TemplateProps> = ({ data }: TemplateProps): ReactElement => {
  return (
    <Layout>
      <div>
        <section>
          <Markdown
            options={{
              overrides: {
                pre: Playground as any
              }
            }}
          >
            {data.doc.rawMarkdownBody}
          </Markdown>
        </section>
      </div>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($title: String!) {
    doc: markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        components
        title
      }
      fileAbsolutePath
      html
      rawMarkdownBody
    }
  }
`
