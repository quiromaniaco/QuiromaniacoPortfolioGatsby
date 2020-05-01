const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slash = require(`slash`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    allDevArticles {
      edges {
        node {
          article {
            id
            slug
          }
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          node_locale
        }
      }
    }
  }  
  `).then(result => {

    // Dev.to 
    const devTemplate = path.resolve(`./src/templates/devPost.js`)
    const devPosts = result.data.allDevArticles.edges
    devPosts.forEach(({ node }) => {
      const post = node.article
      createPage({
        path: `/en/dev/${post.slug}/`,
        component: devTemplate,
        context: {
          id: post.id,
        },
      })
    })

    // Contentful Blog
    const blogTemplate = path.resolve(`./src/templates/blogPost.js`)
    const blogPosts = result.data.allContentfulBlogPost.edges
    blogPosts.forEach(({ node }) => {
      const post = node
      const locale = post.node_locale
      if (locale === 'es-AR') {
        createPage({
          path: `/es/blog/${post.slug}/`,
          component: blogTemplate,
          context: {
            slug: post.slug,
          },
        })
      } else {
        createPage({
          path: `/en/blog/${post.slug}/`,
          component: blogTemplate,
          context: {
            slug: post.slug,
          },
        })
      }
      
    })



  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
