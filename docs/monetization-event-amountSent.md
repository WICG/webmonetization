---
id: monetization-event-amountSent
title: MonetizationEvent.amountSent
sidebar_label: MonetizationEvent.amountSent
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`amountSent`** attribute of the [MonetizationEvent](monetization-event.md) interface returns the amount and currency code of the money that was successfully sent in the last payment.

## Value

A dictionary with the same data structure as the [PaymentCurrencyAmount](https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount) dictionary of the [Payment Request API](https://www.w3.org/TR/payment-request/).

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (event) => {
    // See how much was sent and in what currency
    const {
      amountSent: { value, currency },
    } = event
    console.log(`Browser sent ${currency} ${value}.`)
  })
</script>
```

## Specifications

<Specifications link="amountsent-attribute">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat dataFileName="amountSent">Web Monetization API</BrowserCompat>
