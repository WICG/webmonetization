import {
  handleNewKeyDerivation,
  handleExKeyDerivation,
} from './lib/requestHandlers'
import { headers as responseHeaders } from './lib/helpers'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request): Promise<Response> {
  if (request.method === 'POST') {
    const requestHeaders = new Map(request.headers)
    if (requestHeaders.get('content-type') !== 'application/json') {
      return new Response('Unsupported content type. Use application/json', {
        headers: responseHeaders,
        status: 415,
      })
    }
    const url = new URL(request.url)
    const path = url.pathname

    const body = await request.json()
    if (path === '/deriveNewKey') {
      if (body.paymentPointer) {
        return handleNewKeyDerivation(body.paymentPointer)
      } else {
        return new Response('Payment pointer not part of request body', {
          headers: responseHeaders,
          status: 400,
        })
      }
    } else if (path === '/deriveKey') {
      if (
        body.paymentPointer &&
        body.nonce &&
        body.encVerifier &&
        body.initVector &&
        body.receipt
      ) {
        return handleExKeyDerivation(body)
      } else {
        return new Response('Input variables missing', {
          headers: responseHeaders,
          status: 400,
        })
      }
    } else {
      return new Response('Not found', {
        headers: responseHeaders,
        status: 404,
      })
    }
  } else if (request.method === 'OPTIONS') {
    return new Response('OK', { headers: responseHeaders })
  } else {
    return new Response('Not found', { headers: responseHeaders, status: 404 })
  }
}
