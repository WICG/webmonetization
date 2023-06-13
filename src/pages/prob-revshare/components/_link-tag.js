import React from 'react'
import { useShares } from '../state/_index'
import { sharesToPaymentPointer, validateShares } from '../lib/_index'
import Link from '@docusaurus/Link'
import CodeBlock from '@theme/CodeBlock'

export function SharesLinkTag() {
  const [shares] = useShares()
  const pointer = sharesToPaymentPointer(shares)

  if (!validateShares(shares)) {
    return <p>Please fix the errors in your revshare.</p>
  }

  if (!pointer) {
    return (
      <p>Please enter some shares with valid payment pointers and weights.</p>
    )
  }

  return (
    <>
      <p>
        Copy this link tag into your site's <code>&lt;head&gt;</code> to apply
        the revshare. This applies revenue sharing to the whole site. For
        monetizing media, you would need to copy the generated <code>link</code>{' '}
        tag into your respective media elements. See{' '}
        <Link to='/specification.html#monetizing-media'>Monetizing media</Link>{' '}
        for usage examples.
      </p>
      <CodeBlock className='language-html'>
        {`<link rel="monetization" href="${pointer}" />`}
      </CodeBlock>
    </>
  )
}
