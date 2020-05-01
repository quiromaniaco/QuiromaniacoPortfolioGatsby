import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, ProjectCard } from 'components';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled'

const ProjectCardStyle = styled.div`
  h3 {
    margin: 0px;
    font-size: 1.8rem;
    line-height: 32px;
  }
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 300;
    font-family: 'Source Code Pro';
    line-height: 1.5;
  }
  a {
    color: #0a0a0a;
    text-decoration: none;
  }
`

const ProjectsES = ({ data }) => (
  <Layout>
    <SEO title='Proyectos' />
    <ProjectCardStyle>
      <Grid container alignContent={'flex-start'} direction={'row'}  >
          {data.allContentfulProjects.edges.map((node, key) => (
          
            <ProjectCard
              key={key}
              post={{
                ...node.node,
                
              }}
            />
            
          ))}
      </Grid>  
    </ProjectCardStyle>
  </Layout>
)

export default ProjectsES;

export const query = graphql`
  query ProjectsESQuery {
    allContentfulProjects(filter: { node_locale: { eq: "es-AR" } }) {
      edges {
        node {
          description {
            description
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
              }
          }
          title
          link
          tags
        }
      }
    }
  }
`