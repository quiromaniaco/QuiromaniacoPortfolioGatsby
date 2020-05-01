import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from 'components';

import content from './content.es';

const { title, subtitle, links } = content;

const ContactES = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        {title}
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
  </>
);

export default ContactES;
