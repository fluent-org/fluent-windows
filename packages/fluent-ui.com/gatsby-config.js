module.exports = {
  siteMetadata: {
    title: `Fluent-UI`,
    description: `React components that implement Microsoft's Fluent Design System.`,
    author: `@chenyueban`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fluent-UI`,
        short_name: `fluent`,
        description: `React components that implement Microsoft's Fluent Design System.`,
        start_url: `/`,
        background_color: `#0078d4`,
        theme_color: `#0078d4`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#333`,
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
        disable: true
      }
    }
  ]
}
