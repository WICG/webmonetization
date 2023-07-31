---
title: 'Sending payments'
---

<div class="draft"><h5>Page Updates</h5><ul><li>This page is still a draft and is under review by Alex/Sabine/Mohammed</li><li>Add any appropriate links</li></ul></div>

The three key components of sending a Web Monetization (WM) payment are:

- WM providers
- Open Payments-enabled accounts
- WM agents

:::caution
This page describes the roles of WM providers and WM agents within the Web Monetization ecosystem. It does not explain how to become a provider or develop an agent.
:::

## WM providers

For a user to send a Web Monetization payment, the user must have some kind of relationship with a WM provider. A WM provider is an entity that provides a funded Open Payments-enabled account from which payments can be sent. A provider can take a number of different forms, such as:

- A company that uses its own account to make payments on behalf of its users
- An app that’s authorized to hook directly into a user’s personal account
- A user that hooks their personal account up to a WM agent

In addition to providing accounts, WM providers are responsible for defining the payment models they support and implementing business logic and rules. For example, a WM provider might:

- Only send payments in fiat currencies
- Support one-time payments and micropayments, but not real-time streaming payments
- Stream real-time payments at a fixed rate, for example $0.006 per minute
- Allow user-defined payout rates, frequencies, limits, and so on

For a provider to send a Web Monetization payment on behalf of a user, the provider must support the Open Payments specification.

## Open Payments and payment pointers

Web Monetization works with two complementary technologies that enable open and interoperable payments between WM providers and WM receivers: Open Payments and payment pointers.

### Open Payments

Accounts supplied by both WM providers and WM receivers must implement the <a href="https://openpayments.guide" target="_blank">Open Payments (OP) specification</a>.

The OP specification defines standards for **_access_** to accounts. When granted access, applications and other entities can integrate payments into their feature sets by connecting to their users’ accounts. The ability to then **_execute_** payments between OP-enabled accounts relies on the availability of a common payment rail between the accounts.

### Payment pointers

Access to an OP-enabled account, whether for sending or receiving, always starts with a <a href="https://paymentpointers.org" target="_blank">payment pointer</a>. A payment pointer is a standardized identifier for a payment account and always resolves to an HTTPS URL.

A payment pointer allows certain account details to be safely shared with third-parties. Third-parties use the details to initiate payments to or from the account. A WM agent is an example of a third-party.

Depending on which form a WM provider takes, the user may not know, nor have a need to know, any details about a sending account's payment pointer.

## WM agents

One goal of Web Monetization is for the standard to be natively built into web browsers. But we aren’t there yet. For now, users must install a separate WM agent, such as an extension, into their browsers.

The WM agent is code that discovers web monetized pages, exposes the Web Monetization API, and communicates via the Open Payments API to obtain authorization and issue instructions for making a payment.

### How it works

The WM agent checks each page the user visits for a monetization `<link>` element. A monetization `<link>` element must contain a payment pointer. For example:

```html
<link rel=”monetization” href=”https://wallet.example/alice”>
```

When detected, the WM agent begins a series of API calls to:

1. Get the details about the underlying account
2. Receive permission to send a payment to the account
3. Create a payment session within the user’s browser tab/window
4. Create the outgoing payment request

Visit the [Add Web Monetization to a page](/docs/guides/monetize-page) and [Web Monetization flow](/docs/intro/web-monetization-flow) pages for more information.

### Linking a WM agent to a provider

The Interledger Foundation is currently developing an open-source WM agent for users (release date TBD). WM providers could also choose to develop their own WM agents. Regardless of who supplies a user’s WM agent, the agent must have a way to link to a provider. For example, a browser extension could allow the user to select and sign in to their provider from within the extension UI. By signing in, the user authorizes the extension to obtain settings from the provider and send payments on their behalf.

Note that the Web Monetization specification itself doesn’t define the interface between the browser and the WM provider. This is intentional. How a browser ultimately chooses to allow WM providers to integrate is up to the browser. We feel that a browser’s extension system is the ideal way to support integration.