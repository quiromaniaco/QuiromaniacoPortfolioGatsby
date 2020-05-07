import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components';
import BlogCard from '../components/contentfulBlog/BlogCard'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const BlogPageES = ({ data }) => (
  <Layout>
    <SEO lang='es' title='Blog | Manuel Quiroga' description='Blog personal' />
    {/* <div style={{paddingTop: 30}}>
        <h1 style={{fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.01562em'}}>Mi punto de vista!</h1>
    </div> */}
    
    {data.allContentfulBlogPost.edges.map((node, key) => (
     
      <BlogCard
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
  query BlogPersonalQuery {
    allContentfulBlogPost(filter: { node_locale: { eq: "es-AR" } }) {
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