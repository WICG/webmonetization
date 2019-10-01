# WebMonetization.org 
[View live site](https://webmonetization.org)

This website was created with [Docusaurus](https://docusaurus.io/).

# Local Development

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

## Directory Structure

Your project file structure should look something like this

```
webmonetization.org/
├── docker-compose.yml
├── Dockerfile
├── docs/
│   ├── api.md
│   ├── assets
│   ├── explainer.md
│   ├── getting-started.md
│   ├── receiving.md
│   ├── sending.md
│   └── specification.md
├── explainer.md
├── LICENSE
├── README.md
└── website/
    ├── blog
    ├── build
    ├── core
    ├── i18n
    ├── node_modules
    ├── package.json
    ├── pages
    ├── sidebars.json
    ├── siteConfig.js
    ├── static
    └── yarn.lock
```

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

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

For more information about adding new docs, click [here](https://docusaurus.io/docs/en/navigation)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://docusaurus.io/docs/en/navigation)

## Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

# Full Documentation

Full documentation can be found on the [website](https://docusaurus.io/).
