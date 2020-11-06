/*
 * Secret MASTERKEY, stored in CF worker settings
 * @param {string}  MASTERKEY
 */

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    const headers = new Map(request.headers)
    if (headers.get('content-type') !== 'application/json') {
      return new Response('Unsupported content type. Use application/json', {
        headers,
        status: 415
      })
    }
    const url = new URL(request.url)
    const path = url.pathname
    if ((path !== '/deriveNewKey') & (path !== '/deriveKey')) {
      return new Response('Not found', { headers, status: 404 })
    }
    const body = await request.json()
    if (path === '/deriveNewKey') {
      if (Object.keys(body).includes('paymentPointer')) {
        return handleNewKeyDerivation(body)
      } else {
        return new Response('Payment pointer not part of request body', {
          headers,
          status: 400
        })
      }
    }
    if (path === '/deriveKey') {
      if (
        Object.keys(body).includes('paymentPointer') &&
        Object.keys(body).includes('nonce') &&
        Object.keys(body).includes('encVerifier') &&
        Object.keys(body).includes('initVector') &&
        Object.keys(body).includes('receipt')
      ) {
        return handleExKeyDerivation(body)
      } else {
        return new Response('Input variables missing', {
          headers,
          status: 400
        })
      }
    }
  } else if (request.method === 'OPTIONS') {
    return new Response('OK', { headers })
  } else {
    return new Response('Not found', { headers, status: 404 })
  }
}

async function handleNewKeyDerivation(body) {
  const nonce = getRandomValue()
  const keyBuffer = await deriveKey(encode(body.paymentPointer + nonce))
  const key = btoa(ab2str(keyBuffer))
  return new Response(JSON.stringify({ key, nonce }), {
    headers: { ...headers, 'Content-Type': 'application/json;charset=UTF-8' }
  })
}

async function handleExKeyDerivation(body) {
  const keyBuffer = await deriveKey(encode(body.paymentPointer + body.nonce))
  const verifier = await decrypt(
    str2ab(atob(body.encVerifier)),
    keyBuffer,
    encode(body.initVector)
  )
  const payment = await verifyReceipt(decode(verifier), body.receipt)
  if (payment) {
    const key = btoa(ab2str(keyBuffer))
    return new Response(JSON.stringify({ key }), {
      headers: { ...headers, 'Content-Type': 'application/json;charset=UTF-8' }
    })
  } else {
    return new Response('Payment required', { headers, status: 402 })
  }
}

function getRandomValue() {
  var array = new Uint32Array(1)
  return crypto.getRandomValues(array).toString()
}

function encode(str) {
  const encoder = new TextEncoder('utf-8')
  return encoder.encode(str)
}

function decode(buf) {
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(buf)
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

async function importMasterKey() {
  const encoder = new TextEncoder()
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(MASTERKEY),
    {
      name: 'HMAC',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  )
}

async function deriveKey(data) {
  const masterKey = await importMasterKey()
  return crypto.subtle.sign('HMAC', masterKey, data)
}

async function decrypt(cyphertext, keyBuffer, initVector) {
  const key = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    'AES-GCM',
    false,
    ['encrypt', 'decrypt']
  )
  return crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: initVector
    },
    key,
    cyphertext
  )
}

async function verifyReceipt(verifier, receipt) {
  const endpoint = new URL(
    //TODO: change to latest endpoint name once merged
    verifier.endsWith('/') ? `${verifier}receipts` : `${verifier}/receipts`
  )
  const response = await fetch(endpoint.href, { method: 'POST', body: receipt })
  return response.ok
}
