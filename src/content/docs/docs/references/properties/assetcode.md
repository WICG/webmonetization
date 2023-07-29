---
title: 'assetCode'
---

:::danger[Caution - Deprecated Property]
The `assetCode` property is deprecated. Consider using the [amountSent](../amountsent/) property instead.
:::

The `MonetizationEvent` `assetCode` property returned the currency code of the last payment received. 

### Value

A string representing the three-character currency code on the last payment received.

### Example

```html
<link rel="monetization" href="https://wallet.example/alice" />
<script>
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (event) => {
    // See how much your received and in what currency
    const { amount, assetCode, assetScale } = event
    console.log(`Browser sent ${assetCode}${amount / Math.pow(10, assetScale)}.`)
  })
</script>
```