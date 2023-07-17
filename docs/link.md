---
id: link
title: <link>
sidebar_label: <link>
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

To add Web Monetization to your page, you will need to add a `<link>` tag with a `rel='monetization'` indicating that some content on the page is monetized. While an HTML document can contain unlimited monetized `<link>` tags, implementations may restrict how many of those links are actually monetized.

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
```

### Monetization load events

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (event) => {
    // See how much your received and in what currency
    const { amount, assetCode, assetScale } = event
    console.log(`Received ${assetCode}${amount} (${assetScale}).`)
  })
</script>
```

## Specifications

<Specifications link="link-type-monetization">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat dataFileName="link">Web Monetization API</BrowserCompat>
