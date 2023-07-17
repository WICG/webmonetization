---
id: link-type
title: Link types
sidebar_label: Link types
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

| Link Type      | Description                                                                                                                                                   | Allowed in these elements | Not Allowed in these elements |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------- |
| `Monetization` | Indicates that some content on the page is monetized. The `href` attribute must contain a url representing a [payment pointer](https://paymentpointers.org/). | `<link>`                  | `<a>`, `<area>`, `<form>`     |

## Specifications

<Specifications link="link-type-monetization">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat dataFileName="linktypes">Web Monetization API</BrowserCompat>
