# Web Monetization

This repo is the code behind [webmonetization.org](https://webmonetization.org)

It is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.org).

You can view the [explainer](https://webmonetization.org/docs/explainer), or read
the proposed [spec](https://webmonetization.org/specification.html).

## Contribute

This website was created with [Docusaurus](https://v2.docusaurus.io/) and contributions are welcome as pull requests.

### Local Development

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ cd website
$ yarn
```

2. Run your dev server:

```sh
# Start the site
$ yarn start
```

### Directory Structure

Your project file structure should look something like this

```
webmonetization.org
    ├── CODE_OF_CONDUCT.md
    ├── CONTRIBUTING.md
    ├── Dockerfile
    ├── LICENSE
    ├── LICENSE.md
    ├── README.md
    ├── docker-compose.yml
    ├── docs
    │   ├── api.md
    │   ├── assets
    │   │   ├── flow.svg
    │   │   ├── gatehub-addwallet.gif
    │   │   ├── gatehub-exchangeorder.png
    │   │   ├── gatehub-findpointer.gif
    │   │   ├── gatehub.png
    │   │   ├── uphold
    │   │   ├── uphold.svg
    │   │   └── xrpmigration
    │   ├── counter.md
    │   ├── exclusive-content.md
    │   ├── explainer.md
    │   ├── gatehub.md
    │   ├── getting-started.md
    │   ├── glossary.md
    │   ├── ilp-wallets.md
    │   ├── probabilistic-rev-sharing.md
    │   ├── receiving.md
    │   ├── remove-ads.md
    │   ├── resources.md
    │   ├── sending.md
    │   ├── specification.md
    │   ├── start-stop.md
    │   ├── stronghold.md
    │   ├── uphold.md
    │   └── xrptipbot.md
    ├── docusaurus.config.js
    ├── i18n
    │   └── en.json
    ├── package.json
    ├── sidebars.json
    ├── src
    │   ├── page-support
    │   │   └── prob-revshare
    │   └── pages
    │       ├── docs.js
    │       ├── index.js
    │       ├── meta-tag.js
    │       └── prob-revshare.js
    ├── static
    │   ├── CNAME
    │   ├── css
    │   │   └── custom.css
    │   ├── img
    │   │   ├── 11ty_webmo_logo.png
    │   │   ├── angular_webmo_logo.svg
    │   │   ├── awesome_webmo_logo.svg
    │   │   ├── coil_logo.svg
    │   │   ├── copy_icon.svg
    │   │   ├── fav-webmonetization.png
    │   │   ├── favicon.ico
    │   │   ├── gatehub_logo.svg
    │   │   ├── gatsby_webmo_logo.svg
    │   │   ├── grey_wm_logo.svg
    │   │   ├── gridsome_webmo_logo.svg
    │   │   ├── hugo_webmo_logo.svg
    │   │   ├── puma-logo.svg
    │   │   ├── stronghold_logo.svg
    │   │   ├── svelte_webmo_logo.svg
    │   │   ├── tessy_webmo_logo.svg
    │   │   ├── tipbot_logo.svg
    │   │   ├── uphold-logo.svg
    │   │   ├── uphold_logo.svg
    │   │   ├── vuepress_webmo_logo.png
    │   │   ├── webmon_icon.svg
    │   │   ├── webmon_icon_simple.svg
    │   │   ├── wm-icon-animated.svg
    │   │   └── wm-icon.svg
    │   ├── js
    │   │   └── custom.js
    │   ├── service-worker.js
    │   └── specification.html
    ├── w3c.json
    ├── workers
    │   ├── README.md
    │   └── probabilistic-revshare
    │       ├── README.md
    │       ├── package.json
    │       ├── rollup.config.js
    │       ├── src
    │       ├── tsconfig.json
    │       ├── wrangler.toml
    │       └── yarn.lock
    └── yarn.lock
```

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click
[here](https://v2.docusaurus.io/docs/docs-introduction/)

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click
[here](https://v2.docusaurus.io/docs/docs-introduction/)

### Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the `themeConfig.navbar.links` field of `docusaurus.config.js`:

`docusaurus.config.js`

```javascript
module.exports = {
  // ...
  themeConfig: {
    navbar: {
      links: [
        {
          // Client-side routing, used for navigating within the website.
          // The baseUrl will be automatically prepended to this value.
          to: 'docs/introduction',
          // A full-page navigation, used for navigating outside of the website.
          // You should only use either `to` or `href`.
          href: 'https://www.facebook.com',
          // Prepends the baseUrl to href values.
          prependBaseUrlToHref: true,
          // The string to be shown.
          label: 'Introduction',
          // Left or right side of the navbar.
          position: 'left', // or 'right'
          // To apply the active class styling on all
          // routes starting with this path.
          // This usually isn't necessary
          activeBasePath: 'docs',
          // Alternative to activeBasePath if required.
          activeBaseRegex: 'docs/(next|v8)',
          // Custom CSS class (for styling any item).
          className: '',
        },
        // ... other links
      ],
    },
    // ...
  },
};
```

For more information about the navigation bar, click
[here](https://v2.docusaurus.io/docs/theme-bootstrap/#navbar)

### Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as
   .js files in `src/pages`:
1. If you want your page to show up in your navigation header, you will need to
   update the `themeConfig.navbar.links` field of `docusaurus.config.js` (see above).

`website/siteConfig.js`
```javascript
module.exports = {
  // ...
  themeConfig: {
    navbar: {
      links: [
        {
          to: 'my-new-custom-page',
          label: 'My New Custom Page',
          position: 'left', // or 'right'
        },
      ],
    },
  },
};
```

For more information about custom pages, click
[here](https://v2.docusaurus.io/docs/creating-pages/).

## Full Documentation

Full documentation can be found on the [website](https://v2.docusaurus.io/).
