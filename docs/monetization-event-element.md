---
id: monetization-event-element
title: 'HTMLElement: monetization'
sidebar_label: monetization
---

import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The `monetization` event is fired on a `<link rel="monetization">` element when a Web Monetization payment has successfully happened on the associated payment pointer.

<table className="event-properties">
  <tbody>
    <tr>
      <td><strong>Bubbles</strong></td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><strong>Cancelable</strong></td>
      <td>No</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td><a href="/docs/monetization-event">MonetizationEvent</a></td>
    </tr>
    <tr>
      <td><strong>Event handler property</strong></td>
      <td><a href="/docs/on-monetization">onmonetization</a></td>
    </tr>
  </tbody>
</table>

The `monetization` event fires after a Web Monetization payment has been successfully received by the payment pointer, and the confirmation has been sent back to the browser.

## Examples

```html
<link rel="monetization" href="https://example.com/pay" />
<script>
  const link = document.querySelector('link[rel="monetization"]')

  link.addEventListener('monetization', (event) => {
    console.log('Web Monetization payment received!')
  })
</script>
```

## Specifications

<Specifications link="onmonetization-event-handler">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="monetization.json">Web Monetization API</BrowserCompat>
