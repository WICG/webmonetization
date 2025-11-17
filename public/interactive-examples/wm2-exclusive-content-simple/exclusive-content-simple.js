if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (ev) => {
    document.getElementById('exclusive').classList.remove('hidden')
  })
}
