module.exports = {
    pathPrefix: "/githubpages-netlifycms",
    siteMetadata: {
        siteUrl: 'https://www.theprogrammingfoundation.org/',
        author: 'Subhajeet Mukherjee',
        title: 'The Programming Foundation',
        description: 'A high-level programming language for general purpose programming',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `site-pages`,
              path: `${__dirname}/src/pages`,
            },
        },
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 590,
                },
              },
            ],
          },
        },
        `gatsby-plugin-netlify-cms`
    ]
}