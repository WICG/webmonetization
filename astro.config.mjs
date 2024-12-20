import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import astroI18next from 'astro-i18next'
import react from '@astrojs/react'
import starlightLinksValidator from 'starlight-links-validator'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  integrations: [
    starlight({
      title: 'Web Monetization',
      description:
        "Web Monetization allows websites to automatically receive payments from users, facilitated by the user agent and a user's preferred monetization provider.",
      head: [
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-website-id': '3b8cb97a-2a94-43c2-85e7-277c92c9cf48',
            src: 'https://ilf-site-analytics.netlify.app/script.js',
            'data-domains': 'webmonetization.org'
          }
        }
      ],
      customCss: [
        './node_modules/@interledger/docs-design-system/src/styles/teal-theme.css',
        './node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css',
      ],
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          exclude: ['/prob-revshare'],
        }),
      ],
      expressiveCode: {
        styleOverrides: {
          borderColor: 'transparent',
          borderRadius: 'var(--border-radius)',
        },
      },
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        es: {
          label: 'Español',
          lang: 'es',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
      },
      components: {
        Header: './src/components/docs/Header.astro',
        PageSidebar: './src/components/docs/PageSidebar.astro',
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
            {
              label: 'Web Monetization extension',
              link: '/docs/intro/web-monetization-extension',
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
              label: 'Web Monetization-enabled wallets',
              link: '/docs/resources/op-wallets',
            },
            {
              label: 'Get involved',
              link: '/docs/resources/get-involved',
            },
            {
              label: 'Interledger',
              link: 'https://interledger.org/',
              attrs: {
                target: '_blank',
                rel: 'noopener noreferrer',
                'data-icon': 'external',
              },
            },
            {
              label: 'Open Payments API',
              link: 'https://openpayments.guide/',
              attrs: {
                target: '_blank',
                rel: 'noopener noreferrer',
                'data-icon': 'external',
              },
            },
          ],
        },
        {
          label: 'Specification',
          link: 'https://webmonetization.org/specification/',
          attrs: {
            target: '_blank',
            rel: 'noopener noreferrer',
            'data-icon': 'external',
          },
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
