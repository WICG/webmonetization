import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'

import { ShareList } from './components/share-list'
import { SharesProvider } from './components/use-shares'
import { SharesMetaTag } from './components/meta-tag'

export default function ProbRevshare (props) {
  const { config: siteConfig } = props

  return <Layout
    permalink='/prob-revshare'
    title={siteConfig.title}
    description={siteConfig.tagLine}
  >
    <SharesProvider>
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer metaTagContainer">
          <header className="postHeader">
            <h1>Probabilistic Revshare Generator</h1>
          </header>
          <p>
            This tool allows you to create a meta tag which splits money between several creators. Make sure to update your meta tag every time you update the shares on this page!
          </p>
          <ShareList />
          <h2>Meta Tag</h2>
          <SharesMetaTag />
        </Container>
      </div>
    </SharesProvider>
  </Layout>
}
