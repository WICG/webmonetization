---
id: monetization-event-asset-code
title: MonetizationEvent.assetCode
sidebar_label: MonetizationEvent.assetCode
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`assetCode`** property of the [MonetizationEvent](monetization-event.md) interface returns the currency code of the last payment received.

## Value

A string representing the three-character currency code.

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (event) => {
    // See how much your received and in what currency
    const { amount, assetCode, assetScale } = event
    console.log(`Browser sent ${assetCode}${amount / Math.pow(10, assetScale)}.`)
  })
</script>
```

## Specifications

<Specifications link="assetcode-attribute">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="assetCode.json">Web Monetization API</BrowserCompat>
