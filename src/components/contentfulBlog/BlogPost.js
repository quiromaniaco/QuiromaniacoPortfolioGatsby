import React from 'react'
import Parser from 'html-react-parser'
import styled from '@emotion/styled'

import Img from "gatsby-image/withIEPolyfill"

import { linkBlock } from './blocks'
import Card from './Card'

import { getUserLangKey } from "ptz-i18n"
import Fade from '@material-ui/core/Fade';

const BlogPostStyle = styled.div`
  h1.title {
    padding-top: 15px;
    margin: 0;
    font-size: calc(1.85vw + 25px);
    line-height: calc(1.85vw + 35px);
    font-weight: 800;
    a {
      text-decoration: none;
      color: black;
    }
  }

  div.body {
    p {
      font-size: 1.25em;
      letter-spacing: 0.01071em;
      font-weight: 300;
      line-height: 1.25
    }
    h1 {
      font-size: 1.85em;
      line-height: 1.14em;
      font-weight: 400;
    }
    h2 {
      font-size: 1.8em;
      padding-top: 0.5em;
    }
    h3 {
      font-size: 1.5em;
      padding-top: 0.3em;
    }
    h4 {
      font-size: 1.3em;
      padding-top: 0.2em;
    }
    li {
      font-size: 1.2em;
      line-height: 1.14em;
      padding-top: 0.5em;
      padding-bottom: 0.5em
    }
    h5 {
      font-family: 'Source Code Pro';
    }
    code {
      font-size: 1.5em;
    }
    div.highlight pre {
      padding: 5% 5% 5% 85px;
      margin: 20px -85px;
      overflow-wrap: normal;
      overflow-x: auto;
    }
    img {
      max-width: 100%;
      padding-top: 1.5em
    }
    iframe {
      margin: 0 auto;
      display: block;
    }
  }

  @media only screen and (max-width: 420px) {
    div.body {
      div.highlight pre {
        padding: 5% 5% 5% 20px;
        margin: 20px -20px;
      }
      iframe {
        width: 100%;
      }
    }
  }
`

const BlogPost = ({ post }) => {
  const removeWrappers = html => {
    (['html', 'body']).forEach(tag => {
      html = html.replace(`<${tag}>`, '')
      html = html.replace(`</${tag}>`, '')
    })
    return html
  }
  const Content = Parser(removeWrappers(post.body.childMarkdownRemark.html), {
    replace: ({ attribs, children }) => {
      let content
      ([linkBlock]).some(transform => (content = transform(attribs, children)))
      return content
    },
  })
  
  
  const langs = ['es', 'en']
  const defaultLangKey = 'es'
  let langKey = getUserLangKey(langs, defaultLangKey)
  if (langKey === 'es') {
    return (
      <Card>
        <BlogPostStyle>
          <Fade in timeout={1000}> 
            <Img fluid={post.heroImage.fluid} style={{width: '100%', height:400}}  /> 
          </Fade>
          <h1 className="title">
            <a href={`/${post.slug}`}>{post.title}</a>
          </h1>
          <h3 style={{fontFamily: 'Source Code Pro'}}><span style={{fontWeight: 300}}>Publicado el </span>{post.publishDate}<span style={{fontWeight: 300}}> por </span>Manuel Quiroga</h3>
          <div className="body">{Content}</div>
        </BlogPostStyle>
      </Card>
    )
  } else {
    return (
      <Card>
        <BlogPostStyle>
          <Fade in timeout={1000}> 
            <Img fluid={post.heroImage.fluid} style={{width: '100%', height:400}}  /> 
          </Fade>
          <h1 className="title">
            <a href={`/${post.slug}`}>{post.title}</a>
          </h1>
          <h3 style={{fontFamily: 'Source Code Pro'}}><span style={{fontWeight: 300}}>Published on </span>{post.publishDate}<span style={{fontWeight: 300}}> by </span>Manuel Quiroga</h3>
          <div className="body">{Content}</div>
        </BlogPostStyle>
      </Card>
    )
  }

  
}

export default BlogPost
