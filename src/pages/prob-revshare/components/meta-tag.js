import React from 'react'
import { useShares } from '../state'
import { sharesToPaymentPointer, validateShares } from '../lib'
import { MetaText } from './meta-text'

export function SharesMetaTag () {
  const [ shares ] = useShares()
  const pointer = sharesToPaymentPointer(shares)

  if (!validateShares(shares)) {
    return <p>Please fix the errors in your revshare.</p>
  }

  if (!pointer) {
    return <p>Please enter some shares with valid payment pointers and weights</p>
  }

  return <>
    <MetaText />
    <code id="metaTag">
      &lt;meta name="monetization" content="{pointer}"&gt;
      <img src='/img/copy_icon.svg' id="copyIcon" className="btnClipboard" />
    </code>
  </>
}
