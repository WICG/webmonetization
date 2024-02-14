export function fromBase64Url(b64: string) {
  return atob(b64.replace(/-/g, '+').replace(/_/g, '/'))
}
