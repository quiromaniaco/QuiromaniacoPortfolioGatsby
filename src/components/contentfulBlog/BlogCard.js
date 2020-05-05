import React from 'react'
import { Link } from "gatsby"

import styled from '@emotion/styled'

import Card from './Card'
import Img from "gatsby-image/withIEPolyfill"
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const BlogCardStyle = styled.div`
  margin: 5rem 0;
  h1 {
    margin: 0px;
    font-size: 1.8rem;
    line-height: 32px;
  }
  p.postDescription {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-family: 'Source Code Pro';
    line-height: 1.5;
    color: #0a0a0a;
  }
  a {
    color: #0a0a0a;
    text-decoration: none;
  }
  .tags {
    // padding-top: '10px';
    font-family: 'Source Code Pro';
    font-size: 1.25rem;
    a {
      margin-right: 8px;
    }
    text-overflow: ellipsis;
    color: #0a0a0a;
    overflow: hidden;
    white-space: nowrap;
  }
  .article-engagement-count {
    font-family: 'Source Code Pro';
    display: inline-block;
    margin-right: 20px;
    margin-top: 10px;
    color: #666;
    img {
      height: 20px;
      min-width: 26px;
      vertical-align: -5px;
      margin-right: 7px;
    }
    .engagement-count-number {
      font-size: 1.25rem;
      font-weight: 100;
    }
  }
  @media only screen and (max-width: 900px) {
    margin: 0rem 0;
    h1 {
      margin: 0px;
      font-size: 1.4rem;
      line-height: 32px;
      color: #0a0a0a;
    }
    p.postDescription {
      margin-top: 0px;
      margin-bottom: 10px;
      font-size: 1rem;
      font-family: 'Source Code Pro';
      line-height: 1.5;
      color: #0a0a0a;
      letter-spacing: -1px;
    }
  }
`

const ContentBlogCardStyle = styled.div`
  letter-spacing: 0rem;
  margin-bottom: 5rem;
  @media only screen and (max-width: 1000px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`


var truncate = function (elem, limit) {

	if (!elem || !limit) return;

	// Get the inner content of the element
	var content = elem.textContent.trim();
	content = content.split(' ').slice(0, limit);
  return content;

};

const BlogCard = ({ post }) => (
  
  <Card padding={50}>
    <BlogCardStyle>
      
      <Link to={`/es/blog/${post.slug}`}>
        <Fade in timeout={1000}>
          <Img fluid={post.heroImage.fluid} style={{width: '100%', height:400}}  /> 
        </Fade>
      </Link>
      <ContentBlogCardStyle>
        <Link to={`/es/blog/${post.slug}`}>
          <div className="content" style={{paddingTop: '1rem'}}>
            <h1>{post.title} | <span style={{fontWeight:300, fontSize: '1.5rem'}}>{post.publishDate}</span></h1>
          </div>
        </Link>
        <p className="postDescription">
          {post.description.childMarkdownRemark.rawMarkdownBody} <Link to={`/es/blog/${post.slug}`}><span>Read more...</span></Link>
        </p>
      </ContentBlogCardStyle>
      
    </BlogCardStyle>
  </Card>
  
)

export default BlogCard
