---
title: 'paymentPointer'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Verify example</li></ul></div>

The `MonetizationEvent` `paymentPointer` property returns a URL representing the payment endpoint.

## Value

A URL representing the payment pointer that has been monetized. The returned value is the value it was initialized with.

## Example

```html
<link rel="monetization" href="https://wallet.example/alice" />
<script>
  const link = document.querySelector(“link[rel=‘monetization’]“);
  link.addEventListener(“monetization”, (event) => {
  console.log(event.paymentPointer)})
</script>
```
