import React from 'react'
import { Container, Grid } from '@mui/material'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

export default function Index(props) {
  const { config: siteConfig } = props

  const CardList = (props) => {
    return props.cards.map(({ name, image, link, desc }) => {
      if (desc) {
        return (
          <a
            key={name}
            href={link}
            target='_blank'
            rel='noreferrer noopener'
            className='home-card--wide'
          >
            <img
              className='home-card__logo'
              src={`${siteConfig.baseUrl}img/${image}`}
              alt={name}
            />
            <div className='home-card__content'>
              <h3 className='body-text'>{name}</h3>
              <p>{desc}</p>
            </div>
          </a>
        )
      } else {
        return (
          <a
            href={link}
            target='_blank'
            rel='noreferrer noopener'
            key={name}
            className='home-card--basic'
          >
            <img src={`${siteConfig.baseUrl}img/${image}`} alt={name} />
          </a>
        )
      }
    })
  }

  const PrCta = (props) => {
    return (
      <div className='home-cta'>
        <img className='icon--merge' src='/img/icon-merge.svg' alt='' />
        <p>
          Do you know another {props.label}?{' '}
          <a
            href='https://github.com/WICG/webmonetization/edit/main/docusaurus.config.js'
            target='_blank'
            rel='noreferrer noopener'
          >
            Make a PR
          </a>
        </p>
      </div>
    )
  }

  return (
    <Layout
      permalink='/'
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <section className='home-hero'>
        <Container maxWidth='sm'>
          <img
            alt='Web Monetization Icon'
            className='home-hero__icon'
            src='img/wm-logo--animated.svg'
          />
          <h1 className='heading--2'>{siteConfig.title}</h1>
          <p className='home-hero__tagline heading--4'>{siteConfig.tagline}</p>
        </Container>
        <footer className='home-hero__footer'>
          <Container maxWidth='sm'>
            <p>
              Web Monetization is being proposed as a W3C standard at{' '}
              <a
                href='https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785'
                rel='noreferrer noopener'
                target='_blank'
              >
                the Web Platform Incubator Community Group
              </a>
              .
            </p>
          </Container>
        </footer>
      </section>
      <section className='home-section'>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
              <h2 className='heading--3'>Motivation</h2>
              <p>
                The ability to transfer money has been a long-standing omission
                from the web platform. As a result, the web suffers from a flood
                of advertising and broken business models. Web Monetization
                provides an open, native, efficient, and automatic way to
                compensate creators, pay for content, and support crucial web
                infrastructure.
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2 className='heading--3'>Why Now?</h2>
              <p>
                Until recently, there hasn't been an open, neutral and
                cost-efficient protocol for transferring money.{' '}
                <a
                  href='https://interledger.org'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  Interledger
                </a>{' '}
                provides a simple, interoperable, and currency-agnostic method
                for the transfer of small amounts of money. This opens up the
                possibility for streaming money, which makes more Web
                Monetization use cases possible for the first time.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className='home-section'>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            {siteConfig.customFields.wallets.length > 0 && (
              <Grid item sm={12} md={6}>
                <div className='home-section-header'>
                  <h2 className='heading--3'>Web Monetization Wallets</h2>
                  <p>
                    These providers offer ILP-enabled wallets that you can use
                    to become Web Monetized:
                  </p>
                </div>
                <div className='home-cards'>
                  <CardList cards={siteConfig.customFields.wallets} />
                </div>
                <PrCta label='wallet' />
              </Grid>
            )}
            {siteConfig.customFields.search.length > 0 && (
              <Grid item sm={12} md={6}>
                <div className='home-section-header'>
                  <h2 className='heading--3'>
                    Web Monetization Enabled Search Engines
                  </h2>
                  <p>
                    These search engines implement Web Monetization features:
                  </p>
                </div>
                <div className='home-cards'>
                  <CardList cards={siteConfig.customFields.search} />
                </div>
                <PrCta label='search engine' />
              </Grid>
            )}
          </Grid>
        </Container>
      </section>

      {siteConfig.customFields.providers.length > 0 && (
        <section className='home-section'>
          <Container maxWidth='md'>
            <div className='home-section-header'>
              <h2 className='heading--3'>Web Monetization Providers</h2>
              <p>These providers offer Web Monetization services:</p>
            </div>
            <div className='home-cards'>
              <CardList cards={siteConfig.customFields.providers} />
            </div>
            <PrCta label='provider' />
          </Container>
        </section>
      )}
      {siteConfig.customFields.browsers.length > 0 && (
        <section className='home-section'>
          <Container maxWidth='md'>
            <div className='home-section-header'>
              <h2 className='heading--3'>
                Web Monetization Supported Browsers
              </h2>
              <p>
                These browsers implement Web Monetization natively or via an
                extension:
              </p>
            </div>
            <div className='home-cards'>
              <CardList cards={siteConfig.customFields.browsers} />
            </div>
            <PrCta label='browser' />
          </Container>
        </section>
      )}

      {siteConfig.customFields.tools.length > 0 && (
        <section className='home-section'>
          <Container maxWidth='lg'>
            <div className='home-section-header'>
              <h2 className='heading--3'>Web Monetization Tools</h2>
              <p>These tools enable Web Monetization features:</p>
            </div>
            <div className='home-cards'>
              <CardList cards={siteConfig.customFields.tools} />
            </div>
            <PrCta label='tool' />
          </Container>
        </section>
      )}
      <section className='home-section'>
        <Container maxWidth='lg'>
          <h2 className='heading--3'>Resources</h2>
          <Grid container spacing={2}>
            <Grid item sm={6} md={3}>
              <h3 className='heading--4'>Documentation</h3>
              <p>Resource on how to add Web Monetization to your site.</p>
              <Link to='/docs/web-monetization-api'>Read docs ›</Link>
            </Grid>
            <Grid item sm={6} md={3}>
              <h3 className='heading--4'>Explainer</h3>
              <p>The explainer submitted to the W3C.</p>
              <Link to='/docs/explainer'>Read explainer ›</Link>
            </Grid>
            <Grid item sm={6} md={3}>
              <h3 className='heading--4'>Specification</h3>
              <p>The formal specification.</p>
              <Link to='pathname:///specification.html'>Read specs ›</Link>
            </Grid>
            <Grid item sm={6} md={3}>
              <h3 className='heading--4'>
                <img
                  src={`${siteConfig.baseUrl}img/awesome-badge.svg`}
                  alt=''
                />
              </h3>
              <p>
                An{' '}
                <a
                  href='https://github.com/sindresorhus/awesome#readme'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  awesome
                </a>{' '}
                list of additional Web Monetization resources.
              </p>
              <a
                href='https://github.com/thomasbnt/awesome-web-monetization'
                target='_blank'
                rel='noreferrer noopener'
              >
                View list ›
              </a>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  )
}
