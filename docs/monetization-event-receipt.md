---
id: monetization-event-receipt
title: MonetizationEvent.receipt
sidebar_label: MonetizationEvent.receipt
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`receipt`** property of the [Monetization Event](monetization-event.md) interface returns an optional proof-of-payment receipt. It is issued by the monetization receiver for the monetization provider as proof of the total current amount received in the stream.

## Value

A base64-encoded STREAM Receipt. Returns `null` if receipts are not enabled on the payment pointer. The receipt has the total running amount streamed in the current session.

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  const link = document.querySelector(“link[rel=‘monetization’]“);
  link.addEventListener(“monetization”, (event) => {
  console.log(typeof(event.paymentPointer))})
</script>
```

## Specifications

<Specifications link="receipt-attribute">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="receipt.json">Web Monetization API</BrowserCompat>
