import { parsePointerMap, pickPointer, resolvePointer } from './lib/pointers'

addEventListener('fetch', (event) => {
  console.log('handling a request', event.request.url)
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  try {
    const pointerMap = parsePointerMap(request.url)
    const pointer = pickPointer(pointerMap)
    const spspUrl = resolvePointer(pointer)

    return Response.redirect(spspUrl, 302)
  } catch (e) {
    return new Response(e.message, {
      status: 400,
    })
  }
}
