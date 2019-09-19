const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const {
      frontmatter: { title, type }
    } = node
    const value = type === 'hooks' ? `/hooks/${title}` : `/components/${title.toLowerCase()}`

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const docs = path.resolve(`src/components/docs/template.tsx`)

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { api: { nin: true } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              type
            }
            rawMarkdownBody
            html
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post) => {
      createPage({
        path: post.node.fields.slug,
        component: docs,
        context: {
          title: post.node.frontmatter.title
        }
      })
    })
  })
}
