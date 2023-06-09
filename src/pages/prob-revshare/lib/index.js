const BASE_REVSHARE_POINTER = '$webmonetization.org/api/revshare/pay/'
const POINTER_LIST_PARAM = 'p'
const CHART_COLORS = [
  '#6ADAAB',
  '#5DC495',
  '#50AF7F',
  '#439A6B',
  '#368657',
  '#297244',
  '#1C5F32',
  '#0E4C21',
  '#003A10',
]

export function getValidShares(shares) {
  return shares.filter((share) => share.pointer && Number(share.weight))
}

export function sharesToChartData(shares) {
  return getValidShares(shares).map((share, i) => ({
    title: share.name || share.pointer,
    value: Number(share.weight),
    color: CHART_COLORS[i % CHART_COLORS.length],
  }))
}

export function sharesToPointerList(shares) {
  return shares
    .map((share) => {
      if (share.pointer && share.weight) {
        return [share.pointer, Number(share.weight), share.name]
      } else {
        return
      }
    })
    .filter((x) => x)
}

export function sharesFromPointerList(pl) {
  return pl.map((share) => ({
    pointer: share[0],
    weight: share[1],
    name: share[2],
  }))
}

export function base64url(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export function fromBase64url(str) {
  return atob(str.replace(/\-/g, '+').replace(/_/g, '/'))
}

export function sharesToPaymentPointer(shares) {
  const validShares = getValidShares(shares)
  if (!validShares.length) {
    return
  }

  const pointerList = sharesToPointerList(validShares)
  const encodedShares = base64url(JSON.stringify(pointerList))
  return BASE_REVSHARE_POINTER + encodedShares
}

export function pointerToShares(pointer) {
  try {
    const parsed = new URL(normalizePointerPrefix(pointer))
    const params = new URLSearchParams(parsed.search)

    // list could be in query string or in path segment
    const encodedList =
      params.get(POINTER_LIST_PARAM) || parsed.pathname.split('/').pop()

    if (!encodedList) {
      throw new Error(
        'No share data found. Make sure you copy the whole "content" field from your meta tag.'
      )
    }

    const pointerList = JSON.parse(fromBase64url(encodedList))

    if (!validatePointerList(pointerList)) {
      throw new Error(
        'Share data is invalid. Make sure you copy the whole "content" from your meta tag.'
      )
    }

    return sharesFromPointerList(pointerList)
  } catch (e) {
    if (e.name === 'TypeError') {
      throw new Error('Meta tag or payment pointer is malformed')
    } else if (e.name === 'SyntaxError') {
      throw new Error(
        'Payment pointer has malformed share data. Make sure to copy the entire pointer.'
      )
    } else {
      throw e
    }
  }
}

export function tagToShares(tag) {
  const parser = new DOMParser()
  const node = parser.parseFromString(tag, 'text/html')
  const meta = node.head.querySelector('meta[name="monetization"]')

  if (!meta) {
    console.log(
      node,
      node.head,
      node.head.querySelector('meta[name="monetization"]')
    )
    throw new Error(
      'Please copy the exact meta tag you got from this revshare tool. It seems to be malformed.'
    )
  }

  return pointerToShares(meta.content)
}

function isRevsharePointer(str) {
  return (
    str.startsWith(BASE_REVSHARE_POINTER) ||
    str.startsWith(normalizePointerPrefix(BASE_REVSHARE_POINTER))
  )
}

export function tagOrPointerToShares(tag) {
  const trimmedTag = tag.trim()
  if (!trimmedTag) {
    throw new Error('Tag or pointer is empty')
  }

  if (isRevsharePointer(trimmedTag)) {
    return pointerToShares(trimmedTag)
  } else {
    return tagToShares(trimmedTag)
  }
}

export function trimDecimal(dec) {
  return Number(dec.toFixed(3))
}

export function validatePointerList(pointerList) {
  console.log('pointerList', pointerList)
  if (!Array.isArray(pointerList)) {
    return false
  }

  for (const entry of pointerList) {
    if (typeof entry[0] !== 'string') {
      console.log('ptr not string', entry)
      return false
    }
    if (typeof entry[1] !== 'number') {
      console.log('weight not number', entry)
      return false
    }
    if (entry[2] && typeof entry[2] !== 'string') {
      console.log('name not string', entry)
      return false
    }
  }

  return true
}

export function normalizePointerPrefix(pointer) {
  return pointer.startsWith('$') ? 'https://' + pointer.substring(1) : pointer
}

export function validatePointer(pointer) {
  if (!pointer) {
    return true
  }

  if (typeof pointer !== 'string') {
    return false
  }

  try {
    const _ = new URL(normalizePointerPrefix(pointer))
    return true
  } catch (e) {
    return false
  }
}

export function validateWeight(weight) {
  if (!weight) {
    return true
  }

  return !(isNaN(weight) || Number(weight) < 0)
}

export function validateShares(shares) {
  if (!Array.isArray(shares)) {
    return false
  }

  for (const share of shares) {
    if (!validatePointer(share.pointer)) {
      return false
    }

    if (!validateWeight(share.weight)) {
      return false
    }
  }

  return true
}
