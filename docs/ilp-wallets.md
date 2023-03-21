---
id: ilp-wallets
title: Digital Wallet and Payment Pointers
sidebar_label: Digital wallets and payment pointers
---

import GateHubImg from './assets/gatehub.png';

You must have an account with a wallet that supports the Interledger Protocol (ILP) to enable Web Monetization on your site.

Your wallet provider will assign you a payment pointer, which is the public address for your wallet. You'll add your payment pointer as the `href` value in your `<link>` tag.

## Digital wallets

The following providers offer ILP-enabled wallets.

| |  <center><img src={GateHubImg}/></center> |
| :-: |:-:|
| **Payout currencies** | XRP 
| **Withdrawal currencies** |  XRP, USD, EUR, BTC, ETH |
| **Bank connection** | SEPA, Wire |
| **Fees** | SEPA: 1.00 EUR < 50,000 EUR<br />Wire: $15 min ($150 max) |
| **Payment pointer prefix** |  $ilp.gatehub.net/	|

## Payment pointers

A payment pointer is a public address to your ILP-enabled wallet. Your wallet provider assigns you a payment pointer during account setup. If you're having trouble finding your payment pointer, check out these instructions:

* [GateHub](https://gatehub.net) - [Find your payment pointer](gatehub.md#find-your-payment-pointer)
