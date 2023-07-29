---
title: 'HTML <link> rel: monetization'
---

<div class="draft"><div class="title">Page Updates</div><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li></li><li></li></ul></div>

The `<link>` element enables you to [add Web Monetization to an HTML document](/docs/guides/monetize-page). The `rel` value must be `monetization`. The `href` value must be a URL representing a payment pointer. 

```html
<link rel="monetization" href="https://wallet.example/alice">
```

While an HTML document can contain multiple `<link>` elements, the behavior that occurs due to multiple monetization `<link>` elements is undefined. As a best practice, we recommend adding no more than one monetization link per HTML document.

## Payment pointers

The first version of the Web Monetization spec favored `<meta>` over `<link>`. The `<meta>` element supported payment pointers written in shorthand form (e.g., `$wallet.example/alice`). 

The `<link>` element doesn't support shorthand and requires the `href` value be the URL that the payment pointer resolves to (e.g., `https://wallet.example/alice`).

If you need help converting a payment pointer from shorthand to its equivalent URL, enter your payment pointer into the input field on <a href="https://paymentpointers.org" target="_blank">paymentpointers.org</a>. In most cases, you can simply replace the `$` with `https://`. 