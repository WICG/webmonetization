// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const wallets = [
  {
    name: "XRP Tip Bot",
    image: "tipbot_logo.svg",
    link: "https://www.xrptipbot.com"
  },
  {
    name: "Gatehub",
    image: "gatehub_logo.svg",
    link: "https://gatehub.net"
  },
  {
    name: "Stronghold",
    image: "stronghold_logo.svg",
    link: "https://stronghold.co"
  },
];

const providers = [
  {
    name: "Coil",
    image: "coil_logo.svg",
    link: "https://coil.com"
  },
];

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
  projectName: 'webmonetization.org',
  organizationName: 'interledger',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', href: '/docs', label: 'Docs' },
    { href: 'https://adrianhopebailie.github.io/web-monetization/', label: 'Specification' },
    { href: 'https://forum.interledger.org', label: 'Forum' },
    { href: 'https://github.com/interledger/webmonetization.org', label: 'GitHub' },
  ],

  // If you have users set above, you add it here:
  users,

  providers,
  wallets,

  /* path to images for header/footer */
  headerIcon: 'img/wm-icon.svg',
  footerIcon: 'img/webmon_icon_simple.svg',
  favicon: 'img/fav-webmonetization.png',

  /* Colors for website */
  colors: {
    primaryColor: '#0080FF',
    secondaryColor: '#282C34',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
 
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: ``,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-light',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
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
};

module.exports = siteConfig;
