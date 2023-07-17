---
id: explainer
title: Web Monetization Explainer
sidebar_label: Web Monetization
---

import Hidden from '@site/src/components/Hidden';

Until now, there have been three popular ways that websites have monetized the traffic to their sites.

<ul><b>Ads:</b>  Pop-ups and banners distract users from the website's content.  </ul>

<ul><b>Affiliate marketing:</b>  Links embedded within a page that direct users away from the website to purchase goods or services from a third party.</ul>

<ul><b>Collecting and selling user data:</b>   Websites harvest their visitors' data or online behavior and then sell it to third parties.</ul>

Now there's another way that allows visitors to reward content creators directly without degrading the user experience or compromising users' privacy. The <b>Web Monetization (WM) API is a new proposed standard </b> that allows users to stream micropayments (i.e., fractions of a cent) directly from the user agent (i.e., browser) to the website. With Web Monetization, your website's content, not the users or third-party offerings, becomes the product!

With Web Monetization, websites can provide users with a "premium" experience, such as allowing access to exclusive content, removing advertising, or even removing the need to log in to access content or services.

<Hidden>[Skip straight to code...](#handle-payments)</Hidden>

## Goals

#### Payment

Provide websites with a way to collect multiple micropayments from users in exchange for consuming the site's content and services.

#### Frictionless user experience

Allow users to pre-approve payments in aggregate or delegate the authorization of individual micropayments to a component/service (a Web Monetization agent) that decides when and how much to pay websites without requiring user interaction.

#### User privacy

This system must preserve the user's privacy. It must not allow websites to track users based on the payments they make at other websites.

## Non-goals

#### Online purchases

Web Monetization enables micropayments. This distinction is essential because micropayments allow different levels of user consent, unlike larger payments, such as those used in traditional e-commerce.

## Flow overview

### Prerequisites

- Users must have an account or subscription with a **Web Monetization Provider** (also known as a WM sender). Alternatively, users may function as their own Web Monetization Provider using a digital wallet that supports Web Monetization.
- Users must have a **Web Monetization agent** installed in their browser with
  the necessary authorization to initiate payments from the WM provider on the
  user's behalf.
- Websites must sign up with, or run their own, **Web Monetization Receiver**.
  The WM Provider and WM Receiver do not need a direct relationship. Instead, they send and verify a series of micropayments through the Open Payments API.

### Sequence diagram

![diagram](/img/explainer-flow.svg)

### Flow

The numbers correspond to the diagram above. The flow is simplified to exclude some edge cases.

1.  Sites that support Web Monetization include a `<link>` tag containing a payment pointer. The browser (user agent) parses the tag to determine where to send payments.
2.  The browser uses its internal Web Monetization agent to retrieve an appropriate rate of payments from the WM provider extension, to make payments to the site.
3.  The browser creates an incoming payment for the session from the site's payment pointer URL.
4.  With the site's page still in focus, the browser begins initiating outgoing payments to the website at the calculated rate from the user's WM provider wallet.
5.  The WM provider notifies the browser of successful payments.
6.  The browser, in turn, dispatches an event that informs the page of the payment.
7.  (Optional) The page confirms payment by checking the incoming payment URL associated with the event.

## Why is a standard required?

Many services attempt to provide alternative means to monetize the Web and generate revenue for content creators and service providers without selling ads.

However, most of these require that the user and the creator/producer/service provider join a shared network that offers to facilitate the transactions between users and these services. The result is a fragmented web of closed content and service silos rather than the global and open Web we all desire.

Further, users sacrifice their privacy because the network provider collects payments from the user and pays out to the creator/producer/service provider. The network provider can thus correlate payment flows and gather data about which users access which services.

Web Monetization decouples the sender and the receiver. As the web monetization agent, the browser protects users' privacy by not revealing payments made by the user across different websites.

## Concepts

Web Monetization works with two complementary technologies that enable open and interoperable micropayments between providers and websites or receivers: Payment Pointers and the Open Payments API.

### Payment Pointers

Payment pointers are a convenient and concise way to express a URL that points
to a secure payment initiation endpoint on the Web.

Payment pointers resolve to an HTTPS URL using simple conversion rules.

Using payment pointers, systems that offer payment accounts can give users a
simple and easy-to-remember identifier for their account that's **safe to
share** with 3rd parties (unlike a credit card number) and is immediately
identifiable as a payment account identifier.

> **Example payment pointers:** `$alice.wallet.example` and `$wallet.example/alice`.
>
> These resolve to `https://alice.wallet.example/.well-known/pay` and `https://wallet.example/alice` respectively.

Websites that use Web Monetization require a destination address for their
payments (which they will get from their WM receiver). The address must be inserted
into the appropriate `link` tag.

For more details see https://paymentpointers.org.

### Open Payments

The Open Payments API provides a standard way for digital wallets to allow third-party applications to access and send funds based on the authorizations granted by the respective wallet owner.  
Open Payments allows applications to access a digital wallet through one or more of its payment pointers. The payment pointer also serves as the entry point for the API.

For more information, see https://openpayments.dev.

## Existing implementations

Please submit a PR if you are aware of updates to the lists below.

### Web Monetization receivers

- [GateHub](https://gatehub.net/)

### Web Monetization providers (senders)

- TBA

### Browsers

- Chromium + Web Monetization extension
