---
title: 'MonetizationEvent'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Is there a better way to do a table? (<strong>HJ replies</strong>: <em>tell me more about what better ways you had in mind?</em>)</li></ul></div>

The `MonetizationEvent` DOM events provide information about payments sent to WM receivers.

The `monetization` event fires on a `<link rel="monetization">` element when the WM agent successfully creates an outgoing payment. There’s no guarantee that any payments will follow or, if they do, how often or how large the payments will be.

By listening for `monetization` events, you can use the returned details to verify the receipt of a payment. You can then choose to have the page programmatically respond to successful payments. For example, you could [hide ads](/docs/guides/hide-ads) or provide access to [exclusive content](/docs/guides/provide-exclusive-content).

<table>
  <tr>
    <th>Bubbles</th>
    <td>Yes</td>
  </tr>
  <tr>
    <th>Cancelable</th>
    <td>No</td>
  </tr>
  <tr>
    <th>Interface</th>
    <td>MonetizationEvent</td>
  </tr>
    <tr>
    <th>Event handler property</th>
    <td><a href="/docs/references/onmonetization">onmonetization</a></td>
  </tr>
</table>

## Current properties

- [amountSent](/docs/references/properties/amountsent) - A dictionary containing the amount and currency code of the sent payment
- [incomingPayments](/docs/references/properties/incomingpayments) - returns incoming payment URL
- [paymentPointer](/docs/references/properties/paymentpointer) - A URL representing the payment pointer endpoint

## Deprecated properties

- [amount](/docs/references/properties/amount) - An integer amount delivered by an Interledger packet
- [assetCode](/docs/references/properties/assetcode) - A string representing the currency code of the received amount
- [assetScale](/docs/references/properties/assetscale) - The scale of the received amount
- [receipt](/docs/references/properties/receipt) - The base-64 encoded Interledger STREAM receipt that the browser received

## Example

```html
<link rel="monetization" href="https://wallet.example/alice" />
<script>
  // Checking via DOMTokenList
  const link = document.querySelector('link[rel="monetization"]') || document.createElement('link')
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
