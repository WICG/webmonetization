---
title: 'assetScale'
---

:::danger[Caution - Deprecated Property]
The `assetScale` property is deprecated. Consider using the [amountSent](../amountsent/) property instead.
:::

The `MonetizationEvent` `assetScale` property returned the scale of the paid amount

### Value

An integer that represents the scale on the amount of money received in the last payment.

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