---
id: permission-policy
title: Permissions-Policy
sidebar_label: Permissions-Policy
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The `Permissions-Policy` header defines whether particular browser functions, such as Web Monetization in this case, are allowed within its own frame or within any `iframe` elements in the document.  

The basic syntax is as follows: 

`Permissions-Policy: <directive> <allowlist>`

where `<directive>` is the function that is enabled for a given `<allowlist>`, which is a list of origins.  The default `<allowlist>` is `'self'`, which allows monetization in the document and in all nested browsing contexts(iframes) in the same origin.  


## Directives

`monetization` 

Determines whether link elements within the document are monetized.  

## Example

```html
Permissions-Policy: monetization 'self'
```

## Specifications
<Specifications link="permissions-policy">Web Monetization API</Specifications>

## Browser compatibility
<BrowserCompat data="permissionpolicy.json">Web Monetization API</BrowserCompat>