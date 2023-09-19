# Web Monetization

This repo is the code behind [webmonetization.org](https://webmonetization.org)

It is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.org).

You can view the [explainer](https://webmonetization.org/docs/explainer), or read
the proposed [spec](https://webmonetization.org/specification).

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

We have extracted some of the commonly repeated patterns within the documentation pages into custom docs components that can be reused. There are components which are shared across all our Starlight documentation sites and those which are specific to Web Monetization only. This will determine what the import path is.

- [CodeBlock](#codeblock-component) (Shared)
- [Disclosure](#disclosure-component) (Shared)
- [Hidden](#hidden-component) (Shared)
- [LargeImg](#largeimg-component) (Shared)
- [LinkOut](#linkout-component) (Shared)
- [MermaidWrapper](#mermaidwrapper-component) (Shared)
- [StylishHeader](#stylishheader-component) (Shared)
- [Tooltip](#tooltip-component) (Shared)

- [BrowserCompat](#browsercompat-component) (Webmon-specific)
- [Specification](#specification-component) (Webmon-specific)

For more information about importing things in Javascript, please refer to [import on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

1. #### `CodeBlock` component

   Use this component if you wish to add a title to your code block. It takes a `title` attribute, which will be displayed above the code. To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `CodeBlock` component like so:

   ```jsx
   import { CodeBlock } from '@interledger/docs-design-system'
   ```

   Use the `<CodeBlock>` component within your content like so:

   ````
   <CodeBlock title="Response">

   ```http
   {
      "id":"https://wallet.example/alice/incoming-payments/08394f02-7b7b-45e2-b645-51d04e7c330c",
      "paymentPointer":"https://wallet.example/alice",
      "receivedAmount": {
         "value":"0",
         "assetCode":"USD",
         "assetScale":2
      },
      "completed":false,
      "createdAt":"2022-03-12T23:20:50.52Z",
      "updatedAt":"2022-03-12T23:20:50.52Z",
   }
   ```

   </CodeBlock>
   ````

1. #### `Disclosure` component

   Use this component if you have some content that you want to show/hide via a collapsible container. This component wraps around whatever content you wish to have this expand/collapse behaviour. Note that the `client:load` attribute is required for the functionality to work because this component relies on state.

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `Disclosure` component like so:

   ```jsx
   import { Disclosure } from '@interledger/docs-design-system'
   ```

   Use the `<Disclosure>` component within your content like so:

   ```jsx
   <Disclosure toggleText='Show code snippets' client:load>
      <!-- Your content, can be markup or markdown -->
   </Disclosure>
   ```

   For the specific use-case of displaying multiple code-snippets, it might be worth considering also using the [built-in Starlight `<Tabs>`](https://starlight.astro.build/guides/components#tabs) component:

   ````jsx
   <Disclosure toggleText='Show code snippets' client:load>
      <Tabs>
         <TabItem label='Request'>
         ```bash
         GET /alice HTTP/1.1
         Accept: application/json
         Host: wallet.example
         ```
         </TabItem>
         <TabItem label='Response'>
         ```bash
         HTTP/1.1 200 Success
         Content-Type: application/json

         {
            "id":"https://wallet.example/alice",
            "assetCode":"USD",
            "assetScale":2,
            "authServer":"https://wallet.example/auth",
         }
         ```
         </TabItem>

      </Tabs>
   </Disclosure>
   ````

1. #### `Hidden` component

   Use this component to hide content that is temporarily not ready to be shown to the public. This is not meant for long-term use, but a stop-gap when the current implementation is still far away from our documentation/specifications, and the content we have will be relevant but in the future.

   ```jsx
   import { Hidden } from '@interledger/docs-design-system'
   ```

   Unfortunately, due to the nature of how the ToC on the right is generated, if we want to hide an entire section (including the header), we will have to manually hide the section heading by either commenting it out or deleting it.

1. #### `LargeImg` component

   Use this component if you have a diagram or image that is much larger than our available space and you would like users to view the full image in another tab. This adds a link to "View full image" with an external link indicator on the bottom right corner under the image. It takes in a `src` and `alt`, just like a normal `img` element.

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `LargeImg` component like so:

   ```jsx
   import { LargeImg } from '@interledger/docs-design-system'
   ```

   Use the `<LargeImg>` component within your content like so:

   ```jsx
   <LargeImg src='/img/OMG_A_GIGANTIC_IMG.png' alt='A really large diagram' />
   ```

   By default, there will be a border around the image, but if you want to remove the border, pass in a `hasBorder={false}` attribute.

   ```jsx
   <LargeImg src='/img/OMG_A_GIGANTIC_IMG.png' alt='A really large diagram' hasBorder={false} />
   ```

   For user doc diagrams, be sure to include the `docs` folder in the path.

   ```jsx
   <LargeImg src='/img/docs/OMG_A_GIGANTIC_IMG.png' alt='A really large diagram' />
   ```

1. #### `LinkOut` component

   Use this component if you need to add an external link to your content that opens in a new tab. This component adds the necessary attributes for external links and adds an external link indicator icon to the end of the link content. The icon can be turned off, if necessary.

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `LinkOut` component like so:

   ```jsx
   import { LinkOut } from '@interledger/docs-design-system'
   ```

   Use the `<LinkOut>` component within your content like so:

   ```jsx
   <LinkOut href='https://openpayments.guide/'>OpenPayments API</LinkOut>
   ```

   If you do not want the external link icon to appear, you can set the `withIcon` prop to `false` like so:

   ```jsx
   <LinkOut href='https://openpayments.guide/' withIcon={false}>
     OpenPayments API
   </LinkOut>
   ```

1. #### `MermaidWrapper` component

   Use this component if your Mermaid diagram is much larger than our available space and you would like users to view the full diagram in another tab. This adds "View full diagram" button with an external link indicator on the bottom right corner under the diagram. Note that the `client:load` attribute is required for the functionality to work because this component relies on state.

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `MermaidWrapper` component like so:

   ```jsx
   import { MermaidWrapper } from '@interledger/docs-design-system'
   ```

   Use the `<MermaidWrapper>` component within your content like so:

   ````jsx
   <MermaidWrapper client:load>
     ```mermaid sequenceDiagram Alice ->> Bob: Hello Bob, how are you? Bob-->>John: How about you John? Bob--x Alice: I am good thanks! Bob-x John: I am good thanks! Note right of John: Bob thinks a long
     <br />
     long time, so long
     <br />
     that the text does
     <br />
     not fit on a row. Bob-->Alice: Checking with John... Alice->John: Yes... John, how are you? ```
   </MermaidWrapper>
   ````

   By default, there will be a border around the image, but if you want to remove the border, pass in a `hasBorder={false}` attribute.

   ````jsx
   <MermaidWrapper client:load hasBorder={false}>
     ```mermaid sequenceDiagram Alice ->> Bob: Hello Bob, how are you? Bob-->>John: How about you John? Bob--x Alice: I am good thanks! Bob-x John: I am good thanks! Note right of John: Bob thinks a long
     <br />
     long time, so long
     <br />
     that the text does
     <br />
     not fit on a row. Bob-->Alice: Checking with John... Alice->John: Yes... John, how are you? ```
   </MermaidWrapper>
   ````

1. #### `StylishHeader` component

   Use this component if you wish to create a stylized heading that does not use the heading elements such that it will not appear in the ToC right sidebar. To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `StylishHeader` component like so:

   ```jsx
   import { StylishHeader } from '@interledger/docs-design-system'
   ```

   Use the `<StylishHeader>` component within your content like so:

   ```jsx
   <StylishHeader>Wow I'm a stylish header</StylishHeader>
   ```

1. #### `Tooltip` component

   Use the tooltip component for adding a short explanation to specific terms. This component is built to be accessible in accordance to the guidance from [WAI Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/). Note that the `client:load` attribute is required for the functionality to work because this component relies on state.

   To use it, your docs page must be in `.mdx` format. Please change the format from `.md` to `.mdx` if necessary. All your existing markdown will still be supported without issue. Import the `Tooltip` component like so:

   ```jsx
   import { Tooltip } from '@interledger/docs-design-system'
   ```

   Use the `<Tooltip>` component within your content like so:

   ```jsx
   <Tooltip content='THIS CONTENT IS DISPLAYED IN THE TOOLTIP UPON INTERACTION' client:load><span>text that you are trying to explain</span></Tooltip>.
   ```

   If the text you are trying to explain is also a link to somewhere else, please put the link within the `<Tooltip>` like so:

   ```jsx
   <Tooltip content='THIS CONTENT IS DISPLAYED IN THE TOOLTIP UPON INTERACTION' client:load><a href="/URL">text that you are trying to explain</a></Tooltip>.
   ```

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
