import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from './useSiteMetadata';


type Props = {
  description?: String,
  lang?: String,
  meta: [],
  title: String,
};

function SEO({ description, lang, meta, title, image, url }: Props) {
  const siteMetadata = useSiteMetadata();
  const imagen = image || 'https://quiromaniaco.com/static/c25cd78f3253e10fa52f5bc60fe538b5/14b42/profile_quiromaniaco.jpg'
  
  if (lang === 'es') {
    let finalDescription = description
    if (description) {
      finalDescription += ' - Portfolio y web personal de Manuel Quiroga'
    } else {
      finalDescription += 'Portfolio y web personal de Manuel Quiroga'
    }

    const metaDescription = finalDescription 
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        // titleTemplate={`%s | ${siteMetadata.title}`}
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
          {
            property: `og:locale`,
            content: `es_AR`,
          },
          {
            property: `og:image`,
            content: imagen,
          },
          {
            property: `og:url`,
            content: url,
          },
        ].concat(meta)}
      />
    );
  } else {
    let finalDescription = description
    if (description) {
      finalDescription += " - Manuel Quiroga's portfolio and personal blog"
    } else {
      finalDescription += " - Manuel Quiroga's portfolio and personal blog"
    }

    const metaDescription = finalDescription
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        // titleTemplate={`%s | ${siteMetadata.title}`}
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
          {
            property: `og:locale`,
            content: `en_US`,
          },
          {
            property: `og:image`,
            content: imagen,
          },
          {
            property: `og:url`,
            content: url,
          },
        ].concat(meta)}
      />
    );
  }
  
  
  
  


  
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  title: 'Manuel Quiroga',
};

export default SEO;
