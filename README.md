# Web Monetization

This repo is the code behind [webmonetization.org](https://webmonetization.org)

It is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.io/).

You can read the [docs](https://webmonetization.org/docs/r), or read the proposed [spec](https://webmonetization.org/specification).

## Contribute

This website is built with [Starlight](https://starlight.astro.build/), a documentation framework based on [Astro](https://astro.build/).

### Local Development

We are using [Bun](https://bun.sh/) in this repository, but you could theoretically use the package manager of your choice. To install Bun, run

```sh
curl -fsSL https://bun.sh/install | bash
```

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
cd webmonetization
bun install
```

2. Run your dev server:

```sh
# Start the site
bun run start
```

3. Build the site:

```sh
# Build the site into the .dist folder
bun run build
```

## Specification Development

The source file for the specification document is at [src/pages/specification/specification-respec.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/specification-respec.html). This is the raw ReSpec version that editors should make changes and updates to. Documentation of ReSpec can be accessed on the [ReSpec Wiki](https://github.com/w3c/respec/wiki/).

On your local machine, once the dev server is running, you can see all your updates to the specification at `localhost:3000/specification-respec.html`. Once you're done with your changes, please generate new static HTML version of the specification by clicking the ReSpec button in the top-right corner.

Rename this file to index.html and replace previous the [src/pages/specification/index.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/index.html). In general, Community Group Draft Reports do not follow the same strict conventions as more mature specifications. As such, we will only archive a version of the specification for major updates.

For example, a copy of [version 1.0 of the specification](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in [src/pages/specification/versions/](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions).

## Editing Content

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name. 

### Double docs sub-folder

Our documentation uses a sub-folder URL style of https://webmonetization.org/docs for the doc section. This means we have a double `docs` folder situation due to how Starlight deals with content and generated URLs (`src/content/docs/docs`).

The `docs.mdx` file in the root of the `content/docs` folder is essentially the landing page for our documentation and is what users see when they land on https://webmonetization.org/docs.

### Static assets

Static assets, like favicons or images, can be placed in the `public/` directory. When referencing these assets in your markdown, you do not have to include `public/` in the file path, so an image would have a path like:

```md
![A lovely description of your beautiful image](/img/YOUR_BEAUTIFUL_IMAGE.png)
```

### Editing an existing docs page

Edit docs by navigating to `/src/content/docs/docs` and editing the corresponding document:

`/src/content/docs/docs/RELEVANT_FOLDER/doc-to-be-edited.mdx`

```markdown
---
title: This Doc Needs To Be Edited
---

Edit me...
```

Refer to the Starlight documentation on [authoring content](https://starlight.astro.build/guides/authoring-content/) for more detailed guidance.

### Docs components

We have extracted some of the commonly repeated patterns within the documentation pages into custom docs components that can be reused. There are components which are shared across all our Starlight documentation sites and those which are specific to this project only. This will determine what the import path is.

- CodeBlock (Shared)
- Disclosure (Shared)
- Hidden (Shared)
- LargeImg (Shared)
- LinkOut (Shared)
- MermaidWrapper (Shared)
- StylishHeader (Shared)
- Tooltip (Shared)

- [BrowserCompat](#browsercompat-component) (Webmon-specific)
- [Specification](#specification-component) (Webmon-specific)

For the shared components, if you are using both `CodeBlock` and `Disclosure` on the same page, you can import them both like so:

```jsx
import { CodeBlock, Disclosure } from '@interledger/docs-design-system'
```

For more information about importing things in Javascript, please refer to [import on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

The available shared components are documented at our [documentation style guide](https://interledger.tech).

1. #### `BrowserCompat` component

   This component will generate a compatibility table based on the browser compatibility data passed into it. The key is to pass the component the correct data. All our browser compatibility data files can be found in `/src/data/browser-compat-data`. our docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue.

   Import the component and the relevant data file like so:

   ```jsx
   import BrowserCompat from '/src/components/docs/BrowserCompat'
   import data from '/src/data/browser-compat-data/monetization.json' /* this is the key */
   ```

   Use the `<BrowserCompat>` component in your docs page where relevant under a "Browser compatibility" heading like so:

   ```jsx
   ## Browser compatibility

   <BrowserCompat json={data} />
   ```

1. #### `Specification` component

   This component will display a link to the relevant section of the [Web Monetization specification] (https://webmonetization.org/specification/) in a table. To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue.

   Import the `Specification` component like so:

   ```jsx
   import Specification from '/src/components/docs/Specification'
   ```

   Use the `<Specification>` component on your docs page where relevant under a "Specifications" heading like so:

   ```jsx
   ## Specifications

   <Specification anchor='link-type-monetization' />
   ```

   This component takes in an optional `anchor` prop which allows you to specify a particular section of the specification that is relevant to that individual docs page. If no `anchor` prop is provided, it will default to the specification itself.

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/src/content/docs/docs/RELEVANT_FOLDER`, example
   `/src/content/docs/docs/RELEVANT_FOLDER/newly-created-doc.md`:

```md
---
title: This Doc Needs To Be Written
---

My new content here..
```

The sidebar of the documentation site is configured in the `astro.config.mjs`. Refer to the Starlight documentation on [sidebar configuration](https://starlight.astro.build/reference/configuration/#sidebar) for more detailed guidance.

### Adding custom pages

Astro is a content-focused web framework that integrates with a lot of existing framework libraries, making it relatively flexible for building customised sites.

Pages exist in the `/src/pages` directory, and out-of-the-box come with absolutely nothing. For the web monetization website, we have created custom layout components that form the frame of a basic HTML web page, and allow you to add content that would populate the `main` element of the page via a concept known as [slots](https://docs.astro.build/en/core-concepts/astro-components/#slots). A `<slot />` allows you to specify where individual page content should be injected.

```jsx
---
import i18next, { t, changeLanguage } from "i18next";
import Base from '../layouts/Base.astro';
---
<Base>
  /* Page content goes here */
</Base>
```

Refer to the Astro documentation on [pages](https://docs.astro.build/en/core-concepts/astro-pages/) for more detailed guidance.

### Adding translated content

Starlight supports [Internationalization (i18n)](https://starlight.astro.build/guides/i18n/) out-of-the-box. Our documentation sites follow the root locale pattern documented at https://starlight.astro.build/guides/i18n/#use-a-root-locale. If you wish to contribute to a language that has not been configured, you will have to edit the astro.config.mjs to add the language to the `locales` options.

The translated content should be in their respective language folder within `/src/content/docs/LANG_CODE`. The file path should follow its corresponding source English path exactly. Once a new language is "activated" translated content should be accessible via the language select in the header.

If a English source page does not have corresponding translations in the selected language, a note will appear at the top of the page informing the user that the page has not been translated yet.
