---
id: exclusive-content
title: Exclusive Content
sidebar_label: Exclusive Content
---

One of the perks of Web Monetization is that its JavaScript API can be used to
make your page respond to Web Monetization. You can reward the people who
support your site by giving Web-monetized viewers exclusive content.


## A Basic Example

Web Monetization makes providing exclusive content easy! This is a very simple example of
showing exclusive content only to Web-monetized visitors:

> **Careful!** These examples hide content on the client side. A clever user
> could pretend to be Web-monetized by using the developer console. Examples on
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
  <div id="exclusive" class="hidden">
    Here's some exclusive content!
  </div>
</body>
```

If you view this content with Web Monetization enabled, then the page will show
"Here's some exclusive content!" once Web Monetization initializes. If you view
it without Web Monetization, then you won't see anything.

[_You can view the example page here_](/examples/show_simple.html).

### How Does it Work?

There's only three things this code does. The code is encompassed in the `<script>`
tag.

First, we check whether `document.monetization` exists in the browser. If it
doesn't exist, then we can't listen for the `monetizationstart` event to tell
us when Web Monetization initializes.

```js
if (document.monetization) {
```

Next, we add an event listener to the `document.monetization` object. The
`monetizationstart` event is emitted when Web Monetization initializes and
the state goes from `pending` to `started`.

```js
  document.monetization.addEventListener('monetizationstart', () => {
```

Finally, we select our exclusive content element and make it visible. We defined
a CSS class that made it hidden, so removing that class will make it visible.
If you want to do something else when Web Monetization starts, you can replace
this line. You can trigger any JavaScript, so the sky's the limit.

```js
      document.getElementById('exclusive').classList.remove('hidden')
```

## A Complete Example

In reality, your requirements will be a little more complex. You should:

* Show Web-monetized visitors an indicator while they wait for Web Monetization to initialize.
* Tell non-Web-monetized visitors that there's exclusive content they can get.

This means there's three states in total:

* Show a call-to-action to a non-Web-monetized visitor
* Show a loading message to a Web-monetized visitor
* Show exclusive content to a Web-monetized visitor

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

Try loading the example page with Web Monetization enabled to see it load the
exclusive content. Open it in a private window to see what it looks like
without Web Monetization.

[_You can view the example page here_](/examples/show.html).

### How Does it Work?

We have three functions to activate our three different states: `showLoading`
displays the loader, `showCTA` displays the call-to-action to get Web-monetized, and
`showExclusiveContent` shows the exclusive content. This works just like the
[basic example](#a-basic-example) where we turn the `hidden` class on/off for
our `div`s.

When the page loads, the first thing we do is check whether Web Monetization
exists in the visitor's browser.

```js
window.addEventListener('load', () => {
```

If the visitor doesn't have Web Monetization, then we show them the CTA right
away. If the visitor does have Web Monetization, we show them the loader
right away.

```js
  if (!document.monetization) {
    showCTA()
  } else {
    showLoading()
  }
```

When the visitor is Web-monetized, we also listen for the
`monetizationstart` event. Just like the previous example, this event will show
the exclusive content when it's triggered and hide the other `div`s.

```js
if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    showExclusiveContent()
  })
}
```
