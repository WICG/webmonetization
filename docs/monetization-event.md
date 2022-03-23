---
id: monetization-event
title: MonetizationEvent
sidebar_label: MonetizationEvent
---
import Specifications from '@site/src/components/Specifications';

The **`MonetizationEvent`** interface of the [Web Monetization API](web-monetization-api.md) is the event object for web monetization events, which contains the amount, currency code and receipt.  

## Properties

- [amount](monetization-event-amount.md)
  - : An integer amount delivered by an ILP packet.
- [assetCode](monetization-event-asset-code.md)
  - : A string representing the currency code (eg USD, EUR)
- [assetScale](monetization-event-asset-scale.md)
  - : The scale of the amount 
- [receipt](monetization-event-receipt.md)
  - : The base-64 encoded Interledger Stream receipt that the browser received. 
- [paymentPointer](monetization-event-payment-pointer.md)
  - : A URL representing the payment end-point. 

## Events

## Examples

## Specifications

<Specifications link="events">Web Monetization API</Specifications>

## Browser Compatibility

