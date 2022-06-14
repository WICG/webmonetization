---
id: csp
title: Content-Security-Policy
sidebar_label: Content-Security-Policy
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

Using the `Content-Security-Policy` response header, you can control the list of URLs to use as a payment end-point via the `monetization-src` directive. 

## Directives
### Fetch directives
[`monetization-src`](monetization-src.md) 

Restricts the URLs from which a payment end-point is loaded.

### Example
Given a page with the following Content Security Policy:

```javascript
Content-Security-Policy: monetization-src https://example.com/
```


Fetches for the following code will return network errors, as the URL provided does not match monetization-src's source list:

```html
<link rel="monetization" href="https://example.org/payment-pointer">
```


## Specifications
<Specifications link="content-security-policy">Web Monetization API</Specifications>

## Browser compatibility
<BrowserCompat data="csp.json">Web Monetization API</BrowserCompat>
