---
id: monetization-event-amount
title: MonetizationEvent.amount
sidebar_label: MonetizationEvent.amount
---

The **`amount`** property of the [MonetizationEvent](monetization-event.md) interface returns the amount that was successfully streamed.

## Value

An integer with the amount of money received according to the last receipt.

## Examples

```javascript
<link rel="monetization" href="https://example.com/pay">
<script>
const link = document.querySelector('link[rel="monetization"]');
link.addEventListener("monetization", event => {
// See how much your received and in what currency
const { amount, assetCode, assetScale } = event;
console.log(`Browser sent ${assetCode}${amount / (10 * assetScale)}.`)
  });
</script>
```

## Specifications

## Browser compatibility

