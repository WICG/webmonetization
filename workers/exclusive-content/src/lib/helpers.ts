export const headers = generateHeaders()

function generateHeaders(): HeadersInit {
  const headers: HeadersInit = new Headers()
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Access-Control-Allow-Methods', 'POST,OPTIONS')
  headers.set('Access-Control-Allow-Headers', 'Content-Type')
  headers.set('Access-Control-Max-Age', '86400')
  return headers
}

export function getRandomValue(): string {
  const array = new Uint8Array(16)
  const randomValues = crypto.getRandomValues(array)
  return ab2str(randomValues)
}

export function encode(str: string): Uint8Array {
  const encoder = new TextEncoder()
  return encoder.encode(str)
}

export function decode(ab: ArrayBuffer): string {
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(ab)
}

export function ab2str(ab: ArrayBuffer): string {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(ab)))
}

export function str2ab(str: string): ArrayBuffer {
  const decodedString = atob(str)
  var ab = new ArrayBuffer(decodedString.length)
  var abView = new Uint8Array(ab)
  for (var i = 0, strLen = decodedString.length; i < strLen; i++) {
    abView[i] = decodedString.charCodeAt(i)
  }
  return ab
}
