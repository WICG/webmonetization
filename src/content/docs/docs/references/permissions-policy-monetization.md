---
title: 'Permissions Policy'
---

<div class="draft"><div class="title">Page Updates</div><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Verify example</li><li>Clarify "note", it's kind of confusing</li></ul></div>

The `monetization` directive within the HTTP <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy" target="_blank">Permissions-Policy</a> header controls whether the current document and any nesting browsing contexts (iframes) are allowed to use the Web Monetization API.

## Syntax

The basic syntax is as follows, where `allowlist` is a list of origins permitted to use Web Monetization.

```http
Permissions-Policy: monetization=(allowlist)
```

The default policy for `monetization` is `self`, which allows Web Monetization in the document and in all nested browsing contexts (iframes) in the same origin.

```http
Permissions-Policy: monetization=(self)
```

:::note
The `allowlist` attributes only take effect when the content navigable of the iframe is navigated. Adding or removing the monetization attribute has no effect on an already-loaded document.
:::

## Example

A web developer wants to disable the Web Monetization API within all browsing context except for its own origin. 

It can do so by delivering the following HTTP response header to define a Permissions Policy:

```http
Permissions-Policy: monetization=(self)
```