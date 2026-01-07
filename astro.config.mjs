import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightLinksValidator from 'starlight-links-validator'
import starlightFullViewMode from 'starlight-fullview-mode'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  integrations: [
    starlight({
      title: 'Web Monetization',
      description:
        'Web Monetization introduces a new way for content owners and publishers to earn while allowing their audience to engage on their own terms.',
      head: [
        {
          tag: 'script',
          attrs: {
            defer: true,
            'data-website-id': '3b8cb97a-2a94-43c2-85e7-277c92c9cf48',
            src: 'https://ilf-site-analytics.netlify.app/script.js',
            'data-domains': 'webmonetization.org',
          },
        },
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
        starlightFullViewMode(),
      ],
      expressiveCode: {
        styleOverrides: {
          borderColor: 'transparent',
          borderRadius: 'var(--moderate-rounding)',
        },
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      components: {
        Header: './src/components/docs/Header.astro',
        PageSidebar: './src/components/docs/PageSidebar.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/WICG/webmonetization',
        },
      ],
      sidebar: [
        {
          label: 'Overview',
          link: '/docs/',
        },
        {
          label: 'For content consumers',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: 'supporters/overview',
            },
            {
              label: 'Get started with the extension',
              link: 'supporters/get-started',
            },
            {
              label: 'Learn about sending payments',
              link: '/supporters/about-sending',
            },
          ],
        },
        {
          label: 'For content owners',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/publishers/overview',
            },
            {
              label: 'Get started',
              link: '/publishers/get-started',
            },
            {
              label: 'Learn about receiving payments',
              link: '/publishers/about-receiving',
            },
            {
              label: 'WordPress plugin',
              link: '/publishers/wordpress',
            },
            {
              label: 'Publisher tools',
              collapsed: true,
              items: [
                {
                  label: 'Banner tool',
                  link: '/publishers/banner-tool'
                },
                {
                  label: 'Widget tool',
                  link: '/publishers/widget-tool'
                },
                {
                  label: 'Link tag generator',
                  link: '/publishers/link-tag-tool'
                },
                {
                  label: 'Probabalistic revshare generator',
                  link: '/publishers/revshare-tool'
                }, 
              ],
            },
          ],
        },
        {
          label: 'For developers',
          collapsed: true,
          items: [
            {
              label: 'Wallet linking',
              collapsed: true,
              items: [
                {
                  label: 'Webpage (HTML)',
                  link: '/developers/link-element-webpage',
                },
                {
                  label: 'Feed (RSS, Atom, JSON Feed)',
                  link: '/developers/rss-atom-jsonfeed',
                },
                {
                  label: 'Social (Activity Streams)',
                  link: '/developers/activity-streams',
                },
              ],
            },
            {
              label: 'Guides',
              collapsed: true,
              items: [
                {
                  label: 'Test Web Monetization',
                  collapsed: true,
                  items: [
                    {
                      label: 'Sign up for a test wallet account',
                      link: '/guides/test-wallet-sign-up',
                    },
                    {
                      label: 'Send test payments',
                      link: '/guides/send-test-payments',
                    },
                    {
                      label: 'Receive test payments',
                      link: '/guides/receive-test-payments',
                    },
                  ],
                },
                {
                  label: 'Show content to paying visitors',
                  link: '/tutorials/show-content',
                },
                {
                  label: 'Remove content for paying visitors',
                  link: '/tutorials/remove-content',
                },
                {
                  label: "Show visitors how much they've contributed",
                  link: '/tutorials/contribution-counter',
                },
                {
                  label: 'Set up probabilistic revenue sharing',
                  link: '/tutorials/revenue-sharing',
                },
              ],
            },
            {
              label: 'API docs',
              collapsed: true,
              items: [
                {
                  label: 'HTML DOM API',
                  collapsed: false,
                  items: [
                    {
                      label: 'Monetization <link> element',
                      link: '/developers/link-element',
                    },
                  ],
                },
                {
                  label: 'Web Monetization API',
                  collapsed: false,
                  items: [
                    {
                      label: 'Monetization interfaces',
                      link: '/developers/interfaces',
                    },
                    {
                      label: 'Monetization events',
                      link: '/developers/events',
                    },
                  ],
                },
                {
                  label: 'HTTP Headers',
                  collapsed: true,
                  items: [
                    {
                      label: 'Content Security Policy (CSP)',
                      link: '/developers/csp',
                    },
                    {
                      label: 'Permissions Policy',
                      link: '/developers/permissions-policy',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Libraries',
              link: '/developers/libraries',
            },
            {
              label: 'Web Monetization Specification',
              link: 'https://webmonetization.org/specification/',
              attrs: {
                target: '_blank',
                rel: 'noopener noreferrer',
                'data-icon': 'external',
              },
            },
          ],
        },
        {
          label: 'Compatible digital wallets',
          link: '/wallets',
        },
        {
          label: 'Resources',
          collapsed: true,
          items: [
            {
              label: 'Glossary',
              link: '/resources/glossary',
            },
            {
              label: 'Publisher tools',
              link: 'https://webmonetization.org/tools/',
              attrs: {
                target: '_blank',
                rel: 'noopener noreferrer',
                'data-icon': 'external',
              },
            },
            {
              label: 'Get involved',
              link: '/resources/get-involved',
            },
          ],
        },
      ],
    }),
  ],
  redirects: {
    '/link-tag': '/tools/link-tag',
    '/prob-revshare': '/tools/prob-revshare',
    '/docs/api': '/developers/interfaces',
    '/docs/explainer': '/docs',
    '/docs/intro/sending-payments': '/supporters/about-sending',
    '/developers/about-receiving': '/publishers/about-receiving',
    '/developers/tools': '/publishers/banner-tool',
    '/docs/intro/receiving-payments': '/publishers/about-receiving',
    '/docs/intro/web-monetization-flow': '/docs',
    '/docs/intro/web-monetization-extension': '/supporters/get-started',
    '/docs/references/html': '/developers/link-element',
    '/docs/references/html-link-rel-monetization': '/developers/link-element',
    '/docs/references/rss-atom-jsonfeed': '/developers/rss-atom-jsonfeed',
    '/docs/references/activitystreams': '/developers/activity-streams',
    '/docs/references/onmonetization': '/developers/interfaces',
    '/docs/references/monetizationevent': '/developers/interfaces',
    '/docs/references/attributes/amountsent': '/developers/events#amountsent',
    '/docs/references/attributes/incomingpayment':
      '/developers/events#incomingpayment',
    '/docs/references/attributes/paymentpointer':
      '/developers/events#paymentpointer',
    '/docs/references/csp-monetization-src': '/developers/csp',
    '/docs/references/permissions-policy-monetization':
      '/developers/permissions-policy',
    '/docs/references/deprecations': '/docs',
    '/developers/get-started': '/publishers/get-started',
    '/docs/guides/monetize-page': '/publishers/get-started',
    '/docs/guides/remove-ads': '/tutorials/remove-content',
    '/docs/guides/provide-exclusive-content': '/tutorials/show-content',
    '/docs/guides/set-up-probabilistic-revenue-sharing':
      '/tutorials/revenue-sharing',
    '/docs/guides/add-a-streaming-payments-counter':
      '/tutorials/contribution-counter',
    '/docs/resources/glossary': '/resources/glossary',
    '/docs/resources/libraries': '/developers/libraries',
    '/docs/resources/op-wallets': '/wallets',
    '/docs/resources/get-involved': '/resources/get-involved',
    '/install': '/supporters'
  },
  server: {
    port: 1100,
  },
})
