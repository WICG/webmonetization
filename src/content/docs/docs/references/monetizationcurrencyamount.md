---
title: 'MonetizationCurrencyAmount'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Decide if this page is even needed</li></ul></div>

The `MonetizationCurrencyAmount` interface is used to supply information about monetary amounts. It maps directly to the <a href="https://www.w3.org/TR/payment-request/#dom-paymentcurrencyamount" target="_blank">Payment Request API</a> `PaymentCurrencyAmount` dictionary.

```js
WebIDL[SecureContext, Exposed=Window]
interface MonetizationCurrencyAmount {
  readonly attribute DOMString currency;
  readonly attribute DOMString value;
};
```