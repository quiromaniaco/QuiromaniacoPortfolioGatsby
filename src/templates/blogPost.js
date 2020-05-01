import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components';
import BlogPost from '../components/contentfulBlog/BlogPost'


const Post = ({ data }) => {
  const post = data.allContentfulBlogPost.edges[0].node

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPost post={post} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPageQuery($slug: String!) {
    allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
            publishDate
            title
            slug
            body {
                childMarkdownRemark {
                  html
                }
              }
              heroImage {
                fluid {
                ...GatsbyContentfulFluid
                }
              }
        }
      }
    }
  }
`
