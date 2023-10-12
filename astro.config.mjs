import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import astroI18next from 'astro-i18next'

import react from '@astrojs/react'
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    starlight({
      title: 'Web Monetization',
      description:
        "Web Monetization allows websites to automatically receive payments from users, facilitated by the user agent and a user's preferred monetization provider.",
      customCss: [
        './node_modules/@interledger/docs-design-system/src/styles/green-theme.css',
        './node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css',
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      components: {
        Header: './src/components/docs/Header.astro',
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
                      label: 'amount',
                      link: '/docs/references/attributes/amount',
                      badge: { text: 'deprecated', variant: 'danger' },
                    },
                    {
                      label: 'assetCode',
                      link: '/docs/references/attributes/assetcode',
                      badge: { text: 'deprecated', variant: 'danger' },
                    },
                    {
                      label: 'assetScale',
                      link: '/docs/references/attributes/assetscale',
                      badge: { text: 'deprecated', variant: 'danger' },
                    },
                    {
                      label: 'receipt',
                      link: '/docs/references/attributes/receipt',
                      badge: { text: 'deprecated', variant: 'danger' },
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
  server: {
    port: 1100,
  },
})
