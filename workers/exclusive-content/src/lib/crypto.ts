import { encode } from './helpers'

export async function deriveKey(
  paymentPointer: string,
  nonce: string,
): Promise<ArrayBuffer> {
  const data = encode(paymentPointer + nonce)
  const masterKey = await importMasterKey()
  return crypto.subtle.sign('HMAC', masterKey, data)
}

export async function decrypt(
  cyphertext: ArrayBuffer,
  keyBuffer: ArrayBuffer,
  initVector: ArrayBuffer,
): Promise<ArrayBuffer> {
  const key = await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    'AES-GCM',
    false,
    ['encrypt', 'decrypt'],
  )
  return crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: initVector,
    },
    key,
    cyphertext,
  )
}

async function importMasterKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encode(MASTERKEY),
    {
      name: 'HMAC',
      hash: 'SHA-256',
    },
    false,
    ['sign'],
  )
}
