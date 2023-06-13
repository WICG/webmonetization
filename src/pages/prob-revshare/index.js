import React from 'react'
import { Container } from '@mui/material'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

import { SharesProvider, ViewProvider } from './state/_index'
import { ActiveView } from './components/_active-view'

export default function ProbRevshare(props) {
  const { config: siteConfig } = props

  return (
    <Layout
      permalink='/prob-revshare'
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <ViewProvider>
        <SharesProvider>
          <Container maxWidth='md' component='section'>
            <h1>Probabilistic Revshare Generator</h1>
            <p>
              This tool allows you to create a Web Monetization link tag which
              splits money between multiple Payment Pointers (
              <Link to='/docs/probabilistic-rev-sharing'>Learn more</Link>). If
              you make changes to an existing link tag with this tool, make sure
              to replace the old link tag with the updated version.
            </p>
            <ActiveView />
          </Container>
        </SharesProvider>
      </ViewProvider>
    </Layout>
  )
}
