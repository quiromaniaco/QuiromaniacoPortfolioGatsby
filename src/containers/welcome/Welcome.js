import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { compose, isMobileView } from 'utils';


import content from './content';

const { tagline, title, subtitle } = content;

type Props = {
  classes: Object,
  width: string,
};

export default ({ classes, width }: Props) => (
  <>  
       <div style={{  paddingLeft:'5%',}}>
        <Fade in timeout={1000}>
          <h1 style={{ fontSize:'2.5rem', color:'#17252A', fontFamily:'Roboto', fontWeight:'800', letterSpacing: '-0.01562em', lineHeight:'1.1', marginBlockStart:'1rem', marginBlockEnd:'0'}}>
              {title} 
          </h1> 
        </Fade> 
      </div>
      {/* {isMobileView(width) ? (
        <div></div>
      ) : (
        <Fade in timeout={1300}>
          <Typography variant='h3'>{'async'}<span style={{paddingLeft:'3%'}}>{''}</span> {'{'}</Typography>
        </Fade>
      )} */}

      <div style={{ paddingBottom:15, paddingLeft:'5%',}}>
        <Fade in timeout={1300}>
          <Typography variant='h3' color='textPrimary'>
            {subtitle}
          </Typography>
        </Fade>
      </div>

      {/* {isMobileView(width) ? (
        <div></div>
      ) : (
        <Fade in timeout={1300}>
          <Typography variant='h3'>{'}'}</Typography>
        </Fade>
      )} */}


     
  </>
)

