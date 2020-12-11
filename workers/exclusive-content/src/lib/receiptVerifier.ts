export async function verifyReceipt(verifier: string, receipt: string) {
  const endpoint = new URL(
    verifier.endsWith('/') ? `${verifier}verify` : `${verifier}/verify`,
  )
  const response = await fetch(endpoint.href, { method: 'POST', body: receipt })
  return response.ok
}
