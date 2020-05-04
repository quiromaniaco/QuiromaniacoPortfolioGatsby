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
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          {title}
        </Typography>
      </Fade>

      {isMobileView(width) ? (
        <div></div>
      ) : (
        <Fade in timeout={1300}>
          <Typography variant='h3'>{'async'}<span style={{paddingLeft:'3%'}}>{''}</span> {'{'}</Typography>
        </Fade>
      )}


      



      <div style={{marginTop:-10, paddingBottom:15, paddingLeft:'5%',}}>
        <Fade in timeout={1300}>
          <Typography variant='h3' color='textPrimary'>
            {subtitle}
          </Typography>
        </Fade>
      </div>



      {isMobileView(width) ? (
        <div></div>
      ) : (
        <Fade in timeout={1300}>
          <Typography variant='h3'>{'}'}</Typography>
        </Fade>
      )}


     
  </>
)

