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
      frontmatter: { langKey = 'en' },
      fileAbsolutePath
    } = node
    // hooks 文档 type 统一为 `hooks`
    // components 文档 type 分别为各自所属的类别
    // gettingStarted 文档 type 为 `GettingStarted`
    // langKey 默认为 `en`
    const prefix = langKey === 'en' ? '/' : `/${langKey}/`
    const type = path.basename(path.dirname(path.dirname(fileAbsolutePath)))
    const title = path.basename(fileAbsolutePath).split('.')[0]
    const value = `${prefix}${type}/${toLine(title)}`

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
