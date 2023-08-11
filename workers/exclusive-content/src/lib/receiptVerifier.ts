const VERIFIER = 'https://receipt-verifier-dehz6dtlzq-uc.a.run.app'

export async function verifyReceipt(verifier: string, receipt: string) {
  const verifierUrl = verifier.startsWith(
    'https://webmonetization.org/api/receipts',
  )
    ? VERIFIER
    : verifier
  const endpoint = new URL(
    verifierUrl.endsWith('/')
      ? `${verifierUrl}verify`
      : `${verifierUrl}/verify`,
  )
  const response = await fetch(endpoint.href, { method: 'POST', body: receipt })
  return response.ok
}
