---
id: receiving
title: Web Monetization Receivers
sidebar_label: Receiving payments
---

This page describes the functions of the Web Monetization (WM) receiver and how
existing payment services might become a WM receiver.

A WM receiver is a digital entity that accepts payments over Interledger
on behalf of a website and is capable of receiving micropayments.

When a user has Web Monetization enabled in their browser and they visit a
monetized website, the browser resolves a unique receiving address for sending
payments to the website's WM receiver. The browser then begins sending payments
through the user's WM sender.

## Payment pointers

A [payment pointer](https://paymentpointers.org) is a unique URL assigned to your
payment account by your WM receiver.

The expectation is that a WM receiver will issue one or more payment pointers to
its customers and these customers will embed the pointer into the websites they
want to monetize. The user's browser then fetches connection details from the
pointer to open a payment stream with the WM receiver.

Payment pointers resolve to secure URLs, making it possible for WM receivers to
redirect browsers to alternate addresses using standard HTTP redirects.

One benefit of payment pointers is that they provide a level of indirection that
allows browsers to protect the privacy of users from their WM senders. Specifically,
a browser uses a pointer to request a unique destination address and shared
secret from the website's WM  receiver. Only the unique destination address
for the session is given to the WM sender. This prevents the WM sender from
correlating a payment pointer with a website.

## Receiving payments

Any entity that is able to accept payments on behalf of websites can be a WM
receiver if it supports the necessary protocols. To accept a stream of payments
on behalf of its users, a WM receiver **MUST** support the following protocols
from the Interledger stack:

* Interledger Protocol (ILP) - Establishes a micropayment stream and sends payments
* Simple Payment Setup Protocol (SPSP) - Exchanges payment information between
payee and payer to facilitate payment over ILP
* STREAM Protocol - Establishes micropayment streams between entities using the ILP

### Interledger protocol (ILP)

The ILP routes individual micropayments. Interledger allows for payments to be
sent at very high volumes and in very small denominations. Payments are sent as
Interledger packets, which are optimized for this use case.

The WM receiver must set up a link into the Interledger network. More specifically,
the WM receiver must have an Interledger connection (direct or indirect) to any
web monetized senders that want to pay the WM receiver.

### Simple Payment Setup protocol (SPSP)

The SPSP exchanges payment information between the WM receiver and WM sender to
facilitate payment over the ILP. The WM receiver must host a secure HTTP endpoint
that returns a unique destination address and shared secret for each request.

> SPSP messages **MUST** be exchanged over HTTPS.

#### Example Response to an SPSP request

1. Alice is a customer of _Secure Receiving Wallet Ltd._ who can act as a Web
Monetization receiver.
2. She is allocated the SPSP endpoint URL `https://securewallet.example/~alice`.
> This URL can also be expressed as: `$securewallet.example/~alice`.

3. A GET request is made to her SPSP endpoint URL with an `accept` header of `application/spsp4+json`.

```json
GET https://securewallet.example/~alice
Accept: application/spsp4+json
```

4. The server responds with a JSON response carrying the Interledger destination
address and shared secret to open a payment stream with
_Secure Receiving Wallet_ and send Alice money.

```ts
{
  "destination_account": "test.example.hRWyGw4JzvFCdMUlEKd1kXPZ",
  "shared_secret": "qobHsPWoyWh0gCQLx2e9x1bQeDikD4fdmYHGT52VKn8="
}
```

More details on SPSP can be found in
[IL-RFC 0009 - Simple Payment Setup Protocol](https://interledger.org/rfcs/0009-simple-payment-setup-protocol/).

### STREAM protocol

The STREAM protocol establishes micropayment streams between entities using the
ILP. STREAM is loosely based on QUIC and provides similar features over ILP that
QUIC does over IP. STREAM stands for STREAMing Transport for the Real-Time
Exchange of Assets and Messages.

For an entity to be a WM receiver, it only needs to run a STREAM server, accept
connections, and handle the incoming payments sent over the connection.

The browser uses the connection parameters (ILP destination address and shared
secret) it acquired through [SPSP](#simple-payment-setup-protocol-spsp) to
establish a STREAM connection with the WM receiver. Then, a stream of payments
can be made to the WM receiver until the stream is closed.

Each set of connection parameters is unique, meaning the user's WM sender can't
correlate the payments it makes with the website.

The WM receiver may issue payment receipts via the STREAM connection. The
browser can submit receipts to the web page allowing the page to verify payment
during a user's session.
