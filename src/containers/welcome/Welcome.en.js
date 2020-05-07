import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { compose, isMobileView } from 'utils';
import contentEN from './content.en';
import contentLinks from './contactLinks'
import { LinkList } from 'components';

const { links } = contentLinks;
const { tagline, title, subtitle } = contentEN;

type Props = {
  classes: Object,
  width: string,
};

export default ({ classes, width }: Props) => (
  <>  
       <div style={{  paddingLeft:'5%',}}>
        <Fade in timeout={1000}>
          <h1 style={{ fontSize:'2.5rem', color:'#17252A', fontFamily:'Roboto', fontWeight:'800', letterSpacing: '-0.01562em', lineHeight:'1.1', marginBlockStart:'1rem', marginBlockEnd:'0.5rem'}}>
             {title} 
          </h1> 
        </Fade> 
      </div>
      <div style={{ paddingBottom:'10rem', paddingLeft:'5%',}}>
        <Fade in timeout={1300}>
          <Typography variant='h3' color='textPrimary'>
            {subtitle}
          </Typography>
        </Fade>
        <LinkList links={links} />
      </div>  
  </>
)





