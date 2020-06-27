// See https://docusaurus.io/docs/site-config for all the possible
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
  },
  {
    name: 'Stronghold',
    image: 'stronghold_logo.svg',
    link: 'https://stronghold.co/real-time-payments#coil'
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
  }
]

const siteConfig = {
  title: 'Web Monetization', // Title for your website.
  tagline: 'A JavaScript browser API which allows the creation of a payment stream from the user agent to the website',
  url: 'https://webmonetization.org', // Your website URL
  cname: 'webmonetization.org',
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'webmonetization',
  organizationName: 'wicg',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  algolia: {
    apiKey: '522665321749697a7b612bb54dbdb0b4',
    indexName: 'webmonetization',
    placeholder: 'Search'
  },
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', href: '/docs', label: 'Docs' },
    { href: '/specification.html', label: 'Specification' },
    { href: 'https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785', label: 'WICG Forum' },
    { href: 'https://github.com/WICG/webmonetization', label: 'GitHub' },
    { search: true }
  ],

  providers,
  wallets,
  browsers,
  tools,

  /* path to images for header/footer */
  headerIcon: 'img/wm-icon.svg',
  footerIcon: 'img/webmon_icon_simple.svg',
  favicon: 'img/fav-webmonetization.png',

  /* Colors for website */
  colors: {
    primaryColor: '#0080FF',
    secondaryColor: '#282C34'
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      'Times New Roman',
      'Serif'
    ],
    myOtherFont: [
      '-apple-system',
      'system-ui'
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: ``,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-light'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/custom.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg'
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
}

module.exports = siteConfig
