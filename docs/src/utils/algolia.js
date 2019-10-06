const componentsQuery = `{
  components: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/docs/components/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          components
          type
          langKey
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`
const hooksQuery = `{
  hooks: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/docs/hooks/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          hooks
          type
          langKey
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`
const gettingStartedQuery = `{
  gettingStarted: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/docs/getting-started/" } }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          type
          langKey
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: componentsQuery,
    transformer: ({ data }) => data.components.edges.map(({ node }) => node),
    indexName: `fluent-ui_components`,
    settings
  },
  {
    query: hooksQuery,
    transformer: ({ data }) => data.hooks.edges.map(({ node }) => node),
    indexName: `fluent-ui_hooks`,
    settings
  },
  {
    query: gettingStartedQuery,
    transformer: ({ data }) => data.gettingStarted.edges.map(({ node }) => node),
    indexName: `fluent-ui_getting-started`,
    settings
  }
]

module.exports = queries
