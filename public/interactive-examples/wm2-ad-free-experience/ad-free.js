const adCode =
  '<div style="border:1px solid #f00;color:red;margin:20px">This is an ad! Buy my product!</div>'

function showAds() {
  document.getElementById('ad').innerHTML = adCode
}

function removeAds() {
  document.getElementById('ad').remove()
}

let hasPaid = false
if (window.MonetizationEvent) {
  const link = document.querySelector('link[rel="monetization"]')
  link.addEventListener('monetization', () => {
    hasPaid = true
    removeAds()
  })
}

window.addEventListener('load', () => {
  if (!window.MonetizationEvent) {
    showAds()
  } else {
    setTimeout(() => {
      if (!hasPaid) {
        showAds()
      }
    }, 3000)
  }
})
