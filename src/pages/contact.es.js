import React from 'react';

import { Layout, SEO } from 'components';
import { ContactES } from 'containers';

const AboutPage = () => (
  <Layout>
    <SEO lang='es' title='Contacto | Manuel Quiroga' description='Datos de contacto de Manuel Quiroga' />
    <ContactES />
  </Layout>
);

export default AboutPage;
