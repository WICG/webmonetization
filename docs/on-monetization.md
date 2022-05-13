---
id: on-monetization
title: GlobalEventHandlers.onmonetization
sidebar_label: onmonetization
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

The **`onmonetization`** property of the
`GlobalEventHandlers` mixin is the event handler for
processing monetization events sent to the window.

## Syntax

```js
window.onmonetization = functionRef;
```

## Examples

```js
window.onmonetization = function() {
  alert('Web Monetization event triggered.');
}
```

## Specifications

<Specifications link="onmonetization-event-handler">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="onmonetization.json">Web Monetization API</BrowserCompat>