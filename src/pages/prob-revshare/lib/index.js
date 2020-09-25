const BASE_REVSHARE_POINTER = 'https://webmonetization.org/api/revshare/pay'
const POINTER_MAP_PARAM = 'pm'
const CHART_COLORS = [
  '#6ADAAB',
  '#5DC495',
  '#50AF7F',
  '#439A6B',
  '#368657',
  '#297244',
  '#1C5F32',
  '#0E4C21',
  '#003A10'
]

export function getValidShares (shares) {
  return shares.filter(share => share.pointer && Number(share.weight))
}

export function sharesToChartData (shares) {
  return getValidShares(shares).map((share, i) => ({
    title: share.name || share.pointer,
    value: Number(share.weight),
    color: CHART_COLORS[i % CHART_COLORS.length]
  }))
}

export function sharesToMap (shares) {
  return shares.reduce((agg, share) => {
    if (share.pointer && share.weight) {
      agg[share.pointer] = share.weight
    }
    return agg
  }, {})
}

export function sharesFromMap (map) {
  return Object.keys(map).map(pointer => ({
    pointer,
    weight: map[pointer]
  }))
}

export function base64url (str) {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

export function fromBase64url (str) {
  return atob(str
    .replace(/\-/g, '+')
    .replace(/_/g, '/'))
}

export function sharesToPaymentPointer (shares) {
  const validShares = getValidShares(shares)
  if (!validShares.length) {
    return
  }

  const shareMap = sharesToMap(validShares)
  const encodedShares = base64url(JSON.stringify(shareMap))

  const params = new URLSearchParams()
  params.set(POINTER_MAP_PARAM, encodedShares)

  const parsedPointer = new URL(BASE_REVSHARE_POINTER)
  parsedPointer.search = params.toString()

  return parsedPointer.href
}

export function pointerToShares (pointer) {
  try {
    const parsed = new URL(pointer)
    const params = new URLSearchParams(parsed.search)
    const encodedMap = params.get('pm')

    if (!encodedMap) {
      throw new Error('No share data found. Make sure you copy the whole "content" field from your meta tag.')
    }

    const pointerMap = JSON.parse(fromBase64url(encodedMap))
    return sharesFromMap(pointerMap)
  } catch (e) {
    if (e.name === 'TypeError') {
      throw new Error('Meta tag or payment pointer is malformed')
    } else if (e.name === 'SyntaxError') {
      throw new Error('Payment pointer has malformed share data. Make sure to copy the entire pointer.')
    } else {
      throw e
    }
  }
}

export function tagToShares (tag) {
  const parser = new DOMParser()
  const node = parser.parseFromString(tag, 'text/html')
  const meta = node.head.querySelector('meta[name="monetization"]')

  if (!meta) {
    console.log(node, node.head, node.head.querySelector('meta[name="monetization"]'))
    throw new Error('Please copy the exact meta tag you got from this revshare tool. It seems to be malformed.')
  }

  return pointerToShares(meta.content)
}

export function tagOrPointerToShares (tag) {
  const trimmedTag = tag.trim()
  if (!trimmedTag) {
    throw new Error('Tag or pointer is empty')
  }

  if (trimmedTag.startsWith(BASE_REVSHARE_POINTER)) {
    return pointerToShares(trimmedTag)
  } else {
    return tagToShares(trimmedTag)
  }
}

export function trimDecimal (dec) {
  return Number(dec.toFixed(3))
}
