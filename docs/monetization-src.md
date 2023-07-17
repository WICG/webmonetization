---
id: monetization-src
title: 'CSP: monetization-src'
sidebar_label: monetization-src
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP) `monetization-src` directive restricts the list of URLs from which a payment endpoint is loaded.

## Syntax

One or more sources may be allowed for the `monetization-src` policy:

```html
Content-Security-Policy: monetization-src
<source />
; Content-Security-Policy: monetization-src
<source />
,
<source />
;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

## Examples

### Violation cases

Given this CSP header:

```html
Content-Security-Policy: monetization-src https://www.example.com
```

The following monetization source will not load, as the url doesn't match the one defined in the Content-Security-Policy:

```html
<link rel="monetization" href="https://example.org/payment-pointer" />
```

## Specifications

<Specifications link="monetization-src-directive">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat dataFileName="monetization-src">Web Monetization API</BrowserCompat>
