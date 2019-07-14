/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/components/template.tsx`)

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { api: { nin: true } } }) {
        nodes {
          frontmatter {
            title
          }
          rawMarkdownBody
          html
          fileAbsolutePath
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.nodes.forEach(node => {
      const {
        frontmatter: { title }
      } = node
      createPage({
        path: `/components/${title.toLowerCase()}`,
        component: template,
        context: { title } // additional data can be passed via context
      })
    })
  })
}
