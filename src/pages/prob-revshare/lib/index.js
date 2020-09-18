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

export function base64url (str) {
  return btoa(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
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
