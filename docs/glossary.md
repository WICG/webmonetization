---
id: glossary
title: Glossary
sidebar_label: Glossary
---

## Payment Pointer
* * *
A secure URL that points to a payment initiation endpoint on the Web. The payment
pointer is provided by the Web Monetization receiver. See [Payment Pointers](./explainer#payment-pointers) for more info.

## User Agent
* * *
The user's web browser. In this context, the browser has implemented the [JavaScript API](./api.md) and has an installed/registered Web Monetization agent.

The terms _user agent_ and _browser_ are used interchangeably throughout the
documentation.

## Web Monetization Agent
* * *
A component or service, such as an extension, installed in a user agent
(browser). The Web Monetization agent determines which websites to pay and how
much to pay them.

## Web Monetization Provider
* * *
An entity (such as a digital wallet) that accepts payments on behalf of a website
or makes payments on behalf of a user and is capable of receiving/sending
micropayments.

### Receiver
The entity receiving micropayments. See [Receiving Payments](./receiving.md) for
more info.

### Sender
The entity sending micropayments. See [Sending Payments](./sending.md) for more
information.

## Web Monetization Session
* * *
Each page load or refresh is a unique session. The browser generates a [unique session ID](./explainer#flow) which the website can use to correlate incoming payments to the Web Monetization receiver to a client-side context.

## Web Page
* * *
A page on a monetized website that contains the necessary [`meta` tag](./explainer#add-lt-meta-gt-tag-to-website-header) defining the page's receiving address (payment pointer).
