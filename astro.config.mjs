import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import astroI18next from 'astro-i18next'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  integrations: [
    starlight({
      title: 'Web Monetization',
      description:
        "Web Monetization allows websites to automatically receive payments from users, facilitated by the user agent and a user's preferred monetization provider.",
      customCss: [
        './node_modules/@interledger/docs-design-system/src/styles/teal-theme.css',
        './node_modules/@interledger/docs-design-system/src/styles/ilf-docs.css',
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
          link: '/docs/',
        },
        {
          label: 'Get a digital wallet',
          collapsed: true,
          items: [
            {
              label: 'Get started',
              link: '/docs/wallet/get-started',
            },
            {
              label: 'Web monetized wallets',
              link: '/docs/wallet/wallets',
            },
          ],
        },
        {
          label: 'Support web monetized content',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/docs/support/overview',
            },
            {
              label: 'Quick start guide',
              link: '/docs/support/quick-start-guide',
            },
            {
              label: 'Web Monetization payments',
              link: '/docs/support/payments',
            },
          ],
        },
        {
          label: 'Implement Web Monetization',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/docs/implement/overview',
            },
            {
              label: 'Quick start guide',
              link: '/docs/implement/quick-start-guide',
            },
            {
              label: 'APIs',
              collapsed: true,
              items: [
                {
                  label: 'Browser API',
                  collapsed: true,
                  items: [
                    {
                      label: 'Monetization <link> element',
                      link: '/docs/implement/link',
                    },
                    {
                      label: 'onmonetization event handler',
                      link: '/docs/implement/onmonetization',
                    },
                  ],
                },
                {
                  label: 'Web Monetization API',
                  collapsed: true,
                  items: [
                    {
                      label: 'Monetization interfaces',
                      link: '/docs/implement/wmapi-interfaces',
                    },
                    {
                      label: 'Monetization events',
                      link: '/docs/implement/events',
                    },
                  ],
                },
              ],
            },
            {
              label: 'HTTP Headers',
              collapsed: true,
              items: [
                {
                  label: 'Content Security Policy (CSP)',
                  link: '/docs/implement/csp',
                },
                {
                  label: 'Permissions Policy',
                  link: '/docs/implement/permissions-policy',
                },
              ],
            },
            {
              label: 'Guides',
              collapsed: true,
              items: [
                {
                  label: 'Provide Exclusive Content',
                  link: '/docs/guides/provide-exclusive-content',
                },
                {
                  label: 'Add a streaming payments counter',
                  link: '/docs/guides/add-a-streaming-payments-counter',
                },
                {
                  label: 'Remove ads',
                  link: '/docs/guides/remove-ads',
                },
                {
                  label: 'Set up probabilistic revenue sharing',
                  link: '/docs/guides/set-up-probabilistic-revenue-sharing',
                },
              ],
            },
            {
              label: 'Community content',
              collapsed: true,
              items: [
                {
                  label: 'Get involved',
                  link: '/docs/implement/get-involved',
                },
                {
                  label: 'Plugins and integrations',
                  link: '/docs/resources/libraries',
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
                  label: 'Specification',
                  link: 'https://webmonetization.org/specification/',
                  attrs: { target: '_blank' },
                },
                {
                  label: 'Interledger',
                  link: 'https://interledger.org',
                  attrs: { target: '_blank' },
                },
                {
                  label: 'Open Payments',
                  link: 'https://openpayments.guide/',
                  attrs: { target: '_blank' },
                },
              ],
            },
          ],
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
