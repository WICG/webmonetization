function getWmTag() {
  return document.head.querySelector('meta[name="monetization"]')
}

function uuid() {
  // TODO: make the uuid random
  return 'fc23b14d-70e4-4d55-b0a0-dd86f70ce402'
}

function wmStateTransition() {
  const wmTag = getWmTag()
  const state = document.monetization.state
  if (wmTag) {
    if (state === 'stopped') {
      startWm()
    }
  }
}

function observeWm() {
  const headObserver = new MutationObserver((mutations) => {
    const wmTag = getWmTag()
    const state = document.monetization.state

    if (!wmTag && state === 'started') stopWm()
    if (wmTag && state === 'stopped') {
      pendingWm()
      // TODO: observe wmTag for attribute changes?
    }
  })

  headObserver.observe(document.head, { childList: true })
}

function initWm() {
  document.monetization = document.createElement('div')
  document.monetization.state = 'stopped'

  observeWm()
  if (getWmTag()) {
    pendingWm()
  }
}

function pendingWm() {
  document.monetization._requestId = uuid()
  emitWm('pending', 'pending')
  document.monetization._startWmTimer = setTimeout(startWm, 700)
}

function startWm() {
  emitWm('start', 'started')
  startWmIcon()
  progressWm()
  document.monetization._wmProgressInterval = setInterval(progressWm, 1000)
}

function emitWm(name, state) {
  const wmTag = getWmTag()
  if (!wmTag) {
    throw new Error('cannot emit ' + name + ' w/o meta tag')
  }

  document.monetization._wmTag = wmTag
  document.monetization.state = state
  document.monetization.dispatchEvent(
    new CustomEvent('monetization' + name, {
      detail: {
        requestId: document.monetization._requestId,
        paymentPointer: wmTag.content,
      },
    }),
  )
}

function progressWm() {
  const wmTag = document.monetization._wmTag
  if (!wmTag) {
    throw new Error('cannot emit progress w/o meta tag')
  }

  document.monetization.dispatchEvent(
    new CustomEvent('monetizationprogress', {
      detail: {
        requestId: document.monetization._requestId,
        paymentPointer: wmTag.content,
        amount: String(Math.floor(50000 + Math.random() * 100000)),
        assetCode: 'USD',
        assetScale: 9,
      },
    }),
  )
}

function stopWm() {
  const wmTag = document.monetization._wmTag
  if (!wmTag) {
    throw new Error('cannot emit stop w/o meta tag')
  }

  stopWmIcon()

  if (document.monetization._startWmTimer) {
    clearTimeout(document.monetization._startWmTimer)
  }

  if (document.monetization._wmProgressInterval) {
    clearTimeout(document.monetization._wmProgressInterval)
  }

  document.monetization.state = 'stopped'
  document.monetization.dispatchEvent(
    new CustomEvent('monetizationstop', {
      detail: {
        requestId: document.monetization._requestId,
        paymentPointer: wmTag.content,
        finalized: true,
      },
    }),
  )
}

function isWm() {
  const pageUrl = new URL(window.location)
  return pageUrl.searchParams.get('wm') === 'true'
}

function createWmWidget() {
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.right = '0px'
  div.style.bottom = '0px'
  div.style.padding = '20px'

  const pageUrl = new URL(window.location)
  const isWm = pageUrl.searchParams.get('wm') === 'true'

  const buttonDiv = document.createElement('a')
  buttonDiv.style.display = 'block'
  buttonDiv.style.cursor = 'pointer'
  buttonDiv.style.fontFamily = 'sans-serif'
  buttonDiv.style.borderRadius = '5px'
  buttonDiv.style.backgroundColor = 'black'
  buttonDiv.style.color = 'white'
  buttonDiv.style.lineHeight = '30px'
  buttonDiv.style.paddingTop = '3px'
  buttonDiv.style.paddingLeft = '10px'
  buttonDiv.style.paddingRight = '10px'
  buttonDiv.innerText = isWm
    ? 'View as non-Web Monetized visitor'
    : 'View as Web Monetized visitor'

  div.appendChild(buttonDiv)
  buttonDiv.addEventListener('click', () => {
    pageUrl.searchParams.set('wm', isWm ? 'false' : 'true')
    window.location = pageUrl.href
  })

  window.addEventListener('load', () => {
    document.body.appendChild(div)
  })
}

const STOPPED_ICON_SRC = '/img/wm-icon.svg'
const STARTED_ICON_SRC = '/img/wm-icon-animated.svg'

function addWmIcon() {
  const img = document.createElement('img')
  img.src = STOPPED_ICON_SRC
  img.style.position = 'fixed'
  img.style.right = '20px'
  img.style.bottom = '70px'
  img.style.width = '40px'
  img.style.height = '40px'
  img.id = 'wm-icon'

  window.addEventListener('load', () => {
    document.body.appendChild(img)
  })
}

function stopWmIcon() {
  document.getElementById('wm-icon').src = STOPPED_ICON_SRC
}

function startWmIcon() {
  document.getElementById('wm-icon').src = STARTED_ICON_SRC
}

function start() {
  // This is just for embedded demos
  if (window === window.top) {
    return
  }

  createWmWidget()
  if (isWm()) {
    addWmIcon()
    console.log('creating web monetization')
    initWm()
  } else {
    delete document.monetization
  }
}

start()
