---
id: receiving
title: Receiving Payments
sidebar_label: Receiving Payments
---

When a user has Web Monetization (WM) enabled in their browser and they visit a
monetized website, the browser resolves a unique receiving address for payments
to the website's WM receiver.

The browser then begins sending payments to the website's receiving address
through the user's WM Sender.

This page describes the functions of the Web Monetization Receiver and how
existing payment services might become a WM receiver.

## Payment Pointer

The website specifies a [Payment Pointer](https://paymentpointers.org) from
which the browser fetches connection details to
[open a payment stream](#open-a-stream) with the receiver.

Since the Payment Pointer is a URL it is possible for the host of the Payment
Pointer to redirect the browser to an alternate address using standard HTTP
redirects.

The expectation is that a WM Receiver will issue one or more payment pointers to
it's users and they will embed this into their websites that they wish to
monetize.

One of the benefits of the Payment Pointer is it provides a level of indirection
that allows the browser to protect the privacy of the user from the WM Sender.

Specifically, the browser uses the Payment Pointer in combination with a unique
session id to request a unique receiving address for payments for each session.
Only the receiving address is given to the WM Sender.

The WM Sender never sees the Payment Pointer (which is easy to correlate to the
website), only the address which is unique for each session.

## Receiving Payments

Any entity that is able to accept payments on behalf of websites can be a Web
Monetization receiver if it offers support for the necessary protocols.

The protocol for establishing a micropayments stream and sending payments is the
Interledger protocol. Interledger allows for payments to be sent at very high
volumes and in very small denominations.

Payments are sent as Interledger packets which are optimised for this use case.

To accept a stream of micropayments on behalf of its users a WM receiver MUST
support 3 protocols from the Interledger stack:

#### Simple Payment Setup Protocol (HTTPS)

The receiver must host a secure HTTP endpoint that returns a unique receiving
address and shared secret for each request.

##### Example: Respond to an SPSP request

- _Alice_ is a customer of _Secure Wallet_ who are able to act as a WM Receiver.
- She is allocated the SPSP endpoint URL `https://securewallet.example/~alice`
- This URL can also be expressed as a Payment Pointer:
  `$securewallet.example/~alice`
- When a GET request is made to `https://securewallet.example/~alice` with the
  `accept` header of `application/spsp4+json` then the server responds with a
  JSON response carrying the Interledger address and a shared secret to use to
  [open a payment stream](#open-a-stream) with _Secure Wallet_ and send Alice
  money.

More details on SPSP can be found in
[IL-RFC 0009 - Simple Payment Setup Protocol](https://interledger.org/rfcs/0009-simple-payment-setup-protocol/).

#### Interledger Protocol

The next service that the receiver MUST setup is a link into the Interledger
network. More specifically, the receiver must have an Interledger connection
(direct or indirect) to any WM senders that wish to pay the WM receiver.

Initially we expect the number of senders and receivers to be small and they
will likely connect to each other directly but in time there will be a need for
intermediary aggregators that are licensed to accept payments from senders and
aggregate and pay these out to receivers.

#### STREAM Protocol

The STREAM protocol is used to establish packet switched connections between
entities using the Interledger protocol. It is loosely based on QUIC and
provides similar features over ILP that QUIC does over IP.

For the purposes of being a WM receiver an entity only needs to run a STREAM
server, accept connections and handle the incoming payments sent over the
connection.

The ILP Address and shared secret acquired by the browser through SPSP
([see above](#-Simple-Payment-Setup-Protocol-HTTPS)) is used by the browser to
establish a STREAM connection with the WM receiver, following which a stream of
payments can be made to the receiver until finally the stream is closed by the
client.

Each set of connection parameters (ILP Address and shared secret) is unique and
allows the receiver to correlate the original SPSP request with the incoming
connection. This makes it easier for receivers to associate incoming payments
with different user accounts and Web Monetization sessions. i.e. The website can
associate payments with a user session but the user's WM Sender can't correlate
the payments it makes with a website.
