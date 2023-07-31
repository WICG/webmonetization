---
title: 'Web Monetization flow'
---

<div class="draft"><h5>Page Updates</h5><ul><li>This page is still a draft and is under review by Alex/Sabine/Mohammed</li><li>Add any appropriate links</li><li>Definitions for key players need review and will probably change</li><li>Add "Detailed flow" section and code blocks/sequence diagram to bottom </li><li>Add diagram or etc to bottom of high-level flow section</li></ul></div>

Web Monetization itself is not used to specify payment amounts, currencies, or frequencies. It’s also not used to process payments. Instead, Web Monetization helps coordinate payments between Open Payments-enabled accounts by requesting authorization and issuing payment instructions.

This section describes the flow required between the key players to start the money movement process.

## Key players

- **Web Monetization provider** - An entity that provides a funded Open Payments-enabled account from which payments can be sent
- **Web Monetization agent** - Code within a web browser, such as an extension, that discovers web monetized pages, exposes the Web Monetization API, and communicates with the Open Payments API
- **Web monetized site** - A site that contains a payment pointer within the monetization `<link>` element
- **Web Monetization receiver** - An entity that provides an Open Payments-enabled account into which payments can be received

## Assumptions

- The user (site visitor) already has a relationship with a WM provider
- The user’s browser contains a WM agent
- The user has already performed whatever configuration is necessary to link the WM agent with their WM provider

## High-level flow

1. The WM agent checks each page for the monetization `<link>` element as the user browses.
2. When a monetization `<link>` element is found, the WM agent issues a request to the associated payment pointer to obtain, among other things, the URL to the WM receiver’s authorization server.
3. The WM agent sends a grant request to the authorization server and receives an access token in response.
4. The WM agent creates an incoming payment for the session (e.g., the open browser tab/window) by using the access token and other details obtained during Steps 2 and 3 and sending an incoming payment request to the WM receiver.
5. The WM receiver responds with unique payment details needed for addressing the payment to the recipient.
6. The WM agent sends an outgoing payment request to the WM receiver. The request includes the payment details previously acquired, as well as the payment pointer of the sending account.

At this point, the payment is considered successful and the Web Monetization flow ends. It’s now up to the sending and receiving accounts to ensure the payment is settled.
