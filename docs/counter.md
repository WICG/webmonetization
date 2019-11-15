---
id: counter
title: Micropayment Counter
sidebar_label: Micropayment Counter
---

Web Monetization lets you count exactly how much you made from a given visitor,
and update that amount in real-time as more micropayments come in. Like any
animated effect it should be used sparingly, but it can be a cool way to show
your visitors exactly how much they're supporting you!

This example shows you how to use the `monetizationprogress` event to count how
much you've made off of micropayments from a given visitor.

## Code

```html
<head>
  <!-- this should be set to your own payment pointer -->
  <meta name="monetization" content="$twitter.xrptipbot.com/Interledger">

  <script>
    let total = 0
    let scale

    if (document.monetization) {
      document.monetization.addEventListener('monetizationprogress', ev => {
        // initialize currency and scale on first progress event
        if (total === 0) {
          scale = ev.detail.assetScale
          document.getElementById('currency').innerText = ev.detail.assetCode
        }

        total += Number(ev.detail.amount)

        const formatted = (total * Math.pow(10, -scale)).toFixed(scale)
        document.getElementById('total').innerText = formatted
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

[_You can view this example page here_](/examples/counter.html).

Load this page with Web Monetization enabled to see the amount count up.

## How Does it Work?

```js
if (document.monetization) {
  document.monetization.addEventListener('monetizationprogress', ev => {
```

If the visitor is Web Monetized (`document.monetization` is defined), we're
binding the `monetizationprogress` event. This is different from previous
examples, where we bound `monetizationstart`.

`monetizationstart` fires once Web Monetization initializes.
`monetizationprogress` fires every time there's a micropayment from the Web
Monetization provider to the site.

`monetizationprogress` contains details about the micropayments that occur.

```js
  // initialize currency and scale on first progress event
  if (total === 0) {
    scale = ev.detail.assetScale
    document.getElementById('currency').innerText = ev.detail.assetCode
  }
```

There's some attributes of the micropayments that don't change, like currency
details. We set these currency details on the very first micropayment.

`ev.detail.assetCode` is a three-letter code that describes the currency of the micropayment,
like `USD`, `EUR`, or `XRP`.

The asset code describes what asset the [Web Monetization
receiver](http://localhost:3000/docs/glossary#web-monetization-receiver) is
denominating their incoming payments in. This often matches the currency your
wallet account uses, but not always.

The asset code will stay the same for a given payment pointer (your wallet
should warn you if they change it). It is not affected by the currency that the
Web Monetization provider uses.

`ev.detail.assetScale` defines how small the units of amount will be on this payment pointer.
A bigger scale means smaller units. If your scale is 2 and your asset code is USD, then it means
you need 100 (`10 ** 2`) units to get one dollar.


```js
  total += Number(ev.detail.amount)
```

The amount in `ev.detail.amount` is an integer, which we add to our total.

> Even though `ev.detail.amount` is a string that can represent a number up to
> 64 bits long in theory (too big for a JavaScript number), it's OK for us to
> convert it to a JavaScript number here. The micropayment amounts in Web
> Monetization are far from pushing the limits.  With USD and a scale of 9, for
> instance, it would take around 500,000 years to overflow this number.

```js
  const formatted = (total * Math.pow(10, -scale)).toFixed(scale)
  document.getElementById('total').innerText = formatted
```

Finally we update the text on the page with our new total. Our total is an
integer with the total number of indivisible units. We want it to be a more
readable decimal number, though, so we apply the scale to format it. This
formatted version of the amount gets written to the `total` span on the page.
