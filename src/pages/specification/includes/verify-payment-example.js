/** @type {MonetizationEvent} event */
async function verifyPayment(event) {
  // Legacy receivers don't support returning incoming payment URLs
  if (!event.incomingPayment) {
    throw new Error('No incoming payment URL')
  }

  // Poll the incoming payment to check the amount received
  const response = await fetch(event.incomingPayment, {
    credentials: 'same-origin',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    // The incoming payment was fetched successfully
    const { receivedAmount } = await response.json()
    const { amount, assetCode, assetScale } = receivedAmount
    console.log(`Received ${assetCode}${amount / 10 ** assetScale}.`)
    return receivedAmount
  }
}
