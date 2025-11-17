let total = 0

if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]')
  const contribution = document.getElementById('contribution')

  link.addEventListener('monetization', (event) => {
    const {
      amountSent: { value, currency }
    } = event
    console.log(`Browser sent ${currency} ${value}.`)

    total += Number(value)

    contribution.innerText = new Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency
    }).format(total)
  })
}
