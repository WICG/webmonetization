/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface MonetizationEvent extends Event {
    readonly paymentPointer: string
    readonly incomingPayment: string
    readonly amountSent: PaymentCurrencyAmount
  }

  interface ElementEventMap {
    monetization: MonetizationEvent
  }

  interface Window {
    MonetizationEvent: MonetizationEvent
  }
}

export {}
