# Web Platform Incubator Community Group

This repository is being used for work in the W3C Web Platform Incubator Community Group, governed by the [W3C Community License
Agreement (CLA)](http://www.w3.org/community/about/agreements/cla/). To make substantive contributions, you must join the CG.

If you are not the sole contributor to a contribution (pull request), please identify all contributors in the pull request comment.

To add a contributor (other than yourself, that's automatic), mark them one per line as follows:

```
+@github_username
```

If you added a contributor by mistake, you can remove them in a comment with:

```
-@github_username
```

If you are making a pull request on behalf of someone else but you had no part in designing the feature, you can remove yourself with the above syntax.

## Specification Development

If you are interested in making changes to the specification, set up this repository on your local machine first. You can follow the [instructions on the README](./README.md#get-set-up), but you don't necessarily need to install dependencies or set up an environment if you want to work on the specification only (and not rest of the website).

The source file for the specification document is at [specification/index.html](./specification/index.html). This is the raw ReSpec version that editors should make changes to. Documentation for ReSpec can be accessed on the [respec.org](https://respec.org/docs/).

Preview changes with `npx serve ./specification/` (or [any other static HTTP file server](https://gist.github.com/willurd/5720255)) and opening http://localhost:3000/index.html .

Similar to the main specification, there are also [WM flows](./specification/flows/) and [browser extension API](./specification/extensions-api/) implementation specifications.

In general, Community Group Draft Reports do not follow the same strict conventions as more mature specifications. We only archive major versions of the specification. For example, a copy of the [2021-03-17 draft report](./specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in [specification/versions/](./specification/versions).

Prettier is disabled on `specification/*` as it conflicts with the code format style used by W3C specifications. There is [no way](https://github.com/prettier/prettier/issues/5246) to configure Prettier to follow the [W3C recommendation](https://github.com/validator/validator/wiki/Markup-%C2%BB-Void-elements) of not using trailing slashes on void elements.
