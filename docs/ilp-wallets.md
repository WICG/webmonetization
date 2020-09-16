---
id: ilp-wallets
title: Digital Wallet and Payment Pointers
sidebar_label: Digital wallets and payment pointers
---

You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site.

Your wallet provider will assign you a payment pointer, which is the public address for your wallet. You'll add your payment pointer as the `content` value in your `<meta>` tag.

## Digital wallets

The following providers offer ILP-enabled wallets.

| | <center><img src="./assets/uphold.svg" /></center> | <center><img src="./assets/gatehub.png" /></center> |
| :-: |:-:|:-:|
| **Payout currencies** | 27 fiat currencies <br /> 34 crypto currencies <br /> [See full list](https://uphold.com/en/transparency) | XRP |
| **Withdrawal currencies** | USD, EUR, GBP, CAD, PLN, XRP, BTC, ETH, +59 more <br /> [See full list](https://uphold.com/en/transparency) | XRP, USD, EUR, BTC, ETH |
| **Bank connection** | ACH, SEPA, Wire, UK FPS | SEPA, Wire |
| **Fees** | None | SEPA: 1.00 EUR < 50,000 EUR<br />Wire: $15 min ($150 max) |
| **Payment pointer prefix** | $ilp.uphold.com/ | $ilp.gatehub.net/	|

## Payment pointers

A payment pointer is a public address to your ILP-enabled wallet. Your wallet provider assigns you a payment pointer during account setup. If you're having trouble finding your payment pointer, check out these instructions:

* GateHub - [Find your payment pointer](gatehub#find-your-payment-pointer)
* Uphold - [Find your payment pointer](uphold#find-your-payment-pointer)
