import React from 'react'
import { Link } from "gatsby"
import styled from '@emotion/styled'
import Img from "gatsby-image/withIEPolyfill"
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';


const CardStyled = styled.div`
    margin-bottom: 5rem;
    letter-spacing: 0rem;
    @media (min-width: 650px) {
        margin: 40px;
    }
    h3 {
        margin-top: 10px;
        font-size: 1.8rem;
        line-height: 32px;
      }
    p.tags {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Source Code Pro';
        line-height: 1.5;
    }
    p.description {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 1.25rem;
        font-weight: 300;
        font-family: 'Source Code Pro';
        line-height: 1.5;
        
    }

`
const MobileThumbnail = styled.div`
    @media only screen and (max-width: 600px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`


const ProjectCard = ({ post }) => (
  
       <Grid alignContent={'stretch'} spacing={5} xs={12} sm={6}>
           <a href={post.link} target="_blank">
           <CardStyled>
            <Img fluid={post.image.fluid} style={{width: '100%', height:500}}  /> 
            <MobileThumbnail>
                    <h3>{post.title}</h3>
                    <p className={'tags'}>{post.tags}</p>
                    <p className={'description'}>{post.description.description}</p>
            </MobileThumbnail>
           </CardStyled>
           </a>
        </Grid>  
)

export default ProjectCard;