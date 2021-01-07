---
id: receipt-verifier
title: Receipt Verifier Service
sidebar_label: Receipt verifier service
---

This page explains how to set up a receipt verifier service.

As more creators adopt Web Monetization to serve premium and/or ad-free content, there’s a greater need for reliable payment verification. Web Monetization browser events, like `monetizationstart`, are helpful indicators of payment, but can be spoofed by savvy users to access exclusive content without paying.

[Interledger STREAM receipts](https://interledger.org/rfcs/0039-stream-receipts/) provide payment recipients (such as web monetized site owners) with verifiable proofs of payment. As a payment recipient, you can verify STREAM receipts yourself by setting up your own receipt verifier service or by using a third-party service, like [the one we provide](#use-our-publicly-available-receipt-verifier). You don't need to run your own Interledger connector or SPSP server to verify STREAM receipts.

## Before you begin

Your Web Monetization receiver (the digital entity receiving payments) must be set up to generate Interledger STREAM receipts. No action is required on your part. GateHub and Uphold already support receipts.

## Receipt verifier service overview

The receipt verifier service acts as a proxy between the Web Monetization sender and receiver.

Before a payment is made, the WM sender sends a query to the WM receiver. The query passes through the receipt verifier service, which adds a receipt secret and receipt nonce.

When the WM receiver receives money from the payment, it generates a receipt (which includes a signature generated using the receipt secret) and sends the receipt to the WM sender.

The site takes the receipt from the Web Monetization events, then submits the receipt to its backend. The backend then submits the receipt to the receipt verifier service so the receipt verifier service can confirm the payment (as only it and the WM receiver know the receipt secret). The receipt verifier service must verify the receipt before accepting the amount as paid.

## Use our publicly available receipt verifier

If you don't want to set up your own receipt verifier service, you can use ours!

Review the following sections below and use `https://webmonetization.org/api/receipts` as the receipt verifier service's URL.

* [Update your Web Monetization meta tag](#update-your-web-monetization-meta-tag)
* [Set up a monetizationprogress event listener](#set-up-a-monetizationprogress-event-listener)

## Install the receipt verifier service package

You can get the [receipt verifier service package](https://github.com/coilhq/receipt-verifier) or run the receipt verifier service as a [Kubernetes service](https://github.com/coilhq/receipt-verifier/tree/main/config/base).

**Example**

This example shows Coil's implementation of the receipt verifier service package, which requires Redis. You can write a different implementation that doesn't rely on Redis.

```
npm install
npm run-script build
sudo docker run -p 6379:6379 -d redis
npm start

git clone https://github.com/coilhq/receipt-verifier.git
cd receipt-verifier
```

## Update your Web Monetization meta tag

Typically, a Web Monetization meta tag looks something like this:

`<meta name=“monetization" content="$wallet.example/alice">`

For queries from the WM sender to be proxied by the receipt verifier service to your payment pointer:

1. URI-encode your payment pointer. See [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) on MDN Web Docs if you need help.
2. Add your pointer to the path of the receipt verifier service's URL.
3. Update your meta tag's `content` to be this new value.

For example, if your payment pointer is `$wallet.example/alice` and your receipt verifier service’s URL is `https://receipt-verifier.example`, then you’ll set your meta tag’s `content` to either of the following:

* `https://receipt-verifier.example/%24wallet.example%2Falice`
* `$receipt-verifier.example/%24wallet.example%2Falice`

If you're using our publicly available receipt verifier service, then you'll set your meta tag's `content` to either of the following:

* `https://webmonetization.org/api/receipts/%24wallet.example%2Falice`
* `$webmonetization.org/api/receipts/%24wallet.example%2Falice`

:::info
You can create your meta tag with the [Meta Tag Generator](/meta-tag) if using the publicly available receipt verifier service.
:::


## Web Monetization revshare generator

If you used the [Web Monetization revshare generator](https://webmonetization.org/prob-revshare) to create a meta tag for [probabilistic revenue sharing](probabilistic-rev-sharing.md), follow the same instructions as above: URI-encode your revshare payment pointer and put it in the path of the receipt verifier service’s URL.

For example, if your meta tag looks like this:

`<meta name="monetization" content="$webmonetization.org/api/revshare/pay/W1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0">`

And your receipt verifier service’s URL is `https://receipt-verifier.example`, then you’ll set your meta tag’s `content` to either of the following:

* `https://receipt-verifier.example/%24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0`
* `$receipt-verifier.example/ %24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0`

## Set up a monetizationprogress event listener

When a WM sender receives a receipt, the sender notifies the user agent of the successful payment by submitting a `monetizationprogress` event containing a receipt.

Add the following client-side code to your website to listen for a `monetizationprogress` event containing a `receipt`. When a receipt exists, your website will verify the receipt in the event listener to confirm the payment.

```html
<head>
  <!-- This should be set to .... -->
  <meta name="monetization" content="https://receipt-verifier.example/%24wallet.example%2Falice">
  <script>
    if (document.monetization) {
        document.monetization.addEventListener('monetizationprogress', event => {
            // A payment has been received.

            // Connect to your site’s backend to validate the payment. This does NOT connect directly to the receipt verifier.
            const res = await fetch('/verifyReceipt', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                receipt: event.detail.receipt
              })
            })
        })
    }
  </script>
</head>
```

Your backend can send the receipt to the receipt verifier service’s `/verify` endpoint.

:::info
If you're using our publicly available receipt verifier service, the verify endpoint is `https://webmonetization.org/api/receipts/verify`.
:::

Here’s an example for an Express.js server:

```javascript
app.post('/verifyReceipt', async (req, res) => {
  const resp = await fetch('https://receipt-verifier.example/verify', {
    method: 'POST',
    body: req.body.receipt
  }
  const { amount } = await resp.json()
  console.log('Received ' + amount)
  // backend logic for new paid amount
})
```

The receipt verifier service can confirm the payment, as only the receipt verifier service and the WM receiver know the receipt secret. The receipt verifier service must verify the receipt before accepting the receipt amount as paid. When accepted as paid, the site backend can serve exclusive content or any other perks you’ve set up.
