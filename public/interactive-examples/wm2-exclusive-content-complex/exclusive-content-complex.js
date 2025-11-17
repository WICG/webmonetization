function showExclusiveContent() {
  document.getElementById('loading').classList.add('hidden')
  document.getElementById('cta').classList.add('hidden')
  document.getElementById('exclusive').classList.remove('hidden')
}

function showCTA() {
  document.getElementById('loading').classList.add('hidden')
  document.getElementById('cta').classList.remove('hidden')
}

function showLoading() {
  document.getElementById('loading').classList.remove('hidden')
}

if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', (ev) => {
    showExclusiveContent()
  })
}

window.addEventListener('load', () => {
  if (!window.MonetizationEvent) {
    showCTA()
  } else {
    showLoading()
  }
})
