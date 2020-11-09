export const headers = generateHeaders()

export function generateHeaders(): HeadersInit {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Access-Control-Allow-Origin', '*')
  requestHeaders.set('Access-Control-Allow-Methods', 'POST,OPTIONS')
  requestHeaders.set('Access-Control-Allow-Headers', 'Content-Type')
  requestHeaders.set('Access-Control-Max-Age', '86400')
  return requestHeaders
}

export function getRandomValue(): string {
  return [...Array(16)]
    .map((i) => (~~(Math.random() * 36)).toString(36))
    .join('')
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
