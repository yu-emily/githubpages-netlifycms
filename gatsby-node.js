const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = node.frontmatter.path || createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {path: {regex: "^/(?!pages\/blog).*/"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  const posts = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/blog/"}}}, sort: {order: ASC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              date
              title
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }  
  `)

  posts.data.allMarkdownRemark.edges.forEach(({node}, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        slug: node.fields.slug,
        prev: index === 0 ? null : posts.data.allMarkdownRemark.edges[index - 1].node,
        next: index === posts.data.allMarkdownRemark.edges.length - 1 ? null : posts.data.allMarkdownRemark.edges[index + 1].node
      },
    })
  })
}