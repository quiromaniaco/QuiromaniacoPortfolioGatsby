// import React from 'react';

// import { Layout, SEO } from 'components';
// import { Welcome } from 'containers';

// const IndexPage = () => (
//   <Layout>
//     <SEO title='Perfil' />
//     <Welcome />
//   </Layout>
// );

// export default IndexPage;

import React from "react"
import { graphql, navigate } from "gatsby"
import { getUserLangKey } from "ptz-i18n"
import { withPrefix } from "gatsby-link"

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args)
    // Skip build, Browsers only
    if (typeof window !== "undefined") {
      const { langs, defaultLangKey } = args.data.site.siteMetadata
      const langKey = getUserLangKey(langs, defaultLangKey)
      const homeUrl = withPrefix(`/${langKey}/`)
      navigate(homeUrl)
    }
  }
  render() {
    return <div />
  }
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLangKey
        langs
      }
    }
  }
`