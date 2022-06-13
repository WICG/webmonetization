---
id: monetization-event
title: MonetizationEvent
sidebar_label: MonetizationEvent
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`MonetizationEvent`** interface of the [Web Monetization API](web-monetization-api.md) is the event object for web monetization events, which contains the amount, currency code, and receipt.  

## Properties

- [amount](monetization-event-amount.md)
   
   : An integer amount delivered by an ILP packet.
- [assetCode](monetization-event-asset-code.md)
   
   : A string representing the currency code (eg USD, EUR)
- [assetScale](monetization-event-asset-scale.md)
   
   : The scale of the amount 
- [receipt](monetization-event-receipt.md)
   
   : The base-64 encoded Interledger Stream receipt that the browser received. 
- [paymentPointer](monetization-event-payment-pointer.md)
   
   : A URL representing the payment end-point. 

## Examples

```javascript
<link rel="monetization" href="https://example.com/monetization.js">
<script>
  // Checking via DOMTokenList
  const link = document.querySelector('link[rel="monetization"]') ||
    document.createElement("link");
  if (link.relList.supports("monetization")) {
    console.log("Web Monetization is supported.");
  }

  // Checking global scope for MonetizationEvent
  if (window.MonetizationEvent) {
    console.log("Web Monetization is supported.");
  }

  // Checking if it's a global event handler
  if (window.hasOwnProperty("onmonetization")) {
    console.log("Web Monetization is supported.");
  }
</script>
```

## Specifications

<Specifications link="events">Web Monetization API</Specifications>

## Browser Compatibility

<BrowserCompat data="monetizationevent.json">Web Monetization API</BrowserCompat>
