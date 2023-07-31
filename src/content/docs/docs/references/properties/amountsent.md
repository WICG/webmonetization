---
title: 'amountSent'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Verify example</li></ul></div>

The `MonetizationEvent` `amountSent` property returns the amount and currency code of the money that was successfully sent in the last payment.

## Value

A dictionary with the same data structure as the <a href="https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount" target="_blank">`PaymentCurrencyAmount`</a> dictionary in the <a href="https://www.w3.org/TR/payment-request/" target="_blank">Payment Request API</a>. The returned value is the value it was initialized with.

## Example

```html
<link rel="monetization" href="https://wallet.example/alice" />
<script>
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (event) => {
    // See how much was sent and in what currency
    const {
      amountSent: { value, currency },
    } = event
    console.log(`Browser sent ${currency} ${value}.`)
  })
</script>
```