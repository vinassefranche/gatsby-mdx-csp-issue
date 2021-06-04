/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        mergeScriptHashes: true,
        directives: {
          "script-src": `'self'${process.env.WITH_UNSAFE_EVAL ? " 'unsafe-eval'" : ''}`,
          "style-src": `'self' 'unsafe-inline'`,
          "connect-src": `'self' localhost:* ws://localhost:*`,
        },
      },
    },
  ],
}
