---
id: monetization-event-incoming-payments
title: MonetizationEvent.incomingPayments
sidebar_label: MonetizationEvent.incomingPayments
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

:::info Experimental 

`incomingPayments` is [experimental technology](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental).  Check the [Browser Compatibility Table](#browser-compatibility) before using.

:::

The **`incomingPayments`** property of the [Monetization Event](monetization-event.md) interface returns a URL representing an incoming payment at the [monetization receiver](glossary.md#web-monetization-receiver).  

## Value

A string that represents a URL that can be used to verify payment at the [monetization receiver](glossary.md#web-monetization-receiver) via the [Open Payments API](https://docs.openpayments.guide/reference/get-incoming-payment) standard. 

## Examples

```javascript
/** @type {MonetizationEvent} event */
async function verifyPayment(event) {
  // Legacy receivers don't support returning incoming payment URLs
  if(!event.incomingPayment){
    throw new Error('No incoming payment URL')
  }

  const body = JSON.stringify({
    incomingPayment: event.incomingPayment
  });

  const response = await fetch('/verify', {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body);
  });

  if (response.ok) {
    // The incoming payment was fetched successfully
    const { receivedAmount } = JSON.parse(response.json())
    const { amount, assetCode, assetScale } = receivedAmount;
    console.log(`Received ${assetCode}${amount / Math.pow(10, assetScale)}.`);
  }
}
```

## Specifications

<Specifications link="verifying-a-payment">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="receipt.json">Web Monetization API</BrowserCompat>
