---
title: 'incomingPayments'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Verify example</li></ul></div>

:::tip[Experimental property]
`incomingPayments` is an <a href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental" target="_blank">experimental technology</a>. Check the [Browser compatibility table](#browser-compatibility) before using.
:::

The `MonetizationEvent` `incomingPayments` property returns a URL that represents an incoming payment at the monetization receiver.

## Value

A string that represents a URL that can be used to verify payment at the monetization receiver via the <a href="https://docs.openpayments.guide/reference/get-incoming-payment" target="_blank">Open Payments API standard</a>. The returned value is the value it was initialized with.

## Example

```jsx
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