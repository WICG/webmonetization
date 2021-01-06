---
id: glossary
title: Glossary
sidebar_label: Glossary
---

# Monetized web page
* * *
A page on a monetized website that contains the necessary
[`meta` tag](explainer.md#add-lt-meta-gt-tag-to-website-header) defining the
page's receiving address (payment pointer).

# Payment pointer
* * *
A secure URL that points to a payment initiation endpoint on the web. The
payment pointer is provided by the Web Monetization receiver.
See [Payment pointers](explainer.md#payment-pointers) for more info.

# Receiver
* * *
The person with the receiving wallet account. Also see
[Web Monetization receiver](#web-monetization-receiver).

# Sender
* * *
The person with the sending wallet account. Also see
[Web Monetization provider](#web-monetization-provider).

# User agent
* * *
The user's web browser. In this context, the browser has implemented the
[JavaScript API](api.md) and has an installed/registered Web Monetization
agent.

The terms _user agent_ and _browser_ are used interchangeably throughout the
documentation.

# Web Monetization agent
* * *
A component or service, such as an extension, installed in a user agent
(browser). The Web Monetization agent determines which websites to pay and how
much to pay them.

# Web Monetization provider
* * *
The digital entity (wallet) sending micropayments. Also referred to as the _Web
Monetization sender_. See [Sending payments](sending.md) for more
information.

# Web Monetization receiver
* * *
The digital entity (wallet) receiving micropayments.
See [Receiving payments](receiving.md) and [ILP wallets](ilp-wallets.md) for
more info.

# Web Monetization session
* * *
Each page load or refresh is a unique session. The browser generates a
[unique session ID](explainer.md#flow) which the website can use to correlate
incoming payments to the Web Monetization receiver to a client-side context.

# Receipt Verifier
* * *
A service operated by the monetized website or third party that verifies
payment receipts issued by the Web Monetization receiver and emitted to the
web page by the User agent during a session.
