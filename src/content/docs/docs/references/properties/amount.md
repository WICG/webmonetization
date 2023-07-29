---
title: 'amount'
---

<div class="draft"><div class="title">See if sidebar deprecation note can be styled for all deprecated properties</div></div>

:::danger[Caution - Deprecated Property]
The `amount` property is deprecated. Consider using the [amountSent](../amountsent/) property instead.
:::

The `MonetizationEvent` `amount` property returned the amount of money that was successfully received on the last payment.

### Value

An integer representing the amount of money received.

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