import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components';
import BlogCard from '../components/blog/BlogCard'
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const BlogPageDEV = ({ data }) => (
  <Layout>
    <SEO title='Dev Blog' />
    <Fade in timeout={500}>
      <div style={{paddingTop: 30}}>
          {/* <Typography variant='h1' color='textPrimary'>
              My Dev.to Posts!
          </Typography> */}
          {/* <h1 style={{fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.1, letterSpacing: '-0.01562em'}}>My Dev.to Posts!</h1> */}
      </div>
      </Fade>
      
      {data.allDevArticles.edges.map((node, key) => (
        <BlogCard
          key={key}
          post={{
            ...node.node.article,
            tag_list_array: node.node.article.tag_list.split(',').map(tag => tag.trim()),
          }}
        />
    ))}
    
  </Layout>
)

export default BlogPageDEV

export const query = graphql`
  query IndexPageQuery {
    allDevArticles {
      edges {
        node {
          article {
            id
            path
            cover_image
            title
            slug
            tag_list
            flare_tag {
              name
            }
            readable_publish_date
            positive_reactions_count
            comments_count
            social_image
          }
        }
      }
    }
  }
`