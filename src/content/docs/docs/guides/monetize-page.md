---
title: 'Add Web Monetization to a page'
---

<div class="draft"><div class="title">Page Updates</div><ul><li>This page is still a draft and is under review by Alex/Sabine/Mohammed</li><li>Figure out issue with page appearing highlighted in sidebar twice</li>Add any appropriate links<li></li><li></li><li></li><li></li></ul></div>

This page provides basic instructions for adding Web Monetization to a web page. If you're new to web monetizing content, this page is a great place to start.

## Prerequisites

* Web monetized pages must be secure and served over HTTPS.
* You must have the payment pointer assigned to you by your WM receiver.

## Monetize a page

The HTML `<link>` element is used to add Web Monetization to a page. Simply add the `<link>` element to the `<head>` of each page you want to monetize.

The element’s `rel` value is always `monetization`. The `href` value is a payment pointer in URL format.

For example:

```html
<html>
    <head>
        <title>My Site</title>
        <link rel="monetization" href="https://wallet.example/alice" />
    </head>
```

### Multiple link elements

While an HTML document can contain an unlimited number of `<link>` elements, the behavior of multiple monetization `<link>` elements is currently undefined. This includes instances where a parent page and an iframe's `src` are both web monetized. Until this behavior is defined, we recommend no more than one monetization `<link>` per browsing context/page.

### Multiple payment pointers

Since a `<link>` element can only support one `href` value, you can only define one payment pointer within a monetization `<link>`. One way to include multiple payment pointers within a page is through probabilistic revenue sharing. This method allows you to define a list of weighted payment pointers by adding a script to your page. Visit the [probabilistic revenue sharing](../set-up-probabilistic-revenue-sharing) page for more information.

## Respond to monetization events
A `monetization` event fires when an outgoing payment is successfully created. There’s no guarantee that any payments will follow or, if they do, how often or how large the payments will be. 

The event returns a URL as the `incomingPayment` property. Issuing a `GET` request to the URL returns the `receivedAmount`. A payment is considered received/successful when the `receivedAmount` is more than zero. You can then choose to have the page programmatically respond based on whether a payment was received. For example, you could [hide ads](../hide-ads) or [provide access to exclusive content](../provide-exclusive-content/) to web monetized visitors.

Visit [Monetization Events](/docs/references/monetizationevent/) for more information about the `monetization` event object and its properties.
