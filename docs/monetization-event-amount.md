---
id: monetization-event-amount
title: MonetizationEvent.amount
sidebar_label: MonetizationEvent.amount
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`amount`** property of the [MonetizationEvent](monetization-event.md) interface returns the amount of money that was successfully received on the last payment.

## Value

An integer representing the amount of money received.

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

<Specifications link="amount-attribute">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="amount.json">Web Monetization API</BrowserCompat>
