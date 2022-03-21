---
id: monetization-event-payment-pointer
title: MonetizationEvent.paymentPointer
sidebar_label: MonetizationEvent.paymentPointer
---

The **`paymentPointer`** property of the [MonetizationEvent](monetization-event.md) interface returns a URL representing the payment end-point. 

## Value

A string containing the URL representing a payment end-point. When getting, returns the value it was initialized with.

## Examples

```javascript
<link rel="monetization" href="https://example.com/pay">
<script>
const link = document.querySelector(“link[rel=‘monetization’]“);
link.addEventListener(“monetization”, (event) => {
console.log(typeof(event.paymentPointer))})
</script>
```

## Specifications

## Browser compatibility

