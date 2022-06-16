---
id: permission-policy
title: Permissions-Policy
sidebar_label: Permissions-Policy
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The [`Permissions-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy) header defines whether particular browser functions, such as Web Monetization, in this case, are allowed within its own frame or within any `iframe` elements in the document.  

The basic syntax is as follows: 

```html
Permissions-Policy: <directive> <allowlist>
```

`<directive>` is the function that is enabled for a given `<allowlist>`, which is a list of origins.  The default `<allowlist>` is `'self'`, which allows monetization in the document and in all nested browsing contexts(iframes) in the same origin.  


## Directives

[`monetization`](/docs/permission-policy-monetization)

Controls whether the current document is allowed to use the [Web Monetization API](/docs/).  

## Example

```html
Permissions-Policy: monetization 'self'
```

## Specifications
<Specifications link="permissions-policy">Web Monetization API</Specifications>

## Browser compatibility
<BrowserCompat data="permissionpolicy.json">Web Monetization API</BrowserCompat>