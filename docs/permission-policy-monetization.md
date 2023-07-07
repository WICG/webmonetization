---
id: permission-policy-monetization
title: 'Permissions-Policy: monetization'
sidebar_label: monetization
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The HTTP [`Permissions-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy) header `monetization` directive controls whether the current document is allowed to use the [Web Monetization API](/docs/).

## Syntax

```html
Permissions-Policy: monetization=<allowlist>;
```

`<allowlist>`

A list of origins for which the feature is allowed. See [`Permissions-Policy`](/docs/permission-policy).

## Default policy

The default value is `'self'`.

## Specifications

<Specifications link="permissions-policy">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="monetization.json">Web Monetization API</BrowserCompat>
