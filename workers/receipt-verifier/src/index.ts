addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  url.pathname = url.pathname.substring(PATH_PREFIX.length)
  url.host = RECEIPT_VERIFIER_HOST

  console.log('rewriting', event.request.url, 'to', url.href)

  return event.respondWith(fetch(url.href, {
    headers: {
      accept: event.request.headers.get('accept') || 'application/json'
    }
  }))
})
