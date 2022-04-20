---
id: on-monetization
title: GlobalEventHandlers.onmonetization
sidebar_label: onmonetization
---
import Specifications from '@site/src/components/Specifications';

The **`onmonetization`** property of the
`GlobalEventHandlers` mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
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

<Specifications link="link-type-monetization">Web Monetization API</Specifications>

## Browser compatibility

onmonetization
