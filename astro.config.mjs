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
      ],
      expressiveCode: {
        styleOverrides: {
          borderColor: 'transparent',
          borderRadius: 'var(--border-radius)',
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
      social: {
        github: 'https://github.com/WICG/webmonetization',
      },
      sidebar: [
        {
          label: 'Overview',
          link: '/docs/',
        },
        {
          label: 'For content consumers',
          collapsed: false,
          items: [
            {
              label: 'Overview',
              link: 'supporters/overview',
            },
            {
              label: 'Get started',
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
          collapsed: false,
          items: [
              {
                label: 'Overview',
                link: '/developers/overview',
              },
              {
                label: 'Get started',
                link: '/developers/get-started',
              },
              {
                label: 'Learn about receiving payments',
                link: '/developers/about-receiving',
              },
          ],
        },
        {
          label: 'For developers',
          collapsed: false,
          items: [
            {
              label: 'Tutorials',
              collapsed: true,
              items: [
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
                {
                  label: 'Test Web Monetization',
                  link: '/tutorials/test-web-monetization',
                },
              ],
            },
            {
              label: 'Libraries',
              link: '/developers/libraries',
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
              label: 'Feed (RSS, Atom, JSON Feed)',
              link: '/developers/rss-atom-jsonfeed',
            },
            {
              label: 'Social (Activity Streams)',
              link: '/developers/activity-streams',
            },
            {
              label: 'Web Monetization Specification',
              link: 'https://webmonetization.org/specification/',
              attrs: { target: '_blank' },
            },
          ],
        },
        {
          label: 'Compatible digital wallets',
          link: '/wallets',
        },
        {
          label: 'Resources',
          collapsed: false,
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
