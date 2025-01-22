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
      },
      components: {
        Header: './src/components/docs/Header.astro',
        PageSidebar: './src/components/docs/PageSidebar.astro',
        PageTitle: './src/components/docs/PageTitle.astro',
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
          label: 'Support web monetized content',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/support/overview',
            },
            {
              label: 'Quick start guide',
              link: '/support/quick-start',
            },
            {
              label: 'Use the extension',
              link: '/support/use-extension',
            },
            {
              label: 'How payments work',
              link: '/support/how-payments-work',
            },
          ],
        },
        {
          label: 'Experiment with Web Monetization',
          collapsed: true,
          items: [
            {
              label: 'Overview',
              link: '/experiment/overview',
            },
            {
              label: 'Quick start guide',
              link: '/experiment/quick-start',
            },
            {
              label: 'How payments work',
              link: '/experiment/how-payments-work',
            },
            {
              label: 'Developer corner',
              collapsed: true,
              items: [
                {
                  label: 'Guides',
                  collapsed: true,
                  items: [
                    {
                      label: 'Show content to paying visitors',
                      link: '/experiment/guides/show-content',
                    },
                    {
                      label: 'Remove content for paying visitors',
                      link: '/experiment/guides/remove-content',
                    },
                    {
                      label: 'Show visitors how much they\'ve contributed',
                      link: '/experiment/guides/contribution-counter',
                    },
                    {
                      label: 'Set up probabilistic revenue sharing',
                      link: '/experiment/guides/revenue-sharing',
                    },
                    {
                      label: 'Test Web Monetization',
                      link: '/experiment/guides/test-web-monetization',
                    },
                  ],
                },
                {
                  label: 'APIs',
                  collapsed: true,
                  items: [
                    {
                      label: 'HTML DOM API',
                      collapsed: false,
                      items: [
                        {
                          label: 'Monetization <link> element',
                          link: '/experiment/link-element',
                        },
                      ],
                    },
                    {
                      label: 'Web Monetization API',
                      collapsed: false,
                      items: [
                        {
                          label: 'Monetization interfaces',
                          link: '/experiment/wmapi-interfaces',
                        },
                        {
                          label: 'Monetization events',
                          link: '/experiment/events',
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
                      link: '/experiment/csp',
                    },
                    {
                      label: 'Permissions Policy',
                      link: '/experiment/permissions-policy',
                    },
                  ],
                },
                {
                  label: 'Libraries',
                  link: '/experiment/libraries',
                },
                {
                  label: 'Web Monetization Specification',
                  link: 'https://webmonetization.org/specification/',
                  attrs: { target: '_blank' },
                },
              ],
            },
          ],
        },
        {
          label: 'Compatible digital wallets',
          link: '/resources/wallets',
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
              label: 'Get involved',
              link: '/resources/get-involved',
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
