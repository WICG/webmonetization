---
id: remove-ads
title: Remove Ads
sidebar_label: Remove ads
---

Removing ads is a great way to thank the people who support your site. You can
make sure web monetized visitors have a smooth experience without forgoing
monetization of the rest of your visitors.

Here's an example page that removes its ads for web monetized visitors:

## Code

```html
<head>
  <!-- this should be set to your own payment pointer -->
  <meta name="monetization" content="$twitter.xrptipbot.com/Interledger">

  <script>
    const adCode = 'Ad! <marquee width=200>Buy product A!</marquee> Ad!'
    function showAds () {
      document.getElementById('ad').innerHTML = adCode
    }

    function removeAds () {
      document.getElementById('ad').remove()
    }

    let hasPaid = false
    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        hasPaid = true
        removeAds()
      })
    }

    window.addEventListener('load', () => {
      if (!document.monetization) {
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
  <div id="ad">
  </div>

  Here's some real content.
</body>
```

Users who visit the site without Web Monetization will see ads appear as soon as the page loads.

[_You can view the example page here_](/examples/remove_ads.html).

Users who have Web Monetization in their browser won't see the ads
immediately. There's a three-second grace period for Web Monetization to
initialize.

If Web Monetization:

* Initializes before the three seconds are up, the ads never appear.
* Fails to initialize within three seconds, the ads will load into the page.
* Initializes any time after the three seconds are up, the ads will be removed.

## How Does it Work?

This works a little bit differently from the [exclusive content example](/docs/exclusive-content).
The ad is not added to the page at all until you decide to show ads. That means
images and trackers are not loaded for web monetized visitors _(although in the example we're only loading an annoying `<marquee>` tag)_.

```js
const adCode = 'Ad! <marquee width=200>Buy product A!</marquee> Ad!'
function showAds () {
  document.getElementById('ad').innerHTML = adCode
}
```

If the visitor is web monetized, then we bind the `monetizationstart` event.
This triggers the removal of ads once Web Monetization initializes.

The `hasPaid` variable is used in the timer to see whether Web
Monetization has already initialized when the grace period is over.

```
let hasPaid = false
if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    hasPaid = true
    removeAds()
  })
}
```

As soon as the page loads, any visitor who does not have Web Monetization
(`!document.monetization`) sees ads immediately. If the visitor _does_ have Web
Monetization, the three-second timer starts. We check whether the
`monetizationstart` event has fired when the timer is up. If Web Monetization
hasn't initialized, the visitor is shown the ads.

```js
window.addEventListener('load', () => {
  if (!document.monetization) {
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

> You might think of using `document.monetization.state` instead of remembering
> `hasPaid`. But, the state can go back to being `stopped` or `pending` if the user
> backgrounds the tab. If they background your tab when the three seconds are over,
> then a legitimately web monetized user might be shown ads!
Keeping a `hasPaid` variable is a better practice.
