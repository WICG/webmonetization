# Web Monetization

This repo is the code behind [webmonetization.org](https://webmonetization.org)

It is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.org).

You can view the [explainer](https://webmonetization.org/docs/explainer), or read
the proposed [spec](https://webmonetization.org/specification).

## Contribute

This website is built with [Starlight](https://starlight.astro.build/), a documentation framework based on [Astro](https://astro.build/).

### Local Development

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ cd webmonetization
$ yarn
```

2. Run your dev server:

```sh
# Start the site
$ yarn start
```

## Specification Development

The source file for the specification document is at [src/pages/specification/specification-respec.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/specification-respec.html). This is the raw ReSpec version that editors should make changes and updates to. Documentation of ReSpec can be accessed on the [ReSpec Wiki](https://github.com/w3c/respec/wiki/).

On your local machine, once the dev server is running, you can see all your updates to the specification at `localhost:3000/specification-respec.html`. Once you're done with your changes, please generate new static HTML version of the specification by clicking the ReSpec button in the top-right corner.

Rename this file to index.html and replace previous the [src/pages/specification/index.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/index.html). In general, Community Group Draft Reports do not follow the same strict conventions as more mature specifications. As such, we will only archive a version of the specification for major updates.

For example, a copy of [version 1.0 of the specification](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in [src/pages/specification/versions/](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions).

## Editing Content

Due to the nature of how Starlight deals with content and their generated URLs, for our documentation which wants to use a sub-folder URL style of https://webmonetization.org/docs for the documentation section, we have a double `docs` folder situation.

The `docs.mdx` file in the root of the `content/docs` folder is essentially the landing page for our documentation and is what users see when they land on https://webmonetization.org/docs.

### Editing an existing docs page

Edit docs by navigating to `/src/content/docs/docs` and editing the corresponding document:

`/src/content/docs/docs/RELEVANT_FOLDER/doc-to-be-edited.md`

```markdown
---
title: This Doc Needs To Be Edited
---

Edit me...
```

Refer to the Starlight documentation on [authoring content](https://starlight.astro.build/guides/authoring-content/) for more detailed guidance.

### Docs components

We have extracted some of the commonly repeated patterns within the documentation pages into custom docs components that can be reused.

1. Specification component

_WIP to be updated_

2. BrowserCompat component

_WIP to be updated_

3. Tooltip component

   Use the tooltip component for adding a short explanation to specific terms. This component is built to be accessible in accordance to the guidance from [WAI Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the Tooltip component like so:

   ```
   import Tooltip from '/src/components/docs/Tooltip'
   ```

   Use the `<Tooltip>` component within your content like so:

   ```
   <Tooltip content='THIS CONTENT IS DISPLAYED IN THE TOOLTIP UPON INTERACTION' client:load><span>text that you are trying to explain</span></Tooltip>.
   ```

   If the text you are trying to explain is also a link to somewhere else, please put the link within the `<Tooltip>` like so:

   ```
   <Tooltip content='THIS CONTENT IS DISPLAYED IN THE TOOLTIP UPON INTERACTION' client:load><a href="/URL">text that you are trying to explain</a></Tooltip>.
   ```

4. Hidden component

   Use this component to hide content that is temporarily not ready to be shown to the public. This is not meant for long-term use, but a stop-gap when the current implementation is still far away from our documentation/specifications, and the content we have will be relevant but in the future.

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

The sidebar of the documentation site is configured in the `astro.config.mjs`.

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

Refer to the Starlight documentation on [sidebar configuration](https://starlight.astro.build/reference/configuration/#sidebar/) for more detailed guidance.

### Adding custom pages

Astro is a content-focused web framework that integrates with a lot of existing framework libraries, making it relatively flexible for building customised sites.

Pages exist in the `/src/pages` directory, and out-of-the-box come with absolutely nothing. For the web monetization website, we have created custom layout components that form the frame of a basic HTML web page, and allow you to add content that would populate the `main` element of the page via a concept known as [slots](https://docs.astro.build/en/core-concepts/astro-components/#slots). A `<slot />` allows you to specify where individual page content should be injected.

```
---
import i18next, { t, changeLanguage } from "i18next";
import Base from '../layouts/Base.astro';
---
<Base>
  /* Page content goes here */
</Base>

```

Refer to the Astro documentation on [pages](https://docs.astro.build/en/core-concepts/astro-pages/) for more detailed guidance.
