import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'
import { Link } from '@docusaurus/router'

import { SharesProvider, ViewProvider } from './state'
import { ActiveView } from './components'

export default function ProbRevshare (props) {
  const { config: siteConfig } = props

  return <Layout
    permalink='/prob-revshare'
    title={siteConfig.title}
    description={siteConfig.tagLine}
  >
    <ViewProvider>
      <SharesProvider>
        <div className="docMainWrapper wrapper">
          <Container className="mainContainer documentContainer metaTagContainer">
            <header className="postHeader">
              <h1>Probabilistic Revshare Generator</h1>
            </header>
            <p>
              This tool allows you to create a meta tag which splits money between several creators (<Link to='/docs/probabilistic-rev-sharing'>Learn more</Link>). Make sure to update your meta tag every time you update the shares on this page!
            </p>
            <ActiveView />
          </Container>
        </div>
      </SharesProvider>
    </ViewProvider>
  </Layout>
}
