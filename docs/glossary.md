---
id: glossary
title: Glossary
sidebar_label: Glossary
---

import Hidden from '@site/src/components/Hidden';

# Monetized web page
* * *
A page on a monetized website that contains the necessary
`link` [tags](explainer.md) defining the
page's receiving addresses for payments (See [payment pointer](#payment-pointer)).

# Open Payments
* * *
An new API standard that allows third parties authorized by users to send payments on their behelf directly from their wallets.   See [Open Payments](https://openpayments.guide) for more info.  

# Payment pointer
* * *
A secure URL that points to a payment initiation endpoint on the web. The
payment pointer is provided by the Web Monetization receiver.
See [Payment pointers](explainer.md#payment-pointers) for more info.  Payment pointers provide the entry point to the Open Payments API.  

# Receiver
* * *
The person with the receiving wallet account. Also see Web Monetization receiver below.

# Sender
* * *
The person with the sending wallet account. Also see
Web Monetization provider below.

# User agent
* * *
The user's web browser. In this context, the browser has implemented the
[JavaScript API](monetization-event.md) and has an installed/registered Web Monetization
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
Monetization sender_. <Hidden>See [Sending payments](sending.md) for more
information. </Hidden>

# Web Monetization receiver
* * *
The digital entity (wallet) receiving micropayments.
See <Hidden>[Receiving payments](receiving.md) and </Hidden> [ILP wallets](ilp-wallets.md) for
more info.


# Web Monetization session
* * *
Each page load or refresh is a unique session. The browser generates a
[unique session ID](explainer.md#flow) which the website can use to correlate
incoming payments to the Web Monetization receiver to a client-side context.

# Receipt Verifier  *(deprecated)*
* * *
A service operated by the monetized website or third party that verifies
payment receipts issued by the Web Monetization receiver and emitted to the
web page by the User agent during a session.  

