---
id: monetization-event-incoming-payments
title: MonetizationEvent.incomingPayments
sidebar_label: MonetizationEvent.incomingPayments
todo: Change example to long-poll the incoming payment until the incoming amount matches the received amount
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

:::info Experimental

`incomingPayments` is [experimental technology](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental). Check the [Browser Compatibility Table](#browser-compatibility) before using.

:::

The **`incomingPayments`** property of the [Monetization Event](monetization-event.md) interface returns a URL representing an incoming payment at the [monetization receiver](glossary.md#web-monetization-receiver).

## Value

A string that represents a URL that can be used to verify payment at the [monetization receiver](glossary.md#web-monetization-receiver) via the [Open Payments API](https://docs.openpayments.guide/reference/get-incoming-payment) standard.

## Examples

```javascript
/** @type {MonetizationEvent} event */
async function verifyPayment(event) {
  // Legacy receivers don't support returning incoming payment URLs
  if (!event.incomingPayment) {
    throw new Error('No incoming payment URL')
  }

  const response = await fetch(event.incomingPayment, {
    method: 'GET',
    credentials: 'same-origin',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    // The incoming payment was fetched successfully
    const { receivedAmount } = JSON.parse(response.json())
    const { amount, assetCode, assetScale } = receivedAmount
    console.log(`Received ${assetCode}${amount / Math.pow(10, assetScale)}.`)
  }
}
```

## Specifications

<Specifications link="verifying-a-payment">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat dataFileName="receipt">Web Monetization API</BrowserCompat>
