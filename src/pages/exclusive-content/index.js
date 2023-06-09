import React from 'react'
import { Container } from '@mui/material'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

import { ViewProvider, ExclusiveContentProvider } from './state/_index'
import { ActiveView } from './components/_active-view'

export default function ExclusiveContent(props) {
  const { config: siteConfig } = props

  return (
    <Layout
      permalink='/exclusive-content'
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <ExclusiveContentProvider>
        <ViewProvider>
          <Container maxWidth='md' component='section'>
            <h1>Exclusive Content Generator</h1>
            <p>
              This tool allows you to create exclusive content which is only
              unlocked if payment can be verified.{' '}
              <Link to='/docs/exclusive-content#exclusive-content-with-payment-verification'>
                Learn more!
              </Link>
            </p>
            <ActiveView />
          </Container>
        </ViewProvider>
      </ExclusiveContentProvider>
    </Layout>
  )
}
