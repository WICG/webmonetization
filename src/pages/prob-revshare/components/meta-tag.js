import React from 'react'
import { useShares } from './use-shares'

export function SharesMetaTag () {
  const [ shares ] = useShares()

  const serializedShares = shares.reduce((agg, share) => {
    if (share.pointer && share.weight) {
      agg[share.pointer] = share.weight
    }
    return agg
  }, {})

  if (!Object.keys(serializedShares).length) {
    return <p>Please enter some shares with valid payment pointers and weights</p>
  }

  const encodedShares = btoa(JSON.stringify(serializedShares))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')

  const params = new URLSearchParams()
  params.set('pm', encodedShares)

  const parsedPointer = new URL('https://webmonetization.org/api/revshare/pay')
  parsedPointer.search = params.toString()

  const pointer = parsedPointer.href

  return <code id="metaTag">
    &lt;meta name="monetization content="{pointer}" /&gt;
    <img src='/img/copy_icon.svg' id="copyIcon" className="btnClipboard" />
  </code>
}
