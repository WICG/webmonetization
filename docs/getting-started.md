---
id: getting-started
title: Quick Start Guide
sidebar_label: Quick Start Guide
---

This page provides high-level instructions for adding Web Monetization to your
 website.

To monetize your site, you must:
1. Set up a Web-monetized wallet for receiving payments.
2. Get your wallet's payment pointer.
3. Create a special `<meta>` tag that tells [Web Monetization providers](/#providers)
how to pay you.
4. Add the `<meta>` tag to each page of your website that you want to monetize.

For a more detailed look at Web-monetizing your site, see the
[Web Monetization explainer](./explainer#getting-started).

## 1. Set Up a Web-Monetized Wallet

Choose a [wallet that supports Web Monetization](/#wallets) and set up an account.
The wallet must support the Interledger Protocol (ILP).

## 2. Get Your Payment Pointer

Find your payment pointer within your wallet and copy it.

### Example Payment Pointer
```html
$twitter.xrptipbot.com/WebMonetization
```

## 3. Create Your Meta Tag

Create your `<meta>` tag by using the [Meta Tag Generator](/meta-tag) or by
following the example below.

The tag's `name` is always `monetization`. The `content` is your payment
pointer.

### Example Meta Tag
```html
<meta
  name="monetization"
  content="$twitter.xrptipbot.com/WebMonetization">
```

## 4. Add the Meta Tag to Your Website

Copy your `<meta>` tag and add it to the `<head>` section of each page you want
to monetize.

> Web Monetization only works on secure pages served over HTTPS.

### Example HTML

```html
<!doctype html>
<html>
  <head>
    <title>Web Monetized Site</title>
    <meta
      name="monetization"
      content="$twitter.xrptipbot.com/WebMonetization">
  </head>
</html>
```

Congratulations! Your website is now Web monetized.
