const worker = 'http://localhost:3001'

export async function generateExclusiveContent(pointer, verifier, plaintext) {
  const { key, nonce } = await fetchKey(pointer)
  const { cyphertext, cypherVerifier, initVector } = await handleEncryption(
    plaintext,
    verifier,
    key
  )
  return { nonce, cyphertext, cypherVerifier, initVector }
}

async function fetchKey(pointer) {
  const response = await fetch(`${worker}/deriveNewKey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      paymentPointer: pointer,
    }),
  })
  return response.json()
}

async function handleEncryption(plaintext, verifier, keyString) {
  const key = await importKey(str2ab(window.atob(keyString)))
  const initVector = getRandomValue()
  const cyphertext = await encrypt(encode(plaintext), key, encode(initVector))
  const cypherVerifier = await encrypt(
    encode(verifier),
    key,
    encode(initVector)
  )
  return {
    cyphertext: window.btoa(ab2str(cyphertext)),
    cypherVerifier: window.btoa(ab2str(cypherVerifier)),
    initVector,
  }
}

async function importKey(keyBuffer) {
  return window.crypto.subtle.importKey('raw', keyBuffer, 'AES-GCM', false, [
    'encrypt',
    'decrypt',
  ])
}

async function encrypt(plaintext, key, iv) {
  return window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    plaintext
  )
}

function encode(str) {
  const encoder = new TextEncoder('utf-8')
  return encoder.encode(str)
}

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

function str2ab(str) {
  var buf = new ArrayBuffer(str.length)
  var bufView = new Uint8Array(buf)
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

function getRandomValue() {
  var array = new Uint32Array(1)
  return window.crypto.getRandomValues(array).toString()
}
