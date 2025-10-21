// Define your revenue share here.
// If these weights add to 100, then they represent the percent each address will receive.
const pointers = {
  'https://wallet.example.com/alice': 50,
  'https://wallet.example.com/bob': 40,
  'https://wallet.example.com/connie': 9.5,
  'https://wallet.example.com/dave': 0.5
}

function pickPointer () {
  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
  let choice = Math.random() * sum
  
  for (const pointer in pointers) {
    const weight = pointers[pointer]
    if ((choice -= weight) <= 0) {
      return pointer
    }
  }
}

function simulate () {
  const iterations = Number(document.getElementById('iterations').value)
  const results = {}
  
  for (let i = 0; i < iterations; ++i) {
    const pointer = pickPointer()
    results[pointer] = results[pointer]
      ? results[pointer] + 1
      : 1
  }
  
  const resultsElement = document.getElementById('results')
  resultsElement.innerText = JSON.stringify(results, null, 2)
}

window.addEventListener('load', () => {
  simulate()
  
  const revshareElement = document.getElementById('revshare')
  revshareElement.innerText = JSON.stringify(pointers, null, 2)
  const monetizationTag = document.createElement('link')
  monetizationTag.rel = 'monetization'
  monetizationTag.href = pickPointer()

  document.head.appendChild(monetizationTag)
})