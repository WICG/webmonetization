import { deriveKey, decrypt } from './crypto'
import {
  headers,
  ab2str,
  str2ab,
  encode,
  decode,
  getRandomValue,
} from './helpers'
import { verifyReceipt } from './receiptVerifier'

headers.set('Content-Type', 'application/json;charset=UTF-8')

export async function handleNewKeyDerivation(
  paymentPointer: string,
): Promise<Response> {
  const nonce = getRandomValue()
  const keyBuffer = await deriveKey(paymentPointer, nonce)
  const key = ab2str(keyBuffer)
  return new Response(JSON.stringify({ key, nonce }), {
    headers,
  })
}

export async function handleExKeyDerivation(
  body: DeriveKeyRequestBody,
): Promise<Response> {
  const keyBuffer = await deriveKey(body.paymentPointer, body.nonce)
  const verifier = await decrypt(
    str2ab(body.encVerifier),
    keyBuffer,
    encode(body.initVector),
  )
  const verified = await verifyReceipt(decode(verifier), body.receipt)
  if (verified) {
    const key = ab2str(keyBuffer)
    return new Response(JSON.stringify({ key }), {
      headers,
    })
  } else {
    return new Response('Payment required', { headers, status: 402 })
  }
}
type DeriveKeyRequestBody = {
  paymentPointer: string
  nonce: string
  encVerifier: string
  initVector: string
  receipt: string
}
