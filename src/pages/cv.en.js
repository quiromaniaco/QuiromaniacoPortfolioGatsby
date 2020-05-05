import React from 'react';
import { Layout, SEO } from 'components';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import styled from '@emotion/styled'


const CurriculumData = styled.div`
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 325;
    font-family: 'Source Code Pro';
    line-height: 1.5;
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Source Code Pro';
    line-height: 1.5;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 325;
    font-family: 'Source Code Pro';
    line-height: 1.5;
  }
  a {
    color: #0a0a0a;
    text-decoration: none;
  }
  p.tags {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Source Code Pro';
    line-height: 1.5;
  }
  @media only screen and (max-width: 980px) {
    h3 {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 2rem;
      font-weight: 300;
      font-family: 'Source Code Pro';
      line-height: 1.5;
    }
    h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 1rem;
      font-weight: 300;
      font-family: 'Source Code Pro';
      line-height: 1.5;
    }
    p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
      font-weight: 325;
      font-family: 'Source Code Pro';
      line-height: 1.5;
    }
    a {
      color: #0a0a0a;
      text-decoration: none;
    }
    p.tags {
      margin-top: 5px;
      margin-bottom: 10px;
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Source Code Pro';
      line-height: 1.5;
    }
  }
}
`

const MobileContainer = styled.div`
  padding-bottom: 2rem;
  letter-spacing: 0rem;
  @media only screen and (max-width: 980px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10rem;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 70px;
  }
`




const cvPage = () => (
  <Layout>
    <SEO title='Curriculum Vitae' />
      <MobileContainer>
        <Fade in timeout={500}>
          <Typography variant='h1' color='textPrimary'>
            Manuel Quiroga
          </Typography>
        </Fade>
        <Fade in timeout={1000}>
        <CurriculumData>
          <h3>Graduate in Business Administration - <a href="https://ucc.edu.ar/" target="_blank">Universidad Catolica de Cordoba</a></h3>
          <h3>IBA Bachelor - <a href="https://www.europa-uni.de/" target="_blank">Europa-Universität Viadrina Frankfurt (Oder)</a></h3>
          <h3>Self-taught Software Developer</h3>
          <h3> Self-taught Designer</h3>
          {/* <h2> Sobre Mi:</h2>
          <p>Me considero una persona energética, proactiva y amigable que siempre está buscando nuevos desafíos para superarse, entretenerse y divertirse.</p> */}
          <h2>Languages</h2>
          <p className={'tags'}>#Spanish #English #German-A1</p>
          <h2>Technical Knoledge:</h2>
          <p className={'tags'}>#Python #Django #Javascript #React.js #Gatsby.js #Node.js #React-Native #CSS</p>
          <h2>Other Achievements:</h2>
          <p><a href="https://collegereadiness.collegeboard.org/sat" target="_blank">SAT - Scholastic Aptitude Test</a></p>
          <p><a href="https://www.unsw.edu.au/" target="_blank">University of New South Walles - UNSW Sydney - Advanced English course</a></p>
        </CurriculumData>
        </Fade>
      </MobileContainer>      
  </Layout>
);


export default cvPage;