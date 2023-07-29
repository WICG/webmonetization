---
title: 'Hide ads'
---

<div class="draft"><div class="title">Page Updates</div><ul><li>Add any appropriate links</li><li>Update the Glitch example's README</li></ul></div>

Give your paying visitors an ad-free experience by hiding ads when the `monetization` event fires. Since the `monetization` event only fires when a payment is sent, your ads will continue to appear to non-paying visitors. 

## Before you begin

For visitors without Web Monetization, ads will appear as soon as the page loads.

For visitors with Web Monetization in their browser, there's a three-second grace period before ads are shown. This is to give Web Monetization a chance to initialize and prevent ads from briefly appearing to paying visitors. 

**If Web Monetization...**
- Initializes within the grace period, then ads are hidden
- Fails to initialize within the grace period, then ads are shown
- Initializes any time after the grace period, then ads are hidden

## Example

The example below shows how to hide ads from web monetized visitors.

```html
<head>
  <!-- Set the href to your own payment pointer -->
  <link rel="monetization" href="https://wallet.example/alice" />

  <script>
    const adCode = '<div style="border:1px solid #f00;color:red;margin:20px">Ad! Buy product A! Ad!</div>'
    function showAds() {
      document.getElementById('ad').innerHTML = adCode
    }

    function removeAds() {
      document.getElementById('ad').remove()
    }

    let hasPaid = false
    if (window.MonetizationEvent) {
      const link = document.querySelector('link[rel="monetization"]')
      link.addEventListener('monetization', (ev) => {
        hasPaid = true
        removeAds()
      })
    }

    window.addEventListener('load', () => {
      if (!window.MonetizationEvent) {
        showAds()
      } else {
        setTimeout(() => {
          if (!hasPaid) {
            showAds()
          }
        }, 3000)
      }
    })
  </script>
</head>

<body>
  <div id="ad"></div>
    Here's where your site's content will go!
</body>
```

## How it works

Let's start with the code for showing an ad.

```jsx
const adCode = '<div style="border:1px solid #f00;color:red;margin:20px">Ad! Buy product A! Ad!</div>'
function showAds () {
  document.getElementById('ad').innerHTML = adCode
}
```
We want to bind the `monetization` event to its respective event handler if the visitor is web monetized. This triggers the removal of the ad once Web Monetization initializes. Assuming its initialized within the grace period, your ad isn't added to the page at all. This means any related images and trackers aren't loaded either.

The `hasPaid` variable in the timer is for when/if Web Monetization starts after the grace period.

```jsx
let hasPaid = false
if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', ev => {
    hasPaid = true
    removeAds()
  })
}
```

As soon as the page loads, the add will immediately appear to any visitor who isn't web monetized. This is handled via `!window.MonetizationEvent`, shown below.

If the visitor has Web Monetization in their browser, then the `monetization` event must fire within 3 seconds (3000ms) to indicate that Web Monetization has initialized. If it hasn't intialized by the timeout, the ad is shown to the visitor.

```jsx
window.addEventListener('load', () => {
  if (!window.MonetizationEvent) {
    showAds()
  } else {
    setTimeout(() => {
      if (!hasPaid) {
        showAds()
      }
    }, 3000)
  }
})
```

## Interactive example

This example simulates showing and hiding an ad based on a visitor's Web Monetization state. The example doesn't require you to have Web Monetization enabled in your browser and no real payments are occurring. 

Click **View as Web Monetized/non-Web Monetized visitor** to toggle your monetization state. If source files appear instead of the example, click **View App** in the bottom-right corner.

<div className="glitch-embed-wrap">
  <iframe
    src="https://glitch.com/embed/#!/embed/wm2-ad-free-experience?path=README.md&previewSize=100"
    title="wm-ad-free-experience on Glitch"
    style='height: 100%; width: 100%; border: 0;'>
  </iframe>
</div>