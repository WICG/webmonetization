---
id: glossary
title: Glossary
sidebar_label: Glossary
---

## Monetized Web Page
* * *
A page on a monetized website that contains the necessary
[`meta` tag](./explainer#add-lt-meta-gt-tag-to-website-header) defining the
page's receiving address (payment pointer).

## Payment Pointer
* * *
A secure URL that points to a payment initiation endpoint on the Web. The
payment pointer is provided by the Web Monetization receiver.
See [Payment Pointers](./explainer#payment-pointers) for more info.

## Receiver
* * *
The person with the receiving wallet account. Also see
[Web Monetization Receiver](#web-monetization-receiver).

## Sender
* * *
The person with the sending wallet account. Also see
[Web Monetization Provider](#web-monetization-provider).

## User Agent
* * *
The user's web browser. In this context, the browser has implemented the
[JavaScript API](./api.md) and has an installed/registered Web Monetization
agent.

The terms _user agent_ and _browser_ are used interchangeably throughout the
documentation.

## Web Monetization Agent
* * *
A component or service, such as an extension, installed in a user agent
(browser). The Web Monetization agent determines which websites to pay and how
much to pay them.

## Web Monetization Provider
* * *
The digital entity (wallet) sending micropayments. Also referred to as the _Web
Monetization sender_. See [Sending Payments](./sending.md) for more
information.

## Web Monetization Receiver
* * *
The digital entity (wallet) receiving micropayments.
See [Receiving Payments](./receiving.md) for
more info.

## Web Monetization Session
* * *
Each page load or refresh is a unique session. The browser generates a
[unique session ID](./explainer#flow) which the website can use to correlate
incoming payments to the Web Monetization receiver to a client-side context.
