---
id: monetization-event-asset-scale
title: MonetizationEvent.assetScale
sidebar_label: MonetizationEvent.assetScale
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

:::danger Caution

The assetScale property is deprecated. Please consider using the [**amountSent**](monetization-event-amountSent.md) property of the MonetizationEvent interface instead.

:::

The **`assetScale`** property of the [MonetizationEvent](monetization-event.md) interface returns the scale of the paid amount.

## Value

An integer that represents the scale on the amount of money received in the last payment.

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

<Specifications link="assetscale-attribute">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="assetScale.json">Web Monetization API</BrowserCompat>
