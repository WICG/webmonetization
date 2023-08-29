import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import astroI18next from 'astro-i18next'

import react from '@astrojs/react'
import overrideIntegration from './src/overrideIntegration.mjs'
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    overrideIntegration(),
    starlight({
      title: 'Web Monetization',
      customCss: ['./src/styles/ilf-docs.css'],
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
      },
      social: {
        github: 'https://github.com/WICG/webmonetization',
      },
      sidebar: [
        {
          label: 'Intro to Web Monetization',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/docs/',
            },
            {
              label: 'Sending payments',
              link: '/docs/intro/sending-payments',
            },
            {
              label: 'Receiving payments',
              link: '/docs/intro/receiving-payments',
            },
            {
              label: 'Web Monetization flow',
              link: '/docs/intro/web-monetization-flow',
            },
          ],
        },
        {
          label: 'References',
          collapsed: true,
          items: [
            {
              label: 'Web Monetization API',
              items: [
                {
                  label: 'HTML <link> rel=monetization',
                  link: '/docs/references/html-link-rel-monetization',
                },
                {
                  label: 'Monetization events',
                  collapsed: true,
                  items: [
                    {
                      label: 'MonetizationEvent',
                      link: '/docs/references/monetizationevent',
                    },
                    {
                      label: 'amountSent',
                      link: '/docs/references/attributes/amountsent',
                    },
                    {
                      label: 'incomingPayment',
                      link: '/docs/references/attributes/incomingpayment',
                    },
                    {
                      label: 'paymentPointer',
                      link: '/docs/references/attributes/paymentpointer',
                    },
                    {
                      label: 'amount (deprecated)',
                      link: '/docs/references/attributes/amount',
                    },
                    {
                      label: 'assetCode (deprecated)',
                      link: '/docs/references/attributes/assetcode',
                    },
                    {
                      label: 'assetScale (deprecated)',
                      link: '/docs/references/attributes/assetscale',
                    },
                    {
                      label: 'receipt (deprecated)',
                      link: '/docs/references/attributes/receipt',
                    },
                  ],
                },
              ],
            },
            {
              label: 'HTTP headers',
              items: [
                {
                  label: 'Content-Security-Policy: monetization-src',
                  link: '/docs/references/csp-monetization-src',
                },
                {
                  label: 'Permissions-Policy: monetization',
                  link: '/docs/references/permissions-policy-monetization',
                },
              ],
            },
            {
              label: 'Events',
              items: [
                {
                  label: 'GlobalEventHandlers: onmonetization',
                  link: '/docs/references/onmonetization',
                },
              ],
            },
          ],
        },
        {
          label: 'Guides',
          collapsed: true,
          items: [
            {
              label: 'Add Web Monetization to a page',
              link: '/docs/guides/monetize-page',
            },
            {
              label: 'Remove ads',
              link: '/docs/guides/remove-ads',
            },
            {
              label: 'Provide exclusive content',
              link: '/docs/guides/provide-exclusive-content',
            },
            {
              label: 'Set up probabilistic revenue sharing',
              link: '/docs/guides/set-up-probabilistic-revenue-sharing',
            },
            {
              label: 'Add a streaming payments counter',
              link: '/docs/guides/add-a-streaming-payments-counter',
            },
          ],
        },
        {
          label: 'Resources',
          collapsed: true,
          items: [
            {
              label: 'Glossary',
              link: '/docs/resources/glossary',
            },
            {
              label: 'Libraries',
              link: '/docs/resources/libraries',
            },
            {
              label: 'Payment pointers',
              link: '/docs/resources/paymentpointers',
            },
            {
              label: 'External resources',
              collapsed: true,
              items: [
                {
                  label: 'Interledger',
                  link: 'https://interledger.org/',
                },
                {
                  label: 'Open Payments API',
                  link: 'https://docs.openpayments.guide/',
                },
                {
                  label: 'Payment Handler API',
                  link: 'https://w3c.github.io/payment-handler/',
                },
                {
                  label: 'Payment Pointers',
                  link: 'https://paymentpointers.org/',
                },
                {
                  label: 'Payment Request API',
                  link: 'https://www.w3.org/TR/payment-request/',
                },
              ],
            },
          ],
        },
        {
          label: 'Specification',
          link: 'https://webmonetization.org/specification/',
        },
      ],
    }),
    react(),
    astroI18next(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  server: {
    port: 1100,
  },
})
