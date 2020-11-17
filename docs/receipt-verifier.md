---
id: receipt-verifier
title: Receipt Verifier Service
sidebar_label: Receipt verifier service
---

This page explains how to set up a receipt verifier service.

As more creators adopt Web Monetization to serve premium and/or ad-free content, there’s a greater need for reliable payment verification. Web Monetization browser events, like `monetizationstart`, are helpful indicators of payment, but can be spoofed by savvy users to access exclusive content without paying.

[Interledger STREAM receipts](https://interledger.org/rfcs/0039-stream-receipts/) provide payment recipients (such as web monetized site owners) with verifiable proofs of payment. Payment recipients can verify STREAM receipts themselves by setting up their own verification service or by using a third-party service.

## Before you begin

Your Web Monetization receiver (the digital entity receiving payments) must be set up to generate Interledger STREAM receipts. GateHub and Uphold already support receipts.

## Service overview

The receipt verifier service acts as a proxy between the Web Monetization sender and receiver.

Before a payment is made, the WM sender sends a query to the WM receiver. The query passes through the verifier service, which adds a receipt secret and receipt nonce.

When the WM receiver receives money from the payment, it generates a receipt (which includes a signature generated using the receipt secret) and sends the receipt to the WM sender.

The WM sender passes the receipt to the verifier service so the verifier can confirm the payment (as only the WM receiver and verifier service know the receipt secret). The verifier must verify the receipt before accepting the amount as paid.

## Install the receipt verifier service package

You can get the [receipt verifier service package](https://github.com/coilhq/receipt-verifier) or run the verifier as a [Kubernetes service](https://github.com/coilhq/receipt-verifier/tree/main/config/base).

**Example**

We use Redis in this example. You can make a verifier that doesn't use Redis.

```
npm install
npm run-script build
sudo docker run -p 6379:6379 -d redis
npm start
```

## Update your Web Monetization meta tag

Typically, a Web Monetization meta tag looks something like this:

`<meta name=“monetization" content="$wallet.example.com/alice">`

Update your meta tag so that your URL-encoded payment pointer is in the path of the receipt verifier service’s URL.

For example, if your payment pointer is `$wallet.example.com/alice` and your receipt verifier service’s URL is `https://receipt-verifier.com`, then you’ll set your meta tag’s `content` to either of the following:

* `https://receipt-verifier.com/%24wallet.example.com%2Falice`
* `$receipt-verifier.com/%24wallet.example.com%2Falice`

With this change, any queries from the WM sender will be proxied by the receipt verifier service to `$wallet.example.com/alice`.

## Web Monetization revshare generator

If you used the [Web Monetization revshare generator](https://webmonetization.org/prob-revshare) to create a meta tag for [probabilistic revenue sharing](https://webmonetization.org/docs/probabilistic-rev-sharing/), follow the same instructions as above: URL-encode your revshare payment pointer and put it in the path of the receipt verifier service’s URL.

For example, if your meta tag looks like this:

`<meta name="monetization" content="$webmonetization.org/api/revshare/pay/W1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0">`

And your receipt verifier service’s URL is `https://receipt-verifier.com`, then you’ll set your meta tag’s `content` to either of the following:

* `https://receipt-verifier.com/%24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0`
* `$receipt-verifier.com/ %24webmonetization.org%2Fapi%2Frevshare%2Fpay%2FW1siJHdhbGxldC5leGFtcGxlL2FsaWNlIiwxMCwiQWxpY2UiXSxbIiR3YWxsZXQuZXhhbXBsZS9ib2IiLDEwLCJCb2IiXV0`

## Set up a monetizationprogress event listener

When a WM sender receives a receipt, the sender notifies the user agent of the successful payment by submitting a `monetizationprogress` event containing a receipt.

Add the following client-side code to your website to listen for a `monetizationprogress` event containing a `receipt`. When a receipt exists, your website will send it to the receipt verifier in the event listener to confirm the payment.

```html
<head>
  <!-- This should be set to .... -->
  <meta name="monetization" content="https://receipt-verifier.com/%24wallet.example.com%2Falice">
  <script>
    if (document.monetization) {
    document.monetization.addEventListener('monetizationprogress', event => {
    // A payment has been received

    // Connect to receipt verifier service to validate the payment
    const res = await fetch(‘https://receipt-verifier.com/verifyReceipt’, {
method: ‘POST’,
body: event.detail.receipt
})
const { amount } = await res.json()
    )
    })
    }
  </script>
</head>
```

The receipt verifier can confirm the payment, as only the verifier and the WM receiver know the receipt secret. The verifier must verify the receipt before accepting the receipt amount as paid. When accepted as paid, the site can display exclusive content or any other perks you’ve set up.
