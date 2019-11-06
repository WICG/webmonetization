---
id: receiving
title: Web Monetization Receivers
sidebar_label: Receiving Payments
---

This page describes the functions of the Web Monetization receiver and how
existing payment services might become a receiver.

A receiver is an entity that accepts payments on behalf of a website and is
capable of receiving micropayments.

When a user has Web Monetization enabled in their browser and they visit a
monetized website, the browser resolves a unique receiving address for sending
payments to the website's receiver. The browser then begins sending payments
through the user's Web Monetization sender.

## Payment Pointers

A [payment pointer](https://paymentpointers.org) is a unique ID assigned to your
payment account by your receiver.

The expectation is that a receiver will issue one or more payment pointers to
its customers and these customers will embed the pointer into the websites they
want to monetize. The user's browser then fetches connection details from the
pointer to open a payment stream with the receiver.

Payment pointers resolve to secure URLs, making it possible for receivers to
redirect browsers to alternate addresses using standard HTTP redirects.

One benefit of payment pointers is that they provide a level of indirection that
allows browsers to protect the privacy of users from their senders. Specifically,
a browser uses a pointer in combination with a unique session ID to request
a unique receiving address and shared secret from the website's receiver. Only
the unique receiving address for the session is given  to the sender. This
prevents the sender from correlating a payment pointer with a website.

## Receiving Payments

Any entity that is able to accept payments on behalf of websites can be a
receiver if it supports the necessary protocols. To accept a stream of payments
on behalf of its users, a receiver **MUST** support the following protocols from
the Interledger stack:

* Interledger Protocol (ILP) - Establishes a micropayment stream and sends payments
* Simple Payment Setup Protocol (SPSP) - Exchanges payment information between
payee and payer to facilitate payment over ILP
* STREAM Protocol - Establishes packet-switched connections between entities
using the ILP

### Interledger Protocol (ILP)

The ILP establishes a micropayments stream and sends payments. Interledger
allows for payments to be sent at very high volumes and in very small
denominations. Payments are sent as Interledger packets, which are optimized for
this use case.

The receiver must set up a link into the Interledger network. More specifically,
the receiver must have an Interledger connection (direct or indirect) to any
Web-monetized senders that want to pay the receiver.

### Simple Payment Setup Protocol (SPSP)

The SPSP exchanges payment information between the receiver and sender to
facilitate payment over the ILP. The receiver must host a secure HTTP endpoint
that returns a unique receiving address and shared secret for each request.

> SPSP messages **MUST** be exchanged over HTTPS.

#### Example Response to an SPSP Request

1. Alice is a customer of _Secure Receiving Wallet Ltd._ who can act as a Web
Monetization receiver.
2. She is allocated the SPSP endpoint URL `https://securewallet.example/~alice`.
> This URL can also be expressed as a payment pointer: `$securewallet.example/~alice`.

3. A GET request is made to her SPSP endpoint URL with an `accept` header of `application/spsp4+json`.

```json
GET https://securewallet.example/~alice
Accept: application/spsp4+json
```

4. The server responds with a JSON response carrying the Interledger receiving
address and shared secret to use to open a payment stream with
_Secure Receiving Wallet_ and send Alice money.

```ts
{
  "destinationAccount": "test.example.hRWyGw4JzvFCdMUlEKd1kXPZ",
  "sharedSecret": "qobHsPWoyWh0gCQLx2e9x1bQeDikD4fdmYHGT52VKn8="
}
```

More details on SPSP can be found in [IL-RFC 0009 - Simple Payment Setup Protocol](https://interledger.org/rfcs/0009-simple-payment-setup-protocol/).

### STREAM Protocol

The STREAM protocol establishes packet-switched connections between entities
using the ILP. STREAM is loosely based on QUIC and provides similar features
over ILP that QUIC does over IP. STREAM stands for STREAMing Transport for the
Real-Time Exchange of Assets and Messages.

For an entity to be a receiver, it only needs to run a STREAM server, accept
connections, and handle the incoming payments sent over the connection.

The browser uses the connection parameters (ILP receiving address and shared
  secret) it acquired through [SPSP](#simple-payment-setup-protocol-spsp) to
  establish a STREAM connection with the receiver. Then, a stream of payments
  can be made to the receiver until the stream is closed.

Each set of connection parameters is unique and allows the receiver to
correlate the original SPSP request with the incoming connection. This makes it
easier for receivers to associate incoming payments with different user accounts
and Web Monetization sessions. I.e., a website can associate payments with a
user's session but the user's sender can't correlate the payments it makes with
the website.
