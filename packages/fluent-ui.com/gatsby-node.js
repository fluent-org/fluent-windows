const path = require('path')

function toLine(name) {
  const target = name.replace(/([A-Z])/g, '-$1').toLowerCase()
  if (target[0] === '-') return target.substr(1)
  return target
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const {
      frontmatter: { langKey = 'en', components },
      fileAbsolutePath
    } = node
    const prefix = langKey === 'en' ? '/' : `/${langKey}/`
    const type = path.basename(path.dirname(path.dirname(fileAbsolutePath)))
    const value = components
      ? `${prefix}${type}/${toLine(components)}`
      : `${prefix}${type}/${toLine(path.basename(fileAbsolutePath).split('.')[0])}`
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const docs = path.resolve(`src/templates/docs.tsx`)

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
              langKey
              order
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

    posts.forEach(post => {
      createPage({
        path: post.node.fields.slug,
        component: docs,
        context: {
          title: post.node.frontmatter.title,
          langKey: post.node.frontmatter.langKey || 'en'
        }
      })
    })
  })
}
