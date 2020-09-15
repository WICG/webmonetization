import { fromBase64Url } from './base64'

export interface PointerMap {
  [pointer: string]: number
}

export function pickPointer (pointers: PointerMap): string {
  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
  let choice = Math.random() * sum

  for (const pointer in pointers) {
    const weight = pointers[pointer]
    if ((choice -= weight) <= 0) {
      return pointer
    }
  }

  // this should never get reached
  throw new Error('unable to choose pointer; drew invalid value')
}

export function resolvePointer (pointer: string): string {
  if (!pointer.startsWith('$')) {
    return pointer
  }

  const url = new URL('https://' + pointer.substring(1))
  if (url.pathname === '/') {
    url.pathname = '/.well-known/pay'
  }

  return url.href
}

export function parsePointerMap (url: string): PointerMap {
  const parsed = new URL(url)
  const search = new URLSearchParams(parsed.search)

  const pointerMapB64 = search.get('pm')
  console.log('pointerMapB64', pointerMapB64)
  if (!pointerMapB64) {
    throw new Error('request does not include pointer map')
  }

  const pointerMapJson = fromBase64Url(pointerMapB64)
  const pointerMap = JSON.parse(pointerMapJson)

  for (const weight of Object.values(pointerMap)) {
    if (typeof weight !== 'number') {
      throw new Error('pointer weights must be numbers')
    }
  }

  return pointerMap as PointerMap
}
