import React from 'react';

import { Layout, SEO } from 'components';
import { ContactEN } from 'containers';

const AboutPage = () => (
  <Layout>
    <SEO lang='en' url={`https://quiromaniaco.com/en/contact`} title='Contact | Manuel Quiroga' description='Contact information of Manuel Quiroga' />
    <ContactEN />
  </Layout>
);

export default AboutPage;
