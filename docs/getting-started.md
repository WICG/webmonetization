---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

This section describes how to use Web Monetization on your website.

In order to Web-Monetize your site, you need to insert a special HTML tag that
tells the [Web Monetization Provider](/#providers) how to pay you. We call this the **Web Monetization Meta Tag**.

## Setup a Web Monetization Wallet

Select one of the [Web Monetization Wallets](/#wallets) and setup an account.

## Get your Payment Pointer

From your ILP Wallet Provider find your Payment Pointer and copy it. 
A Payment Pointer looks like:
```html
$twitter.xrptipbot.com/WebMonetization
```

## Generate your Meta Tag

Use the [Meta Tag Generator](/meta-tag) to make your meta tag.

The tag's `name` is always `monetization`.

### Example Meta Tag 
```html
<meta 
  name="monetization" 
  content="$twitter.xrptipbot.com/WebMonetization">
```

## Add Meta Tag to Website

Copy your Meta Tag and add it to your websites `<head>` section. It should look like the Example Site below. 

### Example Site

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

Congragulations! Your website is now Web Monetized. 
