import fetch from 'node-fetch'
import * as pathMod from 'path'
import * as fs from 'fs'

const HEADER = `
---
id: explainer
title: Web Monetization Explainer
sidebar_label: Web Monetization
---

`

const EXPLAINER_URL = 'https://raw.githubusercontent.com/adrianhopebailie/web-monetization/master/explainer.md'

const EXPLAINER_PATH = pathMod.resolve(__dirname, '../../docs/explainer.md')

const SUBSTITUTIONS: Array<[RegExp, string]> = [
  [/\[\]\(flow\.svg\)/, '[test](assets/flow.svg)'],
  [/# Web Monetization Explainer\n\n/, ''],
]

async function fetchAndFilter() {
  const resp = await fetch(EXPLAINER_URL)
  let text = await resp.text()
  for (const [pattern, replacement] of SUBSTITUTIONS) {
    text = text.replace(pattern, replacement)
  }
  fs.writeFileSync(EXPLAINER_PATH, HEADER + text)
}

if (require.main === module) {
  fetchAndFilter().catch(console.error)
}

