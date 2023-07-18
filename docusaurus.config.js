// See https://v2.docusaurus.io/docs/configuration for all the possible
// site configuration options.

const wallets = [
  {
    name: 'Gatehub',
    image: 'logo-wallet-gatehub.svg',
    link: 'https://gatehub.net',
  },
]

const providers = []

const browsers = []

const search = [
  {
    name: 'Mojeek',
    image: 'logo-search-mojeek.svg',
    link: 'https://www.mojeek.com',
  },
]

const tools = [
  {
    name: 'Hugo Web Monetization Component',
    image: 'logo-tool-hugo.svg',
    link: 'https://github.com/sabinebertram/hugo-webmonetization-component',
    desc: 'Theme component that enables Web Monetization on your entire Hugo website',
    version: ['1.0'],
  },
  {
    name: 'Monetize 11ty',
    image: 'logo-tool-11ty.svg',
    link: 'https://github.com/DanCanetti/eleventy-plugin-monetization',
    desc: 'An Eleventy plugin to monetize posts and site content by creating exclusive content areas',
    version: ['1.0'],
  },
  {
    name: 'gridsome-plugin-monetization',
    image: 'logo-tool-gridsome.svg',
    link: 'https://github.com/Sergix/gridsome-plugin-monetization',
    desc: 'Web Monetization plugin for Gridsome',
    version: ['1.0'],
  },
  {
    name: 'gatsby-plugin-monetization',
    image: 'logo-tool-gatsby.svg',
    link: 'https://github.com/mrmuhammadali/gatsby-plugin-monetization',
    desc: 'A Gatsby plugin for react-monetize to speed up your integration with Web Monetization',
    version: ['1.0'],
  },
  {
    name: 'ngx-monetization',
    image: 'logo-tool-angular.svg',
    link: 'https://github.com/CDDelta/ngx-monetization',
    desc: 'Web Monetization API for Angular',
    version: ['1.0'],
  },
  {
    name: 'Vuepress Plugin Web-Monetization',
    image: 'logo-tool-vuepress.svg',
    link: 'https://github.com/spekulatius/vuepress-plugin-web-monetization',
    desc: 'Adds a Web Monetization meta tag to your VuePress website',
    version: ['1.0'],
  },
  {
    name: 'Tessy',
    image: 'logo-tool-tessy.svg',
    link: 'https://github.com/VladimirMikulic/tessy',
    desc: 'Advanced Web Monetization testing library with powerful declarative API',
    version: ['1.0'],
  },
  {
    name: 'Moodle Webmonetization Module',
    image: 'logo-tool-moodle-webm.svg',
    link: 'https://github.com/andrewhancox/moodle-local_webmonetization',
    desc: 'A plugin for adding a web monetization meta tag to your Moodle site',
    version: ['1.0'],
  },
  {
    name: 'Jekyll + Webmonetization',
    image: 'logo-tool-jekyll-webm.svg',
    link: 'https://github.com/philnash/jekyll-web_monetization',
    desc: 'A Jekyll plugin for adding a Web Monetization meta tag to your site',
    version: ['1.0'],
  },
]

const siteConfig = {
  title: 'Web Monetization', // Title for your website.
  tagline:
    'The Web Monetization API allows websites to automatically and passively receive payments from Web Monetization-enabled visitors.',
  url: 'https://webmonetization.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // trailingSlash: true,
  projectName: 'webmonetization',
  organizationName: 'wicg',
  favicon: 'img/favicon.png',

  customFields: {
    providers,
    wallets,
    browsers,
    search,
    tools,
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: './docs',
          editUrl: 'https://github.com/WICG/webmonetization/tree/main',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // algolia: {
    //   apiKey: '9bd462ce100c39e6c9d9b0f37316e3b2',
    //   indexName: 'webmonetizationorg',
    //   appId: 'L5XN3RH5F5',
    //   placeholder: 'Search',
    // },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      links: [
        {
          title: 'WebMonetization.org',
          items: [],
        },
        {
          title: 'Navigation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Link Tag Generator', to: '/link-tag' },
            { label: 'Revshare Generator', to: '/prob-revshare' },
            // { label: 'Exclusive Content Generator', to: '/exclusive-content' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/WICG/webmonetization',
            },
            {
              label: 'Community Forem',
              href: 'https://community.interledger.org',
            },
            {
              label: 'Web Incubator Community Group',
              href: 'https://wicg.io/',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Payment Pointers', to: 'https://paymentpointers.org/' },
            { label: 'Open Payments', to: 'https://docs.openpayments.guide/' },
            { label: 'Interledger', href: 'https://interledger.org' },
          ],
        },
      ],
    },
    navbar: {
      title: 'Web Monetization',
      logo: {
        alt: 'Web Monetization logo',
        src: 'img/wm-logo.svg',
      },
      items: [
        { doc: 'web-monetization-api', to: '/docs', label: 'Docs' },
        {
          label: 'Specification',
          to: 'pathname:///specification',
        },
        {
          href: 'https://web.archive.org/web/20230521023112/https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785',
          label: 'WICG Forum',
        },
        { href: 'https://github.com/WICG/webmonetization', label: 'GitHub' },
        // { type: 'search', position: 'right' },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
  },
}

module.exports = siteConfig
