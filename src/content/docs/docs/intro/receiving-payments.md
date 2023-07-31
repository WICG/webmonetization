---
title: 'Receiving payments'
---

<div class="draft"><h5>Page Updates</h5><ul><li>This page is still a draft and is under review by Alex/Sabine/Mohammed</li><li>Add any appropriate links</li></ul></div>

The two key components of receiving a Web Monetization (WM) payment are:

- WM receivers
- Open Payments-enabled accounts

:::caution
This page describes the role of WM receivers within the Web Monetization ecosystem. It does not explain how to become a receiver.
:::

## WM receivers

A WM receiver is an entity that provides an Open Payments-enabled account into which payments can be received. Users interested in receiving Web Monetization payments can establish a relationship with a WM receiver of their choice by signing up for an account.

We anticipate most WM receivers to offer some form of digital wallet to their users. Many digital wallet providers, not just WM receivers, are often required to verify their users’ identities before allowing funds to be withdrawn.

## Open Payments and payment pointers

Web Monetization works with two complementary technologies that enable open and interoperable payments between WM providers and WM receivers: Open Payments and payment pointers.

### Open Payments

Accounts supplied by both WM providers and WM receivers must implement the <a href="https://openpayments.guide">Open Payments (OP) specification</a>.

The OP specification defines standards for **_access_** to accounts. When granted access, applications and other entities can integrate payments into their feature sets by connecting to their users’ accounts. The ability to then **_execute_** payments between OP-enabled accounts relies on the availability of a common payment rail between the accounts.

### Payment pointers

Access to an OP-enabled account, whether for sending or receiving, always starts with a <a href="https://paymentpointers.org" target="_blank">payment pointer</a>. A payment pointer is a unique, standardized identifier for an account that always resolves to an HTTPS URL.

When a user establishes an account with a WM receiver, the receiver assigns the account a payment pointer. The payment pointer allows certain account details to be safely shared with third-parties. Third-parties use the details to initiate payments to or from the account. A WM agent is an example of a third-party.

A payment pointer is required to web monetize a page and must be added as the `href` value within the monetization `<link>` element.

For example:

```html
<link rel="monetization" href="https://wallet.example/alice" />
```

For more information, visit [Add Web Monetization to a page](/docs/guides/monetize-page).

The WM agent uses the payment pointer to begin the money movement process.

## Receiving a payment

When a user visits a web monetized page, the user’s WM agent detects the monetization `<link>` element and associated payment pointer. The WM agent sends a request to the payment pointer, which is the beginning of a series of API calls needed to:

1. Get the details about the underlying receiving account
2. Receive permission to send a payment to the account
3. Create a payment session within the user’s browser tab/window
4. Create the outgoing payment request

When the payment is successful, the funds are deducted from the WM provider’s account and deposited into the WM receiver’s account.

For more information, visit the [Web Monetization flow](/docs/intro/web-monetization-flow) page.

## Specifying a payment amount

Web Monetization does not enable a site to specify the amount it wants to receive. The amount, frequency, and other payment parameters are controlled by the web monetized visitor, through their relationship with their WM provider.

If a site should specify a price, then integration with the W3C’s <a href="https://www.w3.org/TR/payment-request" target="_blank">Payment Request API</a> may be a better alternative to Web Monetization. The Payment Request API allows sites to ask to be paid a certain amount, then the browser (typically with the user’s approval) pays that amount.
