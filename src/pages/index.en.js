import React from 'react';
import { graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill"
import { Layout, SEO } from 'components';
import styles from '../styles/flexIndex';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { WelcomeEN } from 'containers';
import { isMobileView } from 'utils';

type Props = {
  classes: Object,
  width: string,
};

const IndexPage = ({data, classes, width}: Props) => (
  <Layout>
    <SEO lang='en' url={`https://quiromaniaco.com`}/>
    <Grid container alignContent={'flex-start'} direction={'row'}  >
      <Grid alignContent={'stretch'} xs={12} sm={4}>
        <Img fluid={data.file.childImageSharp.fluid} style={{width: '100%', height:'100%'}}  /> 
      </Grid>
      <div style={{width:'4%'}}>
      </div>
      <Grid xs={12} sm={7} >
        <Grid container direction={'column'} justify={"center"} >
            <WelcomeEN /> 
            {/* {isMobileView(width) ? (
              <Welcome /> 
            ) : (
              <Welcome /> 
            )}  */}
        </Grid>
      </Grid>
    </Grid>
  </Layout>
);


export default withStyles(styles)(IndexPage);

export const query = graphql`
  query {
    file(relativePath: { eq: "profile_quiromaniaco.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`