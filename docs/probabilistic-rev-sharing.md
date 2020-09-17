---
id: probabilistic-rev-sharing
title: Probabilistic Revenue Sharing
sidebar_label: Probabilistic revenue sharing
---

More often than not, high quality content involves more than one person. So, how do you share a portion of your revenue if only one payment pointer is supported in the `monetization` meta tag?

One way is through probabilistic revenue sharing (revshare). In Web Monetization, probabilistic revenue sharing works by randomly choosing from a list of predefined payment pointers each time a web monetized visitor loads your page. The visitor pays to the chosen pointer until the page is reloaded or closed.

The chance of a payment pointer being chosen is based on its assigned weight. For example, if Alice's payment pointer has a weight of 50, the pointer has a 50% chance of being chosen. The laws of probability state that Alice’s share will approach 50% of the page’s total revenue as more users visit the site.

## A basic example

This example shows how to define a list of payment pointers and assign each pointer a weight. The easiest way to establish weight is by assigning values that add to 100.

### Code

```js
<head>
  <script>
    // Define your revenue share here.
    // If these weights add to 100 then they represent the percent each pointer gets.
    const pointers = {
      '$alice.example': 50,
      '$bob.example': 40,
      '$connie.example': 9.5,
      '$dave.example': 0.5
    }

    function pickPointer () {
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
      const monetizationTag = document.createElement('meta')
      monetizationTag.name = 'monetization'
      monetizationTag.content = pickPointer()

      document.head.appendChild(monetizationTag)
    })
  </script>
</head>
```

### How does it work?

First, we define the payment pointers and assign each one a weight. If the weights total 100, then they represent the percentage each pointer gets.

```js
const pointers = {
  '$alice.example': 50,
  '$bob.example': 40,
  '$connie.example': 9.5,
  '$dave.example': 0.5
  }
```

Next, we define how a payment pointer is chosen.

```js
function pickPointer () {
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

```js
window.addEventListener('load', () => {
  const monetizationTag = document.createElement('meta')
  monetizationTag.name = 'monetization'
  monetizationTag.content = pickPointer()

  document.head.appendChild(monetizationTag)
})
```

### Interactive example

This example shows how the random choices will approach the correct percentages over enough tries. You can customize the number of times to randomly choose a pointer and it will show you the results. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring.

If you see the source files instead of the example, click **View App** in the bottom right.

<div class="glitch-embed-wrap" style={{ height: '420px', width: '100%' }}>
  <iframe
    src="https://glitch.com/embed/#!/embed/probabalistic-revenue-share-experiment?path=README.md&previewSize=100"
    title="probabalistic-revenue-share-experiment on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style={{ height: '100%', width: '100%', border: '0' }}>
  </iframe>
</div>

## Advanced topic and future ideas

Imagine you're embedding an image into an article. To use the image, the photographer has asked for a percentage of your earnings, so you add the photographer to your revshare.

But what if the photographer is also sharing their revenue? You'd have to include everyone in the photographer's revshare in your revshare, but with a scaled-down percentage. Plus, you'd have to update your revshare every time the photographer's changes. That's a huge pain!

To make the process smoother, we can put probabilistic revshare into your payment pointer itself, instead of your page's JavaScript. The idea is similar to the vanity payment pointers discussed in [an article by ctrl.blog](https://www.ctrl.blog/entry/ilp-payment-pointer-redirects.html). A vanity payment pointer is a redirect to your actual payment pointer. If we want to put in probabilistic revshare, we need to make that redirect random instead of redirecting to the same pointer each time.

You can pick several payment pointers and a chance for each of them to be chosen, just like in the example in the previous section. The chance that you redirect to each pointer is equal to that pointer’s expected share of the revenue.

Here’s an example of how you can implement this in an Express.js server. It uses the same code as our previous snippet to implement the `pickPointer` function. We plan on offering a hosted tool that lets you manage revenue sharing payment pointers without writing code in the near future!

### Code

```js
// Define your revenue share here.
// If these weights add to 100 then they represent the percent each pointer gets.
const pointers = {
  '$alice.example': 50,
  '$bob.example': 40,
  '$connie.example': 9.5,
  '$dave.example': 0.5
}

// this is the same `pickPointer()` function implemented in the previous snippet
function pickPointer () {
  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
  let choice = Math.random() * sum

  for (const pointer in pointers) {
    const weight = pointers[pointer]
    if ((choice -= weight) <= 0) {
      return pointer
    }
  }
}

app.use((req, res, next) => {
  // is this request meant for Web Monetization?
  if (req.header('accept').includes('application/spsp4+json')) {
    // choose our random payment pointer
    const pointer = pickPointer()

    // turn the payment pointer into a URL in accordance with the payment pointer spec
    // https://paymentpointers.org/
    const asUrl = new URL(pointer.startsWith('$') ? 'https://' + pointer.substring(1) : pointer)
    asUrl.pathname = asUrl.pathname === '/' ? '/.well-known/pay' : asUrl.pathname

    // redirect to our chosen payment pointer so they get paid
    res.redirect(302, asUrl.href)
  } else {
    // if the request is not for Web Monetization, do nothing
    next()
  }
})
```

With this scheme, your payment pointer contains all the revshare logic and you don't need to repeat the information on every page. The scheme also works recursively. One of the pointers that a vanity pointer randomly chooses could go on to make a random choice of its own. Your blog could choose the photographer's payment pointer 1% of the time, then 10% of the time the photographer's pointer chooses the photo editor's pointer.

This lets you make some revsharing schemes that would be wildly impractical with existing schemes. By taking the pain out of revenue sharing, we can help everyone get compensated fairly!
