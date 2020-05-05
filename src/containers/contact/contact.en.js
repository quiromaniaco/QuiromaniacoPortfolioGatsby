import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import styled from '@emotion/styled'
import { Animated, LinkList } from 'components';
import content from './content.en';

const { title, subtitle, links } = content;

const ContactContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`

const ContactEN = () => (
  <>
    <ContactContainer>
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          <Animated>{title}</Animated>
        </Typography>
      </Fade>
      <Typography variant='h3' color='textPrimary'>
        {subtitle}
      </Typography>
      <LinkList links={links} />
    </ContactContainer>
  </>
);

export default ContactEN;
