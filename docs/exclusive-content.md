---
id: exclusive-content
title: Exclusive Content
sidebar_label: Exclusive Content
---

One of the perks of Web Monetization is that its JavaScript API can be used to
make your page respond to Web Monetization. You can reward the people who
support your site by giving Web Monetized viewers exclusive content.


## A Basic Example

Web Monetization makes exclusive content easy! This is a very simple example of
exclusive content that only shows up for Web Monetized visitors:

> **Careful!** These examples hide content on the client side. A clever user
> could pretend to be Web Monetized by using the developer console. Examples on
> how to verify Web Monetization from the server side will come soon.

### Code

```html
<head>
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

[_You can view this example page here_](/examples/show_simple.html).

If you view this content with Web Monetization enabled then it will show
"Here's some exclusive content!" once Web Monetization initializes. If you view
it without Web Monetization then you won't see anything.

### How Does it Work?

There's only three things this code does. The code is encompassed in the `<script>`
tag.

```js
if (document.monetization) {
```

First, we check whether document.monetization exists in this browser. If it
does not exist then we can't listen for the `monetizationstart` event to tell
us when Web Monetization initializes.

```js
  document.monetization.addEventListener('monetizationstart', () => {
```

Next we add an event listener to the `document.monetization` object. The
`monetizationstart` event is emitted when Web Monetization initializes and
the state goes from `pending` to `started`.

```js
      document.getElementById('exclusive').classList.remove('hidden')
```

Finally we select our exclusive content element and make it visible. We defined
a CSS class that made it hidden, so removing that class will make it visible.
If you want to do something else when Web Monetization starts, you can replace
this line. You can trigger any JavaScript so the sky's the limit.

## A Complete Example

In reality your requirements are a little more complex.

* Web Monetized visitors should see an indicator while we're waiting for Web Monetization to intialize
* We should tell non-Web Monetized visitors that there's exclusive content they can get

This means there's three states in total:

* Show a call to action to a non-Web Monetized visitor
* Show a loading message to a Web Monetized visitor
* Show exclusive content to a Web Monetized visitor

### Code

```html
<head>
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

[_You can view this example page here_](/examples/show.html).

Try loading this page with Web Monetization enabled to see it load the
exclusive content. Open in in an private window to see what it looks like
without Web Monetization.

### How Does it Work?

We have three functions to activate our three different states: `showLoading`
displays the loader, `showCTA` displays the CTA to get Web Monetized, and
`showExclusiveContent` shows the exclusive content. This works just like the
[basic example](#basic-example), where we turn the `hidden` class on/off for
our `div`s.

```js
window.addEventListener('load', () => {
```

When the page loads in the first thing we do is check whether Web Monetization
exists in the visitor's browser.

```js
  if (!document.monetization) {
    showCTA()
  } else {
    showLoading()
  }
```

If the visitor does not have Web Monetization then we show them the CTA right
away. If the vistor does have Web Monetization then we show them the loader
right away.

```js
if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    showExclusiveContent()
  })
}
```

If the visitor is Web Monetized then we're also listening for the
`monetizationstart` event. Just like the previous example this event will show
the exclusive content when it's triggered, and make sure the other `div`s are
hidden.
