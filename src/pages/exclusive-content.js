import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'
import { Link } from '@docusaurus/router'

import {
  ViewProvider,
  ExclusiveContentProvider,
} from '../page-support/exclusive-content/state'
import { ActiveView } from '../page-support/exclusive-content/components/active-view'

export default function ExclusiveContent(props) {
  const { config: siteConfig } = props

  return (
    <Layout
      permalink='/exclusive-content'
      title={siteConfig.title}
      description={siteConfig.tagLine}
    >
      <ExclusiveContentProvider>
        <ViewProvider>
          <div className='docMainWrapper wrapper'>
            <Container className='mainContainer documentContainer metaTagContainer'>
              <header className='postHeader'>
                <h1>Exclusive Content Generator</h1>
              </header>
              <p>
                This tool allows you to create exclusive content which is only
                unlocked if payment can be verified.{' '}
                <Link to='/docs/exclusive-content#exclusive-content-with-payment-verification'>
                  Learn more!
                </Link>
              </p>
              <ActiveView />
            </Container>
          </div>
        </ViewProvider>
      </ExclusiveContentProvider>
    </Layout>
  )
}
