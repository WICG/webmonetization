// Seehttps://v2.docusaurus.io/docs/configuration for all the possible
// site configuration options.

const wallets = [
  {
    name: 'Uphold',
    image: 'uphold_logo.svg',
    link: 'https://www.uphold.com/signup'
  },
  {
    name: 'Gatehub',
    image: 'gatehub_logo.svg',
    link: 'https://gatehub.net'
  }
]

const providers = [
  {
    name: 'Coil',
    image: 'coil_logo.svg',
    link: 'https://coil.com'
  }
]

const browsers = [
  {
    name: 'Puma',
    image: 'puma-logo.svg',
    link: 'https://pumabrowser.com'
  }
]

const search = [
  {
    name: 'Runnaroo',
    image: 'runnaroo_logo.svg',
    link: 'https://www.runnaroo.com'
  },
  {
    name: 'Infinity Search',
    image: 'infinity_search_logo.svg',
    link: 'https://infinitysearch.co'
  }
]

const tools = [
  {
    name: 'Hugo + Webmonetization',
    image: 'hugo_webmo_logo.svg',
    link: 'https://github.com/sabinebertram/hugo-webmonetization-component'
  },
  {
    name: 'Eleventy + Webmonetization',
    image: '11ty_webmo_logo.png',
    link: 'https://github.com/DanCanetti/eleventy-plugin-monetization'
  },
  {
    name: 'Gridsome + Webmonetization',
    image: 'gridsome_webmo_logo.svg',
    link: 'https://github.com/Sergix/gridsome-plugin-monetization'
  },
  {
    name: 'Gatsby + Webmonetization',
    image: 'gatsby_webmo_logo.svg',
    link: 'https://github.com/mrmuhammadali/gatsby-plugin-monetization'
  },
  {
    name: 'Angular + Webmonetization',
    image: 'angular_webmo_logo.svg',
    link: 'https://github.com/CDDelta/ngx-monetization'
  },
  {
    name: 'VuePress + Webmonetization',
    image: 'vuepress_webmo_logo.png',
    link: 'https://github.com/spekulatius/vuepress-plugin-web-monetization'
  },
  {
    name: 'Tessy + Webmonetization',
    image: 'tessy_webmo_logo.svg',
    link: 'https://github.com/VladimirMikulic/tessy'
  },
  {
    name: 'Svelte + Webmonetization',
    image: 'svelte_webmo_logo.svg',
    link: 'https://github.com/sorxrob/svelte-monetization'
  },
  {
    name: 'Moodle + Webmonetization',
    image: 'moodle_webmo_logo.png',
    link: 'https://github.com/andrewhancox/moodle-local_webmonetization'
  }
]

const siteConfig = {
  title: 'Web Monetization', // Title for your website.
  tagline: 'A JavaScript browser API that allows the creation of a payment stream from the user agent to the website',
  url: 'https://webmonetization.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'webmonetization',
  organizationName: 'wicg',

  customFields: {
    providers,
    wallets,
    browsers,
    search,
    tools
  },

  themeConfig: {
    ogImage: 'img/undraw_online.svg',
    algolia: {
      apiKey: '522665321749697a7b612bb54dbdb0b4',
      indexName: 'webmonetization',
      placeholder: 'Search'
    },
    colorMode: {
      defaultMode: 'light', 
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: require('prism-react-renderer/themes/github')
    },
    navbar: {
      title: 'Web Monetization',
      logo: {
        alt: 'Web Monetization logo',
        src: 'img/wm-icon.svg'
      },
      items: [
        { doc: 'getting-started', to: '/docs', label: 'Docs' },
        { href: 'https://webmonetization.org/specification.html', label: 'Specification' },
        { href: 'https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785', label: 'WICG Forum' },
        { href: 'https://github.com/WICG/webmonetization', label: 'GitHub' },
        { search: true }
      ]
    },
    footer: {
      links: [
        {
          title: 'WebMonetization.org',
          items: []
        },
        {
          title: 'Navigation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Meta Tag Generator', to: '/meta-tag' },
            { label: 'Revshare Generator', to: '/prob-revshare' },
            { label: 'Exclusive Content Generator', to: '/exclusive-content' }
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'Github', href: 'https://github.com/WICG/webmonetization' },
            { label: 'ILP Forum', href: 'https://forum.interledger.org' },
            { label: 'Web Platform Incubator Community Group', href: 'https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785' },
            { label: 'Interledger', href: 'https://interledger.org' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { label: 'Docs', to: '/docs/getting-started' },
            { label: 'Specification', href: 'https://webmonetization.org/specification.html' },
            { label: 'Payment Pointers', to: 'https://paymentpointers.org/' }
          ]
        }
      ]
    }
  },

  favicon: 'img/fav-webmonetization.png',

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: ``,

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/custom.js'
  ],

  // Open Graph and Twitter card images.
  // twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  presets: [
    [ '@docusaurus/preset-classic', {
      docs: {
        path: './docs',
        editUrl: 'https://github.com/WICG/webmonetization/tree/master',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.json')
      },
      theme: {
        customCss: require.resolve('./static/css/custom.css')
      }
    }]
  ]
}

module.exports = siteConfig
