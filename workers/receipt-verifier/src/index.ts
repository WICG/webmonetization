function passHeaders (headers: Headers, names: string[]): Headers {
  return names.reduce((newHeaders: Headers, name: string) => {
    newHeaders.set(name, headers.get(name) || '')
    return newHeaders
  }, new Headers())
}

addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  url.pathname = url.pathname.substring(PATH_PREFIX.length)
  url.host = RECEIPT_VERIFIER_HOST

  console.log('rewriting', event.request.url, 'to', url.href)

  return event.respondWith(fetch(url.href, {
    method: event.request.method,
    body: event.request.body,
    headers: passHeaders(event.request.headers, [
      'accept',
      'content-type'
    ])
  }))
})
