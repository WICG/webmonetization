# Web Platform Incubator Community Group

This repository is being used for work in the W3C Web Platform Incubator Community Group, governed by the [W3C Community License
Agreement (CLA)](http://www.w3.org/community/about/agreements/cla/). To make substantive contributions,
you must join the CG.

If you are not the sole contributor to a contribution (pull request), please identify all
contributors in the pull request comment.

To add a contributor (other than yourself, that's automatic), mark them one per line as follows:

```
+@github_username
```

If you added a contributor by mistake, you can remove them in a comment with:

```
-@github_username
```

If you are making a pull request on behalf of someone else but you had no part in designing the
feature, you can remove yourself with the above syntax.

## ## Specification Development

If you are interested in actually making changes to the specification, please set up this repository on your local machine first. You can follow the [instructions on the README](./README.md#get-set-up).

The source file for the specification document is at [src/pages/specification/specification-respec.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/specification-respec.html). This is the raw ReSpec version that editors should make changes and updates to. Documentation of ReSpec can be accessed on the [ReSpec Wiki](https://github.com/w3c/respec/wiki/).

On your local machine, once the dev server is running, you can see all your updates to the specification at `localhost:1100/specification/specification-respec.html`. Once you're done with your changes, please generate new static HTML version of the specification by clicking the ReSpec button in the top-right corner.

Rename this file to index.html and replace previous the [src/pages/specification/index.html](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/index.html). In general, Community Group Draft Reports do not follow the same strict conventions as more mature specifications. As such, we will only archive a version of the specification for major updates.

For example, a copy of [version 1.0 of the specification](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in [src/pages/specification/versions/](https://github.com/WICG/webmonetization/tree/main/src/pages/specification/versions).
