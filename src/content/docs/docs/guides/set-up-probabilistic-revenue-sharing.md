---
title: Set up probabilistic revenue sharing
---

<div class="draft"><h5>Page Updates</h5><ul><li>Update Glitch example's README</li><li>Change all references to $example.com/ to $wallet.example/ on page and in Glitch</li><li>Use transclusion for the blurbs in the Interactive example(s)</li></ul></div>

Since a monetization `<link>` element only supports one payment pointer as its `href` value, how do you share a portion of a web monetized page's earnings?

One way is through probabilistic revenue sharing. Probabilistic revenue sharing works by randomly choosing from a list of predefined payment pointers each time a web monetized visitor loads the page. Payments are sent to the randomly chosen payment pointer until the visitor reloads or closes the page.

A payment pointer's chance of being chosen is based on its assigned weight. For example, if Alice's payment pointer has a weight of 50 (out of 100), then her payment pointer has a 50% chance of being chosen. The laws of probability state that Alice's share of the page's total revenue will approach 50% as more web monetized visitors access the page.

## Example

The example below shows how to define a list of weighted payment pointers. The easiest way to establish weight is to assign values that add up to 100.

```html
<head>
  <script>
    // Define your revenue share here.
    // If the weights add up to 100 then they represent the percent each payment pointer gets.
    const pointers = {
      '$example.com/alice': 50,
      '$example.com/bob': 40,
      '$example.com/connie': 9.5,
      '$example.com/dave': 0.5,
    }

    function pickPointer() {
      const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
      let choice = Math.random() * sum

      for (const pointer in pointers) {
        const weight = pointers[pointer]
        if ((choice -= weight) <= 0) {
          return pointer
        }
      }
    }

    window.addEventListener('load', () => {
      const monetizationTag = document.createElement('link')
      monetizationTag.rel = 'monetization'
      monetizationTag.href = pickPointer()

      document.head.appendChild(monetizationTag)
    })
  </script>
</head>
```

### How it works

First, we list the payment pointers and assign each one a weight.

If the combined weights equal 100, then each weight represents the percentage at which each payment pointer will be chosen. For example, `$example.com/connie` has a 9.5% chance of being chosen, resulting in Connie's share approaching 9.5% of the page's total revenue as more web monetized visitors access the site.

```js
const pointers = {
  '$example.com/alice': 50,
  '$example.com/bob': 40,
  '$example.com/connie': 9.5,
  '$example.com/dave': 0.5,
}
```

:::info
Since this method bypasses the need to include a monetization `<link>` element, you can choose to use a payment pointer's shorthand form (e.g., `$example.com/alice`) rather than the endpoint URL that the payment pointer resolves to (e.g. `https://example.com/bob`).
:::

Next, we define the function to cause payment pointers to be chosen based on weight.

```jsx
function pickPointer() {
  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
  let choice = Math.random() * sum

  for (const pointer in pointers) {
    const weight = pointers[pointer]
    if ((choice -= weight) <= 0) {
      return pointer
    }
  }
}
```

Finally, we add the code that dynamically inserts the randomly chosen payment pointer into the page on each load/refresh.

```jsx
window.addEventListener('load', () => {
  const monetizationTag = document.createElement('link')
  monetizationTag.rel = 'monetization'
  monetizationTag.href = pickPointer()

  document.head.appendChild(monetizationTag)
})
```

### Interactive example

This example shows how the random choices will approach the correct percentages over enough tries. You can customize the number of times to randomly choose a pointer and it will show you the results. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring.

If you see the source files instead of the example, click **View App** in the bottom right.

<iframe
  src="https://glitch.com/embed/#!/embed/wm2-probablistic-revenue-share?path=README.md&previewSize=100"
  title="probabalistic-revenue-share-experiment on Glitch"
  style='height:100%;width:100%;border:0;min-height:420px'>
</iframe>
