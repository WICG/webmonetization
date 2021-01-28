---
id: sending
title: Web Monetization Providers (Sending Payments)
sidebar_label: Sending payments
---

> This page is a proposal for how browsers can implement Web Monetization. All
> information is considered experimental and conversations are ongoing. If you
> are a content creator you can skip this page.

This page describes the functions of the Web Monetization provider and
how the provider could manifest as a payment handler. Web Monetization providers
are also known as Web Monetization senders.

A Web Monetization sender is a digital entity that makes payments on behalf of
a user and is capable of sending micropayments to Web Monetization receivers.

The Web Monetization sender interfaces with a browser so the Web Monetization
agent (e.g. extension) can send payment instructions, such as who to pay, when,
and how much.

## Payment Handler API

Our expectation is the Web Monetization (WM) sender will manifest as a payment
handler as follows.

The WM sender interface leverages the Payment Handler API. The API contains
capabilities that enable web applications to handle requests for payments. You
can read the working draft of the spec on the
[W3C website](https://www.w3.org/TR/payment-handler/).

The Payment Handler API aligns well with the model anticipated for WM senders:
A WM sender could manifest as a specialized payment handler capable of returning
not just a `PaymentResponse` but also a handle to a stream of micropayments.

### `monetization` - payment method

Payment handlers able to act as WM senders **MUST** register themselves with the
platform as supportive of the `monetization` payment method.

The `monetization` payment method identifier will be registered as a
[standardized payment method](https://www.w3.org/TR/payment-method-id/#standardized-payment-method-identifiers)
through the Web Payments WG at W3C.

### `PaymentRequestEvent` - event

When the user's browser sends a payment via the WM sender, the browser emits a
[`PaymentRequestEvent`](https://www.w3.org/TR/payment-handler/#the-paymentrequestevent).

The `PaymentRequestEvent` contains a single
[`PaymentMethodData`](https://www.w3.org/TR/payment-request/#paymentmethoddata-dictionary)
dictionary in the `PaymentRequestEvent.methodData` property.

The `PaymentMethodData` dictionary contains the value `monetization` in the
`supportedMethods` property. `data` is an instance of a
[`MonetizationRequest`](#monetizationrequest---dictionary) containing the
destination (WM receiver) address to send to, the condition, and expiry values
to use. The payment handler uses this data to send a single Interledger payment
to the destination address. The amount sent by the payment handler is the amount
specified in `PaymentRequestEvent.total`. `PaymentRequestEvent.total` is an
instance of [`PaymentCurrencyAmount`](https://www.w3.org/TR/payment-request/#paymentcurrencyamount-dictionary)
specifying both an amount (`value`) and a `currency`.

```webidl
dictionary PaymentCurrencyAmount {
  required DOMString currency;
  required DOMstring value;
};
```

The payment handler then invokes `PaymentRequestEvent.respondWith()`:

```ts
paymentRequestEvent.respondWith(
    // Promise that resolves with a PaymentResponse.
  )
```

And responds with either a pass or a fail:
* Pass - passes in a `Promise` that resolves to an instance of
[`MonetizationResponse`](#monetizationresponse---dictionary) containing the
fulfillment and data from the response.
> [Issue 15 - Should Web Monetization senders know origin of the monetized website?](https://github.com/WICG/webmonetization/issues/15)<p>The `PaymentRequestEvent` currently includes the origin of the calling website. Should this be removed for monetization to preserve the user's privacy?</p>

* Fail - provides a rejected `Promise` indicating that the payment failed
because the handler was unable to send in the specified currency.
> [Issue 18 - Indicate Failure Reasons from Web Monetization Sender](https://github.com/WICG/webmonetization/issues/18)

For more information about the JavaScript `Promise` object, see the
[MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### `MonetizationRequest` - dictionary

The data in the `MonetizationRequest` emitted to the payment handler contains
the destination (WM receiver) address for the payment, the condition, expiry,
and data to use in the Interledger packet.

```webidl
  dictionary MonetizationRequest {
    required DOMString destination;
    required DOMString condition;
    required DOMString expiry;
    DOMString data;
  };
```

| Property    | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| destination | The ILP address of the WM receiver for this session. |
| condition   | 32 bytes, base64-encoded condition to use for the ILP packet. The WM receiver must be able to fulfill this condition. |
| expiry      | Expiration date and time for when the ILP packet expires.     |
| data        | Base64-encoded additional data to send in the ILP packet.     |

### `MonetizationResponse` - dictionary

The data in the `MonetizationResponse` that is sent by the payment handler
contains the fulfillment from the successful payment and the data from the
fulfill packet.

```webidl
  dictionary MonetizationRequest {
    required DOMString fulfillment;
    DOMString data;
  };
```

| Property    | Description                                               |
| ----------- | --------------------------------------------------------- |
| fulfillment | 32 bytes, base64-encoded fulfillment from the ILP packet (returned by the payee). |
| data        | Base64-encoded additional data received from the ILP packet. |

## Open authorization issues

When the payment handler is invoked (handling a new `PaymentRequestEvent`) it's
expected to send a payment on behalf of the user.

If the payment handler is not authorized to send payments it can either:
* Invoke `PaymentRequestEvent.openWindow()` to provide a UI to the user to log
in and authorize the payment
* Reject the request by passing a rejected `Promise` to
`PaymentRequestEvent.respondWith()` and let the browser handle the case

_Invoke_ is quite intrusive on the user experience unless it's throttled by the
browser in some way. _Reject_ is likely to result in a lot of failures that go
undetected.

## Supporting payment streams

As detailed in the [explainer](explainer.md), the user's browser receives a
unique destination address and shared secret for each monetization session (e.g.
  page refresh, navigation). This specification assumes that the browser will
  handle the generation of a new condition using the shared secret for each
  payment it wants to send.

Note that the browser will then emit multiple `PaymentRequestEvent` events (one
  for each payment). This is in contrast to how the event is expected to be
  emitted. The expectation is that a website creates a single `PaymentRequest`
  event. The single event is emitted as a result of the website calling `show()`
  and the user selecting a payment instrument. In this case (with a single
    event), the calling website waits for the `Promise` returned by `show()`,
    then resolves the value passed by the payment handler to `respondWith()`.

While this proposal requires minimal changes to the Payment Handler API
specification it does imply some changes to the
[Handling a Payment Request](https://www.w3.org/TR/payment-handler/#handling-a-payment-request)
and [MethodData Population](https://www.w3.org/TR/payment-handler/#dfn-methoddata-population-algorithm)
algorithms.
