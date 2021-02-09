const WORKER = 'https://webmonetization.org/api/exclusive-content'

!(function () {
  const { data, paymentPointer } = gatherExclusive()

  if (document.monetization !== undefined) {
    setMeta(paymentPointer)

    document.monetization.addEventListener('monetizationpending', () => {
      if (data.length) {
        document.querySelectorAll('.exclusiveMessage').forEach((element) => {
          element.innerHTML =
            '<p>⸻ ⏰ Waiting for Web Monetization to start to unlock this content. ⸻</p>'
        })
      }
    })

    document.monetization.addEventListener('monetizationstart', () => {
      if (data.length) {
        document.querySelectorAll('.exclusiveMessage').forEach((element) => {
          element.innerHTML =
            '<p>⸻ ⏰ Waiting for Web Monetization receipt verification to unlock this content. ⸻</p>'
        })
      }
    })

    document.monetization.addEventListener('monetizationprogress', (event) => {
      if (data.length) {
        unlockExclusiveContent(data.pop(), event.detail.receipt)
      }
    })
  } else {
    document.querySelectorAll('.exclusiveMessage').forEach((element) => {
      element.innerHTML =
        '<p>⸻ 🔒 This content is exclusive for users with Web Monetization enabled. ⸻</p>'
    })
  }
})()

function gatherExclusive() {
  const data = []
  const pointers = []
  document.querySelectorAll('.exclusive').forEach((element) => {
    data.push({
      id: element.getAttribute('id'),
      paymentPointer: element.getAttribute('paymentpointer'),
      cypherText: element.getAttribute('cyphertext'),
      cypherVerifier: element.getAttribute('cypherverifier'),
      initVector: element.getAttribute('initvector'),
      nonce: element.getAttribute('nonce'),
    })
    pointers.push(element.getAttribute('proxypaymentpointer'))
  })
  const paymentPointer = pointers[Math.floor(Math.random() * pointers.length)]
  return { data, paymentPointer }
}

function setMeta(proxyPaymentPointer) {
  const meta = document.createElement('meta')
  meta.name = 'monetization'
  meta.content = proxyPaymentPointer
  document.getElementsByTagName('head')[0].appendChild(meta)
}

function unlockExclusiveContent(data, receipt) {
  fetch(`${WORKER}/deriveKey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentPointer: data.paymentPointer,
      nonce: data.nonce,
      encVerifier: data.cypherVerifier,
      initVector: data.initVector,
      receipt: receipt,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      decryptContent(responseData.key, data.cypherText, data.initVector).then(
        (plaintext) => {
          const element = document.querySelector(`#${data.id}`)
          element.querySelector('.exclusiveMessage').innerHTML =
            '<p>⸻ 🔓 Enjoy your exclusive content! ⸻</p>'
          element.querySelector('.exclusiveContent').innerHTML = plaintext
        }
      )
    })
    .catch((error) => {
      console.log('Error:', error)
    })
}

async function decryptContent(keyString, cypherText, initVector) {
  const key = await importKey(str2ab(keyString))
  const plaintext = await decrypt(str2ab(cypherText), key, encode(initVector))
  return decode(plaintext)
}

async function decrypt(cypherText, key, initVector) {
  return window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: initVector,
    },
    key,
    cypherText
  )
}

async function importKey(keyBuffer) {
  return window.crypto.subtle.importKey('raw', keyBuffer, 'AES-GCM', false, [
    'encrypt',
    'decrypt',
  ])
}

function encode(str) {
  const encoder = new TextEncoder('utf-8')
  return encoder.encode(str)
}

function decode(buf) {
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(buf)
}

function str2ab(str) {
  const decodedString = window.atob(str)
  const ab = new ArrayBuffer(decodedString.length)
  const abView = new Uint8Array(ab)
  for (let i = 0, strLen = decodedString.length; i < strLen; i++) {
    abView[i] = decodedString.charCodeAt(i)
  }
  return ab
}
