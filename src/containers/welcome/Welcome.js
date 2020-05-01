import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';



// import { Animated } from 'components';

import content from './content';

const { tagline, title, subtitle } = content;


export default () => (
  <>  
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          {title}
        </Typography>
      </Fade>
      <Fade in timeout={1300}>
        <Typography variant='h3'>{'async'}<span style={{paddingLeft:'3%'}}>{''}</span> {'{'}</Typography>
      </Fade>
      <div style={{marginTop:-10, paddingBottom:15, paddingLeft:'5%',}}>
        <Fade in timeout={1300}>
          <Typography variant='h3' color='textPrimary'>
            {subtitle}
          </Typography>
        </Fade>
      </div>
      <Fade in timeout={1300}>
        <Typography variant='h3'>{'}'}</Typography>
      </Fade>
  </>
)

