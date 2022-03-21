---
id: monetization-event-asset-code
title: MonetizationEvent.assetCode
sidebar_label: MonetizationEvent.assetCode
---
The **`assetCode`** property of the [MonetizationEvent](monetization-event.md) interface returns the currency code. 

## Value

A string representing the three character currency code according to the last receipt.

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

