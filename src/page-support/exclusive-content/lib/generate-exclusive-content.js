const WORKER = 'https://webmonetization.org/api/exclusive-content'
const VERIFIER = 'https://webmonetization.org/api/receipts'

export async function generateExclusiveContent(
  pointer,
  optVerifier,
  plaintext
) {
  const verifier = optVerifier ? optVerifier : VERIFIER
  const { key, nonce } = await fetchKey(pointer)
  const {
    cypherText: cypherText,
    cypherVerifier,
    initVector,
  } = await handleEncryption(plaintext, verifier, key)
  return { verifier, nonce, cypherText, cypherVerifier, initVector }
}

async function fetchKey(pointer) {
  const response = await fetch(`${WORKER}/deriveNewKey`, {
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
  const key = await importKey(str2ab(keyString))
  const initVector = getRandomValue()
  const cypherText = await encrypt(encode(plaintext), key, encode(initVector))
  const cypherVerifier = await encrypt(
    encode(verifier),
    key,
    encode(initVector)
  )
  return {
    cypherText: ab2str(cypherText),
    cypherVerifier: ab2str(cypherVerifier),
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

export function encode(str) {
  const encoder = new TextEncoder()
  return encoder.encode(str)
}

export function ab2str(ab) {
  return window.btoa(String.fromCharCode.apply(null, new Uint8Array(ab)))
}

export function str2ab(str) {
  const decodedString = window.atob(str)
  const ab = new ArrayBuffer(decodedString.length)
  const abView = new Uint8Array(ab)
  for (let i = 0, strLen = decodedString.length; i < strLen; i++) {
    abView[i] = decodedString.charCodeAt(i)
  }
  return ab
}

export function getRandomValue() {
  const array = new Uint8Array(16)
  const randomValues = crypto.getRandomValues(array)
  return ab2str(randomValues)
}
