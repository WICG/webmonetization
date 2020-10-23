/*
 * Secret MASTERKEY, stored in CF worker settings
 * @param {string}  MASTERKEY
 */

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
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
        status: 415,
      })
    }
    const url = new URL(request.url)
    const path = url.pathname
    if ((path !== '/encrypt') & (path !== '/decrypt')) {
      return new Response('Not found', { headers, status: 404 })
    }
    const body = await request.json()
    if (path === '/encrypt') {
      if (
        Object.keys(body).includes('pp') &&
        Object.keys(body).includes('pt')
      ) {
        return handleEncryptRequest(body)
      } else {
        return new Response('Input variables missing', { headers, status: 400 })
      }
    }
    if (path === '/decrypt') {
      if (
        Object.keys(body).includes('pp') &&
        Object.keys(body).includes('vr') &&
        Object.keys(body).includes('bi') &&
        Object.keys(body).includes('ct') &&
        Object.keys(body).includes('iv')
      ) {
        return handleDecryptRequest(body)
      } else {
        return new Response('Input variables missing', { headers, status: 400 })
      }
    }
  } else if (request.method === 'OPTIONS') {
    return new Response('OK', { headers })
  } else {
    return new Response('Not found', { headers, status: 404 })
  }
}

async function handleEncryptRequest(body) {
  const iv = Date.now().toString()
  const enc = await encrypt(encode(body.pt), encode(body.pp), encode(iv))
  const ct = btoa(ab2str(enc))
  return new Response(JSON.stringify({ ct, iv }), {
    headers: { ...headers, 'Content-Type': 'application/json;charset=UTF-8' },
  })
}

async function handleDecryptRequest(body) {
  const payment = await verifyReceipt(body.vr, body.bi)
  if (payment) {
    const dec = await decrypt(
      str2ab(atob(body.ct)),
      encode(body.pp),
      encode(body.iv),
    )
    const pt = decode(dec)
    return new Response(JSON.stringify({ pt }), {
      headers: { ...headers, 'Content-Type': 'application/json;charset=UTF-8' },
    })
  } else {
    return new Response('Payment required', { headers, status: 402 })
  }
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

async function getKeyMaterial() {
  const encoder = new TextEncoder()
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(MASTERKEY),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey'],
  )
}

async function deriveKey(salt) {
  const keyMaterial = await getKeyMaterial()
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 1000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  )
}

async function encrypt(plaintext, salt, iv) {
  const key = await deriveKey(salt)
  return crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    plaintext,
  )
}

async function decrypt(cyphertext, salt, iv) {
  const key = await deriveKey(salt)
  return crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    cyphertext,
  )
}

async function verifyReceipt(verifier, balanceId) {
  const endpoint = new URL(
    verifier.endsWith('/')
      ? `${verifier}balances/${balanceId}:spend`
      : `${verifier}/balances/${balanceId}:spend`,
  )
  const response = await fetch(endpoint.href, { method: 'POST', body: '1' })
  return response.ok
}
