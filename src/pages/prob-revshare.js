import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

import {
  SharesProvider,
  ViewProvider,
} from '../page-support/prob-revshare/state'
import { ActiveView } from '../page-support/prob-revshare/components/active-view'

export default function ProbRevshare(props) {
  const { config: siteConfig } = props

  return (
      <Layout
        permalink='/prob-revshare'
        title={siteConfig.title}
        description={siteConfig.tagLine}
      >
        <ViewProvider>
          <SharesProvider>
            <div className='docMainWrapper wrapper'>
              <Container className='mainContainer documentContainer metaTagContainer'>
                <header className='postHeader'>
                  <h1>Probabilistic Revshare Generator</h1>
                </header>
                <p>
                  This tool allows you to create a Web Monetization meta tag
                  which splits money between multiple Payment Pointers (
                  <Link to='/docs/probabilistic-rev-sharing'>Learn more</Link>).
                  If you make changes to an existing meta tag with this tool,
                  make sure to replace the old meta tag with the updated
                  version.
                </p>
                <ActiveView />
              </Container>
            </div>
          </SharesProvider>
        </ViewProvider>
      </Layout>
  )
}
