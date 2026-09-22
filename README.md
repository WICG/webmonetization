# Web Monetization

This is the source code for the website hosted at [webmonetization.org](https://webmonetization.org).

The website is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.io/).

You can read the [docs](https://webmonetization.org/docs/), or read the proposed [specification](https://webmonetization.org/specification).

## Contribute

The Web Monetization website is built with [Starlight](https://starlight.astro.build/), a documentation framework based on [Astro](https://astro.build/).

- [Get Set Up](#get-set-up)
- [Content](#content)
- [Reviews and Approvals](#reviews-and-approvals)

## Specification Development

Please refer to the [CONTRIBUTING.md](./CONTRIBUTING.md#specification-development).

## Get Set Up

We use [Bun](https://bun.sh/) in this repository, but you could theoretically use the package manager of your choice.

### Install Bun

```sh
curl -fsSL https://bun.sh/install | bash
```

### Install dependencies

```sh
cd webmonetization
bun install
```

### Other commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `bun run start`           | Starts local dev server at `localhost:1100`                |
| `bun run build`           | Build your production site to `./dist/`                    |
| `bun run preview`         | Preview your build locally before deploying                |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check`           |
| `bun run astro -- --help` | Get help using the Astro CLI                               |
| `bun run lint`            | Check code formatting and quality with Prettier and ESLint |
| `bun run format`          | Format code and fix linting issues automatically           |

You can substitute the bun commands with your chosen package manager's commands.

## Content

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

⭐ We recommend using the `.mdx` extension whenever possible.

### Editing content

- [Static image assets](#static-image-assets)
- [Components](#components)
- [Edit existing doc](#edit-existing-doc)
- [Add a new doc](#add-a-new-doc)
- [Add a custom page](#add-a-custom-page)

#### Static image assets

Static image assets should be placed in the `public/img/docs` directory. When referencing these assets in the Markdown, don't include `public/` in the file path. For example:

```md
![A lovely description of your beautiful image](/img/your-beautiful-image.png)
```

⭐ Make your image accessible by including helpful alt text that describes the image. <br>
⭐ Ensure your file name is descriptive. A file name of `img01.png` isn't helpful. <br>
⭐ Use hyphens instead of underscores in file names to keep our naming conventions consistent.

#### Edit existing doc

Navigate to `/src/content/docs` and locate the page you want to edit. For example:

`/src/content/docs/RELEVANT_FOLDER/doc-to-be-edited.mdx`

```markdown
---
title: This Doc Needs To Be Edited
---

Edit me...
```

Refer to the Starlight documentation on [authoring content](https://starlight.astro.build/guides/authoring-content/) for more detailed guidance.

#### Add a new doc

Create your Markdown file in in `/src/content/docs/RELEVANT_FOLDER`. For example, within `/src/content/docs/RELEVANT_FOLDER/newly-created-doc.mdx`.

⭐ We recommend using the `.mdx` extension whenever possible.

If you need help with authoring content, we suggest you refer to the [Starlight documentation](https://starlight.astro.build/guides/authoring-content/) for more detailed guidance.

Be sure to add your new doc to the sidebar! The sidebar is configured in `astro.config.mjs`. Refer to the Starlight documentation on [sidebar configuration](https://starlight.astro.build/reference/configuration/#sidebar) for more information.

#### Add a custom page

Astro is a content-focused web framework that integrates with a lot of existing framework libraries, making it relatively flexible for building customised sites.

Custom pages exist in the `/src/pages` directory, and out-of-the-box come with absolutely nothing. For the Web Monetization website, we have created custom layout components that form the frame of a basic HTML web page, and allow you to add content that would populate the `main` element of the page via a concept known as [slots](https://docs.astro.build/en/basics/astro-components/#slots). A `<slot />` allows you to specify where individual page content should be injected.

```jsx
---
import i18next, { t, changeLanguage } from "i18next";
import Base from '../layouts/Base.astro';
---
<Base>
  /* Page content goes here */
</Base>
```

Refer to the Astro documentation on [pages](https://docs.astro.build/en/basics/astro-pages/) for additional details.

## Reviews and Approvals

After a PR is submitted, it will be reviewed by a member of the Web Incubator Community Group (WICG). Ensure you're able to receive GitHub notifications so you'll know when the PR is approved and can be merged or if updates are required before approval is given.

## Web Monetization Community Call

Our catch-up calls are open to our community. We have them every fourth Thursday at 14:00 GMT, via Google Meet.

To join the video meeting, click this link: https://meet.google.com/fjy-vjef-ogj
Otherwise, to join by phone, dial +49 30 300195060 and enter this PIN: 982 511 322 1488#
To view more phone numbers, click this link: https://tel.meet/fjy-vjef-ogj?hs=5

Video call link: https://meet.google.com/fjy-vjef-ogj

More phone numbers: https://tel.meet/fjy-vjef-ogj?hs=5

[Add to Google Calendar](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=c2dyMjY4M2k1dXRrcjZkYW05Mmo3c2xzZm1fMjAyNDA1MDlUMTMwMDAwWiBjX2NqMDI3Z21oc3VqazkxZXZpMjRkOXB2bXQ0QGc&tmsrc=c_cj027gmhsujk91evi24d9pvmt4%40group.calendar.google.com&scp=ALL)
