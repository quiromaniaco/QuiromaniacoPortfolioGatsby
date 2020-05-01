import React from 'react'
import { Link } from "gatsby"

import styled from '@emotion/styled'

import Card from './Card'

import Fade from '@material-ui/core/Fade';

const BlogCardStyle = styled.div`
  margin: -20px 0;
  h3 {
    margin: 0px;
    font-size: 1.8rem;
    line-height: 32px;
  }
  h4 {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 17px;
    // font-weight: 300;
    // font-family: 'Source Code Pro';
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
`

const BlogCard = ({ post }) => (
  <Card padding={50}>
    <BlogCardStyle>
      
      <Link to={`/en/dev/${post.slug}`}>
        <Fade in timeout={1000}>
          <div className="content">
            <h3>{post.title}</h3>
          </div>
        </Fade>
      </Link>
      <Fade in timeout={1300}>
        <h4>
          {post.readable_publish_date}
        </h4>
      </Fade>
        <div className="tags">
          {post.tag_list_array.map((tag, key) => (
            <a key={key}>
              <Fade in timeout={1300}>
                <span className="tag">{`#${tag}`}</span>
              </Fade>
            </a>
          ))}
        </div>
        
        <div className="article-engagement-count reactions-count">
            <Fade in timeout={1300}>
              <img src="/assets/reactions-stack.svg" alt="Reactions" />
            </Fade>
            <Fade in timeout={1300}>
              <span
                id={`engagement-count-number-${post.id}`}
                className="engagement-count-number"
              >
                {post.positive_reactions_count}
              </span>
            </Fade>
        
        </div>
        {post.comments_count ? (
          <div className="article-engagement-count comments-count">
              <Fade in timeout={1300}>
                <img src="/assets/comments-bubble.svg" alt="chat" />
              </Fade>
              <Fade in timeout={1300}>
                <span className="engagement-count-number">
                  {post.comments_count}
                </span>
              </Fade>
          </div>
        ) : (
          ''
        )}
        
    </BlogCardStyle>
  </Card>
)

export default BlogCard
