---
id: exclusive-content
title: Exclusive Content
sidebar_label: Exclusive content
---

One of the perks of Web Monetization is that its JavaScript API can be used to make your page respond to Web Monetization. You can reward the people who support your site by giving web monetized viewers exclusive content.

## A basic example

Web Monetization makes providing exclusive content easy! This is a very simple example of showing exclusive content only to web monetized visitors:

> **Careful!** These examples hide content on the client side. A clever user
> could pretend to be web monetized by using the developer console. Examples on
> how to verify Web Monetization from the server side will come soon.

### Code

```html
<head>
  <!-- this should be set to your own payment pointer -->
  <meta name="monetization" content="$twitter.xrptipbot.com/Interledger">

  <style>
    .hidden {
      display: none;
    }
  </style>

  <script>
    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        document.getElementById('exclusive').classList.remove('hidden')
      })
    }
  </script>
</head>

<body>
  <p>
    Content will appear below here if you are Web monetized.
  </p>
  <hr />
  <div id="exclusive" class="hidden">
    Here's some exclusive content!
  </div>
</body>
```

### How does it work?

There's only three things this code does. The code is encompassed in the `<script>` tag.

First, we check whether `document.monetization` exists in the browser. If it doesn't exist, then we can't listen for the `monetizationstart` event to tell us when Web Monetization initializes.

```js
if (document.monetization) {
```

Next, we add an event listener to the `document.monetization` object. The
`monetizationstart` event is emitted when Web Monetization initializes and
the state goes from `pending` to `started`.

```js
document.monetization.addEventListener('monetizationstart', () => {
```

Finally, we select our exclusive content element and make it visible. We defined a CSS class that made it hidden, so removing that class will make it visible. If you want to do something else when Web Monetization starts, you can replace this line. You can trigger any JavaScript, so the sky's the limit.

```js
document.getElementById('exclusive').classList.remove('hidden')})
}
```

### Interactive example

Click the **View as Web Monetized/non-Web Monetized visitor** button to show and hide monetized content.

Viewing this content with Web Monetization enabled shows "Here's some exclusive content!" The message is hidden when Web Monetization is disabled.

If you see the source files instead of the example, click **View App** in the bottom right.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/wm-exclusive-content-basic?path=README.md&previewSize=100"
    title="wm-exclusive-content-basic on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>

## A complete example

In reality, your requirements will be a little more complex. You should:

* Show web monetized visitors an indicator while they wait for Web Monetization to initialize.
* Tell non-web-monetized visitors that there's exclusive content they can get.

This means there's three states in total:

* Show a call-to-action to a non-web-monetized visitor
* Show a loading message to a web monetized visitor
* Show exclusive content to a web monetized visitor

### Code

```html
<head>
  <!-- this should be set to your own payment pointer -->
  <meta name="monetization" content="$twitter.xrptipbot.com/Interledger">

  <style>
    .hidden {
      display: none;
    }
  </style>

  <script>
    function showExclusiveContent () {
      document.getElementById('exclusive').classList.remove('hidden')
      document.getElementById('loading').classList.add('hidden')
      document.getElementById('cta').classList.add('hidden')
    }

    function showCTA () {
      document.getElementById('loading').classList.add('hidden')
      document.getElementById('cta').classList.remove('hidden')
    }

    function showLoading () {
      document.getElementById('loading').classList.remove('hidden')
    }

    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', () => {
        showExclusiveContent()
      })
    }

    window.addEventListener('load', () => {
      if (!document.monetization) {
        showCTA()
      } else {
        showLoading()
      }
    })
  </script>
</head>

<body>
  <div id="loading" class="hidden">
    Loading exclusive content...
  </div>

  <div id="exclusive" class="hidden">
    Here's some exclusive content!
  </div>

  <div id="cta" class="hidden">
    Please install a Web Monetization extension to support me!
  </div>
</body>
```

### How does it work?

We have three functions to activate our three different states: `showLoading` displays the loader, `showCTA` displays the call-to-action to get web monetized, and `showExclusiveContent` shows the exclusive content. This works just like the [basic example](#a-basic-example) where we turn the `hidden` class on/off for our `div`s.

When the visitor is web monetized, we listen for the `monetizationstart` event. Just like the previous example, this event will show the exclusive content when it's triggered and hide the other `div`s.

```js
if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    showExclusiveContent()
  })
}
```

When the page loads, we check whether Web Monetization exists in the visitor's browser.

```js
window.addEventListener('load', () => {
```

If the visitor doesn't have Web Monetization, then we show the CTA right
away. If the visitor does have Web Monetization, we show the loader
right away.

```js
if (!document.monetization) {
  showCTA()
} else {
  showLoading()
}
```

### Interactive example

Click the **View as Web Monetized/non-Web Monetized visitor** button to show and hide monetized content.

Viewing this content with Web Monetization enabled shows "Here's some exclusive content!" The message, "Please install a Web Monetization extension to support me", appears when Web Monetization is disabled.

If you see the source files instead of the example, click **View App** in the bottom right.

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/wm-exclusive-content-advanced?path=README.md&previewSize=100"
    title="wm-exclusive-content-advanced on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media"
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
