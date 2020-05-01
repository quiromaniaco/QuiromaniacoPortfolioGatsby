import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components';
import BlogCardEN from '../components/contentfulBlog/blogCard-EN'
import Typography from '@material-ui/core/Typography';

const BlogPageES = ({ data }) => (
  <Layout>
    <SEO title='Blog' />
    {/* <div style={{paddingTop: 30}}>
        <h1 style={{fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.01562em'}}>Mi punto de vista!</h1>
    </div> */}
    
    {data.allContentfulBlogPost.edges.map((node, key) => (
      <BlogCardEN
        key={key}
        post={{
          ...node.node,
          // tag_list_array: node.node.article.tag_list.split(',').map(tag => tag.trim()),
        }}
      />
    ))}
  </Layout>
)

export default BlogPageES

export const query = graphql`
  query BlogPersonalQueryEN {
    allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
            publishDate
            title
            slug
            description {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
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