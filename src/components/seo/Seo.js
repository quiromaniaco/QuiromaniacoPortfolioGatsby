import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from './useSiteMetadata';

type Props = {
  description?: String,
  lang?: String,
  meta: [],
  title: String,
};

function SEO({ description, lang, meta, title }: Props) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

export default SEO;
