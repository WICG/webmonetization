---
id: monetization-event
title: MonetizationEvent
sidebar_label: MonetizationEvent
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';
import Hidden from '@site/src/components/Hidden';


The **`MonetizationEvent`** interface of the [Web Monetization API](web-monetization-api.md) is the event object for web monetization events, which contains the details to facilitate payments.

## Properties

- [amount](monetization-event-amount.md) *(deprecated)*
  : An integer amount delivered by an ILP packet.   
- [amountSent](monetization-event-amountSent.md)
  : A dictionary containing the currency code and amount sent.  
- [assetCode](monetization-event-asset-code.md) *(deprecated)*
  : A string representing the currency code (eg USD, EUR) of the received amount.  
- [assetScale](monetization-event-asset-scale.md) *(deprecated)*
  : The scale of the received amount.  
<Hidden>- [incomingPayments](monetization-event-incoming-payments.md)
  : A string containing the URL representing an incoming payment at the monetization receiver.</Hidden>
- [receipt](monetization-event-receipt.md) *(deprecated)*
  : The base-64 encoded Interledger [Stream receipt](https://github.com/interledger/rfcs/blob/master/0039-stream-receipts/0039-stream-receipts.md) that the browser received.  
- [paymentPointer](monetization-event-payment-pointer.md)
  : A URL representing the payment end-point.

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  // Checking via DOMTokenList
  const link =
    document.querySelector('link[rel="monetization"]') ||
    document.createElement('link')
  if (link.relList.supports('monetization')) {
    console.log('Web Monetization is supported.')
  }

  // Checking global scope for MonetizationEvent
  if (window.MonetizationEvent) {
    console.log('Web Monetization is supported.')
  }

  // Checking if it's a global event handler
  if (window.hasOwnProperty('onmonetization')) {
    console.log('Web Monetization is supported.')
  }
</script>
```

## Specifications

<Specifications link="events">Web Monetization API</Specifications>

## Browser Compatibility

<BrowserCompat data="monetizationevent.json">Web Monetization API</BrowserCompat>
