---
id: start-stop
title: Start/Stop Monetization
sidebar_label: Start/Stop Monetization
---

Sometimes you don't want your entire site to be Web-monetized. The easiest way
to do this is to just include the Web Monetization meta tag on the pages you
want to monetize. But if you want to turn Web Monetization on and off
dynamically, you can do that too!

This example page shows how to turn Web Monetization on and off dynamically, in
response to a visitor clicking a button.

## Code

```html
<head>
  <!-- the "content" should be set to your own payment pointer -->
  <meta name="monetization" content="$twitter.xrptipbot.com/Interledger">

  <script>
    function showMonetizationState () {
      document.getElementById('state').innerText = document.monetization.state
    }

    if (document.monetization) {
      document.monetization.addEventListener('monetizationstop', showMonetizationState)
      document.monetization.addEventListener('monetizationpending', showMonetizationState)
      document.monetization.addEventListener('monetizationstart', showMonetizationState)
    }

    window.addEventListener('load', () => {
      if (!document.monetization) {
        document.getElementById('state').innerText = 'Not enabled in browser'
      } else {
        showMonetizationState()
      }

      const stopButton = document.getElementById('stop-button')
      const startButton = document.getElementById('start-button')
      const monetizationTag = document.querySelector('meta[name="monetization"]')

      stopButton.addEventListener('click', () => {
        monetizationTag.remove()

        stopButton.disabled = true
        startButton.disabled = false
      })

      startButton.addEventListener('click', () => {
        document.head.appendChild(monetizationTag)

        stopButton.disabled = false
        startButton.disabled = true
      })
    })
  </script>
</head>

<body>
  <div id="loading">
    Current Monetization State: <span id="state"></span>
  </div>

  <button id="stop-button">Stop Monetization</button>
  <button id="start-button" disabled>Start Monetization</button>
</body>
```

If you view this in a Web-monetized browser, you can see the monetization state
and control it with the _Stop Monetization_ and _Start Monetization_ buttons.

[_You can view the example page here_](/examples/start-stop.html).

When you click _Stop Monetization_, the state will immediately go to `stopped`.
When you click _Start Monetization_, the state will move to `pending`, and then
proceed to `started` after Web Monetization initializes.

## How Does it Work?

To display the current monetization state on the page, we bind the
three monetization state events: `monetizationstop`, `monetizationpending`, and
`monetizationstart`. Each time one of them fires we display the current
monetization state.

> This isn't required to start and stop monetization but it helps visualize it on
> the example page.

```js
function showMonetizationState () {
  document.getElementById('state').innerText = document.monetization.state
}

if (document.monetization) {
  document.monetization.addEventListener('monetizationstop', showMonetizationState)
  document.monetization.addEventListener('monetizationpending', showMonetizationState)
  document.monetization.addEventListener('monetizationstart', showMonetizationState)
}
```

When the page loads we set an initial state. If the visitor doesn't have Web
Monetization (`document.monetization` is not defined), we say _Not enabled in
browser._ Otherwise, we display the current monetization state.

```js
window.addEventListener('load', () => {
  if (!document.monetization) {
    document.getElementById('state').innerText = 'Not enabled in browser'
  } else {
    showMonetizationState()
  }
```

We need to grab the meta tag's element object in order to add and remove it.
The query selector, `meta[name="monetization"]`, selects a `<meta>` tag with
a `name` attribute of `monetization` (the Web Monetization meta tag).

```js
const monetizationTag = document.querySelector('meta[name="monetization"]')
```

When the _Stop_ button is clicked, we call `remove()` on the monetization tag
element. Your Web Monetization extension will pick up this change and stop
monetization right away.

```js
stopButton.addEventListener('click', () => {
  monetizationTag.remove()

  stopButton.disabled = true
  startButton.disabled = false
})
```

When the _Start_ button is clicked, we append the monetization tag to the
document's head. Your Web Monetization extension will pick up this change and
begin initializing Web Mone tization.

```js
startButton.addEventListener('click', () => {
  document.head.appendChild(monetizationTag)

  stopButton.disabled = false
  startButton.disabled = true
})
```
