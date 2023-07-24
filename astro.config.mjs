import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import react from '@astrojs/react'
import overrideIntegration from './src/overrideIntegration.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://webmonetization.org',
  integrations: [
    overrideIntegration(),
    starlight({
      title: 'Web Monetization',
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/WICG/webmonetization',
      },
      sidebar: [
        {
          label: 'Intro to Web Monetization',
          items: [
            { label: 'Overview', link: '/docs/' },
            { label: 'Sending payments', link: '/docs/intro/sending-payments' },
            {
              label: 'Receiving payments',
              link: '/docs/intro/receiving-payments',
            },
            {
              label: 'Web Monetization flow',
              link: '/docs/intro/web-monetization-flow',
            },
            { label: 'Monetize content', link: '/docs/intro/monetize-content' },
            { label: 'Privacy', link: '/docs/intro/privacy' },
          ],
        },
        {
          label: 'References',
          items: [
            {
              label: 'Web Monetization API',
              items: [
                {
                  label: 'Overview',
                  link: '/docs/references/web-monetization-api',
                },
                {
                  label: 'HTMLLink rel: monetization',
                  link: '/docs/references/link-rel-monetization',
                },
                {
                  label: 'MonetizationCurrencyAmount',
                  link: '/docs/references/monetizationcurrencyamount',
                },
                {
                  label: 'MonetizationEvent',
                  link: '/docs/references/monetizationevent',
                },
              ],
            },
            {
              label: 'HTTP headers',
              items: [
                { label: 'Overview', link: '/docs/references/csp' },
                {
                  label: 'CSP: monetization-src',
                  link: '/docs/references/monetization-src',
                },
                {
                  label: 'Permissions-Policy: monetization',
                  link: '/docs/references/permissions-policy',
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
          items: [
            {
              label: 'Monetize content',
              link: '/docs/guides/monetize-content',
            },
            { label: 'Monetize media', link: '/docs/guides/monetize-media' },
            {
              label: 'Provide exclusive content',
              link: '/docs/guides/provide-exclusive-content',
            },
            {
              label: 'Hide ads',
              link: '/docs/guides/hide-ads',
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
          items: [
            { label: 'Glossary', link: '/docs/resources/glossary' },
            { label: 'Libraries', link: '/docs/resources/libraries' },
            { label: 'Interledger', link: 'https://interledger.org/' },
            {
              label: 'Open Payments API',
              link: 'https://docs.openpayments.guide/',
            },
            {
              label: 'Payment Handler API',
              link: 'https://w3c.github.io/payment-handler/',
            },
            { label: 'Payment pointers', link: 'https://paymentpointers.org/' },
            {
              label: 'Payment Request API',
              link: 'https://www.w3.org/TR/payment-request/',
            },
          ],
        },
      ],
    }),
    react(),
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
