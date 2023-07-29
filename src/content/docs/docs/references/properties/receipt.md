---
title: 'receipt'
---

:::danger[Caution - Deprecated Property]
Receipts and its associated `receipt` property are deprecated. Consider using the [incomingPayments](../incomingpayment/) property instead.
:::

The `MonetizationEvent` `receipt` property returned an optional proof-of-payment receipt. It was issued from the monetization receiver to the monetization provider as proof of the total current amount received in a stream. 

### Value

A base64-encoded STREAM receipt. Returned null if receipts were not enabled on the payment pointer. The receipt had the total running amount streamed in the current session.

### Example

```html
<link rel="monetization" href="https://wallet.example/alice" />
<script>
  const link = document.querySelector(“link[rel=‘monetization’]“);
  link.addEventListener(“monetization”, (event) => {
  console.log(event.receipt)})
</script>
```