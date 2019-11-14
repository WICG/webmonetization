---
id: remove-ads
title: Remove Ads
sidebar_label: Remove Ads
---

Removing ads is a great way to thank the people who support your site. You can
make sure that Web Monetized visitors have a smooth experience without forgoing
monetization of the rest of your visitors.

Here's an example page that removes its ads for Web Monetized visitors:

## Code

```html
<head>
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

[_You can view this example page here_](/examples/remove_ads.html).

Users who visit the site without Web Monetization will see ads appear as soon as the page loads.

If you have Web Monetization in your browser then it won't show the ads
immediately. You have a three second grace period for Web Monetization to
initialize.

* If Web Monetization initializes before the three seconds are up then you
  never see ads.
* Once the three seconds are up the ads will load into the page.
* If Web Monetization initializes any time after the three seconds are up the
  ads will be removed.

## How Does it Work?

```js
const adCode = 'Ad! <marquee width=200>Buy product A!</marquee> Ad!'
function showAds () {
  document.getElementById('ad').innerHTML = adCode
}
```

This works a little bit differently from the [exclusive content example](/docs/exclusive-contnt). The ad is not added to the page at all until we decide to show ads. That means images and trackers will not be loaded for Web Monetized visitors _(although in the example we're only loading an annoying `<marquee>` tag)_.

```
let hasPaid = false
if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    hasPaid = true
    removeAds()
  })
}
```

If the visitor has Web Monetization then we bind the `monetizationstart` event.
This triggers the removal of ads once Web Monetization intializes.

Our `hasPaid` variable will be used in our timer to see whether Web
Monetization has already initialized when the grace period is over.

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

As soon as the page loads, any visitor who does not have Web Monetization
(`!document.monetization`) sees ads immediately.

If the visitor _does_ have Web Moentization we start our three second timer.
When the timer is up we check whether the `monetizationstart` event has fired.
If Web Monetization hasn't initialized, we show them the ads.

> You might think of using `document.monetization.state` instead of remembering
> `hasPaid`. But the state can go back to being stopped or pending if the user
> backgrounds the tab. If they background your tab when the 3 seconds are over
> then a legitimately Web Monetizated user might would get shown ads! So
> keeping a `hasPaid` variable is better.
