const ec = document.getElementById('ec')
const data = {
  pp: ec.getAttribute('pointer'),
  vr: ec.getAttribute('verifier'),
  bi: '',
  ct: document.getElementById('ecc').innerText.trim(),
  iv: ec.getAttribute('iv'),
}
let decryption

if (document.monetization !== undefined) {
  setMeta()

  document.monetization.addEventListener('monetizationpending', (event) => {
    document.getElementById('ecm').innerHTML =
      '<p>⸻ ⏰ Waiting for Web Monetization to start to unlock this content. ⸻</p>'
  })

  document.monetization.addEventListener('monetizationstart', (event) => {
    decryption = setInterval(function () {
      decryptExclusiveContent(data)
    }, 3000)
    document.getElementById('ecm').innerHTML =
      '<p>⸻ ⏰ Waiting for Web Monetization receipt verification to unlock this content. ⸻</p>'
  })

  document.monetization.addEventListener('monetizationstop', (event) => {
    removeContentDiv()
    document.getElementById('ecm').innerHTML =
      '<p>⸻ 🔒 This content is exclusive for users with Web Monetization enabled. ⸻</p>'
  })

  document.monetization.addEventListener('monetizationprogress', (event) => {
    if (data.bi !== event.detail.requestId) {
      data['bi'] = event.detail.requestId
    }
    creditReceipt(data.vr, data.bi, event.detail.receipt)
  })
} else {
  document.getElementById('ecm').innerHTML =
    '<p>⸻ 🔒 This content is exclusive for users with Web Monetization enabled. ⸻</p>'
}

function setMeta() {
  const meta = document.createElement('meta')
  meta.name = 'monetization'
  meta.content = data.pp
  document.getElementsByTagName('head')[0].appendChild(meta)
}

function creditReceipt(verifier, balanceId, receipt) {
  const endpoint = new URL(
    verifier.endsWith('/')
      ? `${verifier}balances/${balanceId}:creditReceipt`
      : `${verifier}/balances/${balanceId}:creditReceipt`,
  )

  fetch(endpoint.href, { method: 'POST', body: receipt }).then((res) => {
    if (!res.ok) {
      console.log(`Credit receipt error: ${res.status} ${res.statusText}`)
    }
  })
}

function decryptExclusiveContent(data) {
  fetch(
    'https://exclusive-content-generator.sabinebertram.workers.dev/decrypt',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      clearInterval(decryption)
      addContentDiv(data.pt)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
}

function addContentDiv(content) {
  const div = document.createElement('div')
  div.id = 'ecp'
  div.innerHTML = content
  document.getElementById('ec').appendChild(div)
  document.getElementById('ecm').innerHTML =
    '<p>⸻ 🔓 Enjoy your exclusive content! ⸻</p>'
}

function removeContentDiv() {
  document.getElementById('ecp').remove()
}
