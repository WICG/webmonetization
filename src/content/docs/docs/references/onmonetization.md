---
title: 'GlobalEventHandlers: onmonetization'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Check tooltip definition</li><li>Verify example</li></ul></div>

The `onmonetization` attribute of the <span data-text="Describes event handlers common to several interfaces like HTMLElement, Document, or Window" class="tooltip">`GlobalEventHandlers` mixin</span> is used to process `monetization` events sent to the `Window`.

`onmonetization` can be applied to any element and is used by the user agent (such as a web browser or WM agent) to notify that some `<link>` element has been monetized.

## Syntax

```js
window.onmonetization = functionRef
```

## Example

Show a visitor an alert box and message when a Web Monetization event is triggered.

```js
window.onmonetization = function () {
  alert('Web Monetization event triggered.')
}
```
