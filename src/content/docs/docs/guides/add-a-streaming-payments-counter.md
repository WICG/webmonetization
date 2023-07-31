---
title: Add a streaming payments counter
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>This page needs a good review; the ideas of streaming, micropayments, an what OP supports are a bit muddled</li><li>Update the Glitch example's README</li></ul></div>

Web Monetization allows you to know exactly how much you've received from a given visitor. The amount updates in real time as more payments come in during the session.

By adding a streaming payments counter to your site, you can show your visitors how much they're supporting you.

## Example

The example below illustrates how to use the `monetization` event to show a web monetized visitor how much you're earning from their visit.

```html
<head>
  <!-- this should be set to your own payment pointer -->
  <link rel="monetization" href="https://wallet.example/alice" />

  <script>
    let total = 0

    if (window.MonetizationEvent) {
      const link = document.querySelector('link[rel="monetization"]')

      link.addEventListener('monetization', (event) => {
        const {
          amountSent: { value, currency },
        } = event
        console.log(`Browser sent ${currency} ${value}.`)

        if (total === 0) {
          document.getElementById('currency').innerText = currency
        }

        total += Number(value)

        document.getElementById('total').innerText = total.toFixed(9)
      })
    }
  </script>
</head>

<body>
  <p>
    Thanks to you, I've made
    <span id="total">nothing (yet)</span>
    <span id="currency"></span>
  </p>
</body>
```

## How it works

First, we'll bind the `monetization` event if the visitor is web monetized (`window.MonetizationEvent` is defined).

The `monetization` event contains details about the payments that occur. The `amountSent` property of the event returns the amount (`value`) and currency code of the last successful payment.

```js
  if (window.MonetizationEvent) {
    const link = document.querySelector('link[rel="monetization"]');

    link.addEventListener("monetization", (event) => {
      const {
      amountSent: { value, currency },
    } = event;
    console.log(`Browser sent ${currency} ${value}.`);
```

The currency is set on the first payment and doesn't change. It represents the received currency, which may be different than the site visitor's preferred currency.

`currency` is a three-letter code, like USD, EUR, or GBP. This code gets written to the `currency` span on the page.

```js
// initialize currency on first progress event
if (total === 0) {
  document.getElementById('currency').innerText = currency
}
```

The amount in `value` is an integer, which we add to our total.

```js
total += Number(value)
```

Finally, we update the text on the page with the new total. We want the total to be in a readable format, so we convert the number to a string and round it to a specified number of decimals, which in this example is 9. This formatted version of the amount gets written to the `total` span on the page.

```js
document.getElementById('total').innerText = total.toFixed(9)
```

## Interactive example

This example simulates showing a visitor how much you're earning based off their visit. The example doesn't require you to have Web Monetization enabled in your browser and no real payments are occurring.

Click **View as Web Monetized/non-Web Monetized visitor** to toggle your monetization state. If source files appear instead of the example, click **View App** in the bottom-right corner.

<iframe
  src="https://glitch.com/embed/#!/embed/wm2-count-revenue?path=README.md&previewSize=100"
  title="wm-count-revenue on Glitch"
  style='height:100%;width:100%;border:0;min-height:420px'>
</iframe>
