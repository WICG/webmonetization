---
id: start-stop
title: Start/Stop Monetization
sidebar_label: Start/Stop Monetization
---

Sometimes you don't want your entire site to be web monetized. The easiest way
to do this is to just include the Web Monetization meta tag on the pages you
want to monetize. But if you want to turn Web Monetization on and off
dynamically then you can do that too.

This example page shows how to turn Web Monetization on or off dynamically,
when a visitor clicks a button.

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

[_You can view this example page here_](/examples/start-stop.html).

If you view this in a Web Monetized browser you can see the monetization state
and control it with the "Stop Monetization" and "Start Monetization" buttons.

When you click "Stop Monetization," the state will immediately go to "stopped."
If you click "Start Monetization," the state will move to "pending," and then
proceed to "started" once Web Monetization initializes.

## How Does it Work?

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

In order to display the current monetization state on the page, we bind the
three monetization state events: `monetizationstop`, `monetizationpending`, and
`monetizationstart`. Each time one of them fires we display the current
monetization state.

This isn't required to start and stop monetization but it helps visualize it on
the example page.

```js
window.addEventListener('load', () => {
  if (!document.monetization) {
    document.getElementById('state').innerText = 'Not enabled in browser'
  } else {
    showMonetizationState()
  }
```

When the page loads we set an initial state. If the user doesn't have Web
Monetization (`document.monetization` is not defined), we say "Not enabled in
browser." Otherwise we display the current monetization state.

```js
const monetizationTag = document.querySelector('meta[name="monetization"]')
```

We need to grab the meta tag's element object in order to add and remove it.
The query selector, `meta[name="monetization"]` selects a `<meta>` tag with
a `"name"` attribute of `monetization`, the Web Monetization meta tag.

```js
stopButton.addEventListener('click', () => {
  monetizationTag.remove()

  stopButton.disabled = true
  startButton.disabled = false
})
```

When the stop button is clicked, we call `remove()` on the monetization tag
element. Your Web Monetization extension will pick up this change and stop
monetization right away.

```js
startButton.addEventListener('click', () => {
  document.head.appendChild(monetizationTag)

  stopButton.disabled = false
  startButton.disabled = true
})
```

When the start button is clicked, we append the monetization tag to the
document's head. Your Web Monetization extension will pick up this change and
begin initializing Web Monetization.
