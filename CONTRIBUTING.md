# Contributing to this repository 

Thank you for contributing to the Web Monetization specification :tada: Your contributions help shape emerging web standards.

## Before you begin

- Have you read the [Code of Conduct](https://www.w3.org/policies/code-of-conduct/)?
- Join the Community Group and agree to the [W3C Community Contributor License Agreement (CLA)](http://www.w3.org/community/about/agreements/cla/)
- Check out the [existing issues](https://github.com/WICG/webmonetization/issues) and see if we [accept contributions](#types-of-contributions) for your type of issue

## Table of Contents <!-- omit in toc -->

- [Types of contributions](#types-of-contributions)
  - [:mega: Discussions](#mega-discussions)
  - [:rocket: Proposals & Feature Requests](#rocket-proposals--feature-requests)
  - [:beetle: Issues](#beetle-issues)
  - [:hammer_and_wrench: Pull requests](#hammer_and_wrench-pull-requests)
- [Working in this repository](#working-in-this-repository)
  - [Specification development](#specification-development)
  - [Previewing changes](#previewing-changes)
  - [Related specifications](#related-specifications)
  - [Formatting](#formatting)
  - [Versioning](#versioning)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Review Process](#review-process)

---

## Types of contributions

You can contribute to the Web Monetization specification in several ways.

### :mega: Discussions

Discussions are where we have conversations about the specification and the broader ecosystem.

If you have questions, new ideas, or want to explore something before opening an issue — [join the discussion](https://github.com/WICG/webmonetization/discussions).

### :rocket: Proposals & feature requests

If you have an idea for improving the specification or introducing new functionality, open an issue describing your proposal. Please search existing issues first to avoid duplicates, and be clear about the problem you're solving and why it matters.

Early feedback is encouraged before jumping into implementation.

### :beetle: Issues

We use GitHub issues to track bugs, inconsistencies, or gaps in the specification. If you've found something that needs fixing, search open issues to see if someone else has reported the same thing. If it's new, open an issue — we'll use it to discuss the problem before any work begins.

When reporting an issue, please include:

- A clear and descriptive title
- A detailed description of the problem
- Links to relevant sections of the specification
- Context or examples where possible

### :hammer_and_wrench: Pull requests

Feel free to fork the repository and create a pull request for changes you think you can contribute — whether small fixes or larger spec changes.

The team will review your pull request as soon as possible.

---

## Working in this repository

### Specification development

The main specification source lives at [`specification/index.html`](./specification/index.html). This file uses [ReSpec](https://respec.org/docs/), the standard tool for authoring W3C specifications.

You don't need a full development setup to contribute to the spec.

### Previewing changes

To preview your changes locally:

```bash
npx serve ./specification/
```

Then open `http://localhost:3000/index.html`. Any static file server works if you prefer a different setup.

### Related specifications

This repository also includes:

- Web Monetization flows → `specification/flows/`
- Browser extension API → `specification/extensions-api/`

### Formatting

Prettier is disabled for files under `specification/*`. W3C specifications follow a formatting style that conflicts with Prettier (for example, void elements without trailing slashes), and there is currently no clean way to align the two.

### Versioning

This is a Community Group Draft, so iteration is expected. We only snapshot major versions of the specification — for example, the [2021-03-17 draft](./specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in `specification/versions/`.

---

## Submitting Pull Requests

1. [Fork](https://github.com/WICG/webmonetization) the repository
2. Create a new branch from `main`
3. Make your changes and commit them
4. Open a pull request to `main` with a clear title and description
5. If your PR addresses an existing issue, reference it using `Closes #123`
6. Be prepared to address feedback and make changes if needed

**Contributor attribution (W3C requirement)**

To add a contributor (other than yourself, that's automatic), mark them one per line as follows:

```
+@github_username
```

If you added a contributor by mistake, you can remove them in a comment with:

```
-@github_username
```

If you are submitting on behalf of someone else and didn't contribute directly, you can remove yourself using the same syntax.

---

## Review Process

- Maintainers will review your PR for clarity, correctness, and alignment with the specification
- Please respond to feedback promptly and make any necessary changes
- Once approved, your changes will be merged into the main branch

Thank you for contributing to Web Monetization! Join the conversation on [Slack](https://communityinviter.com/apps/interledger/interledger-working-groups-slack) to connect with other contributors and stay up to date on developments.
