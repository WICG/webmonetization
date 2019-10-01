---
id: sending
title: Web Monetization Senders
sidebar_label: Senders
---

A WM sender is responsible for making payments to WM receivers. It interfaces
with a user's browser which sends it payment instructions including who to pay,
when and how much.

## Payment Handler API

Our expectation is the WM Sender will manifest as a Payment Handler as follows.

### `monetization` Payment Method

Payment Handlers that are able to act as WM Senders MUST register themselves
with the platform as supportive of the `monetization` payment method.

The `monetization` payment method identifier will be registered as a
[Standardized Payment Method](https://www.w3.org/TR/payment-method-id/#standardized-payment-method-identifiers)
through the Web Payments WG at W3C.

### `PaymentRequestEvent` Event

Whenever the browser decides to send a payment via the WM Sender it will emit a
[`PaymentRequestEvent`](https://www.w3.org/TR/payment-handler/#the-paymentrequestevent)
with only a single
[`PaymentMethodData`](https://www.w3.org/TR/payment-request/#paymentmethoddata-dictionary)
dictionary in the `PaymentRequestEvent.methodData` property.

This dictionary will have the value `monetization` in the `supportedMethods`
property and `data` will be an instance of a
[`MonetizationRequest`](#monetizationrequest-dictionary) containing the
destination address to send to and the condition and expiry values to use.

The Payment Handler will use this to send a single Interledger payment to the
provided address, using the provided condition, expiry and data, and for the
amount specified in `PaymentRequestEvent.total`.

`PaymentRequestEvent.total` is an instance of
[PaymentCurrencyAmount ](https://www.w3.org/TR/payment-request/#paymentcurrencyamount-dictionary)
specifying both an amount and a currency.

If the Payment Handler is unable to send in the specified currency then it
should call `PaymentRequestEvent.respondWith()` and provide a rejected Promise
indicating that the payment failed.

> **ISSUE**: Do we need to indicate WHY this payment failed? Maybe an error code?
> 
> See [Issue #13](https://github.com/adrianhopebailie/web-monetization/issues/13)

When it has completed the payment it invokes `PaymentRequestEvent.respondWith()`
passing in a Promise that resolves to an instance of
[`MonetizationResponse`](#monetizationresponse-dictionary) containing the
fulfillment and data from the response.

> **ISSUE**: The `PaymentRequestEvent` currently includes the origin of the
> calling website. Should this be removed for Monetization to preserve the
> user's privacy?
> 
> See [Issue #10](https://github.com/adrianhopebailie/web-monetization/issues/10)


### `MonetizationRequest` Dictionary

The data in the MonetizationRequest that is emitted to the Payment Handler
contains the destination address for the payment and the condition, expiry and
data to use in the Interledger packet.

```webidl
  dictionary MonetizationRequest {
    required DOMString destination;
    required DOMString condition;
    required DOMString expiry;
    DOMString data;
  };
```

| Field       | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| destination | The ILP Address provided by the WM Receiver for this session. |
| condition   | 32 bytes, base64 encoded condition to use for the ILP packet. |
| expiry      | Expiry to use for the ILP packet                              |
| data        | base64 encoded additional data to send in the ILP packet.     |

### `MonetizationResponse` Dictionary

The data in the MonetizationResponse that is sent by the Payment Handler
contains the fulfillment from the successful payment and the data from the
fulfill packet.

```webidl
  dictionary MonetizationRequest {
    required DOMString fulfillment;
    DOMString data;
  };
```

| Field       | Description                                               |
| ----------- | --------------------------------------------------------- |
| fulfillment | 32 bytes, base64 encoded fulfillment from the ILP packet. |
| data        | base64 encoded additional data from the ILP packet.       |

## Questions about Authorization

When the Payment Handler is invoked (handling a new `PaymentRequestEvent`) it is
expected to send a payment on behalf of the user.

If the Payment Handler is not currently authorized to send payments then it can
either invoke the `PaymentRequestEvent.openWindow()` to provide UI to the user
to login and authorize it OR it can reject the request (by passing a rejected
Promise to `PaymentRequestEvent.respondWith()`) and let the browser handle this
case.

The former is quite intrusive on the user experience unless this is throttled by
the browser in some way but the latter is likely to result in a lot of failures
that go undetected.

## Supporting Payment Streams

As detailed in the [explainer](./explainer.md), the user's browser will get a
unique receiver address and shared secret for each page refresh/navigation (a
monetization session).

This specification assumes the browser will then handle the generation of a new
condition (using the shared secret) for each payment that it wishes to send.

It should be noted that the browser will then emit multiple
`PaymentRequestEvent` events (one for each payment it sends) which is in
contrast to how this event is expected to be emitted when the a website creates
a PaymentRequest and the event is being emitted as a result of the website
calling `show()` and the user selecting a payment instrument.

In the latter case only a single event is emitted and the calling website waits
for the Promise returned by `show()` to resolve the value passed by the Payment
Handler to `respondWith()`.

While this proposal requires minimal changes to the Payment Handler API
specification it does imply some changes to the
[Handling a Payment Request](https://www.w3.org/TR/payment-handler/#handling-a-payment-request)
and
[MethodData Population](https://www.w3.org/TR/payment-handler/#dfn-methoddata-population-algorithm)
algorithms.
