import React from 'react'
import { useShares } from '../state'
import { sharesToPaymentPointer } from '../lib'

export function SharesMetaTag () {
  const [ shares ] = useShares()
  const pointer = sharesToPaymentPointer(shares)

  if (!pointer) {
    return <p>Please enter some shares with valid payment pointers and weights</p>
  }

  return <code id="metaTag">
    &lt;meta name="monetization content="{pointer}" /&gt;
    <img src='/img/copy_icon.svg' id="copyIcon" className="btnClipboard" />
  </code>
}
