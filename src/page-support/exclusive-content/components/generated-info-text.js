import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyContent } from './copy-content'
import { useExclusiveContent } from '../state'

export function GeneratedInfoText() {
  const [exclusiveContent] = useExclusiveContent()
  const proxyPaymentPointer = exclusiveContent.verifier.endsWith('/')
    ? exclusiveContent.verifier
    : exclusiveContent.verifier + '/'

  const divTag = `<div 
  class="exclusive" 
  id=${JSON.stringify(
    Math.random()
      .toString(36)
      .substr(2)
      .replace(/^[0-9]/g, 'aa')
  )}
  paymentpointer=${JSON.stringify(exclusiveContent.pointer)}
  proxypaymentpointer=${JSON.stringify(
    proxyPaymentPointer + encodeURIComponent(exclusiveContent.pointer)
  )}
  cyphertext=${JSON.stringify(exclusiveContent.cypherText)}
  cypherverifier=${JSON.stringify(exclusiveContent.cypherVerifier)}
  initvector=${JSON.stringify(exclusiveContent.initVector)}
  nonce=${JSON.stringify(exclusiveContent.nonce)}
>
  <div class="exclusiveMessage" style="text-align: center"></div>
  <div class="exclusiveContent"></div>
</div>`
  return (
    <>
      <p>Here is what you need to do to embed it on your web page:</p>
      <p>
        1. Add the following <code>div</code> tag to your HTML, in the spot you
        want the exclusive content to appear.
      </p>
      <CopyContent id='ec-div' message='Copy div tag' />
      <SyntaxHighlighter id='ec-div' language='htmlbars' style={docco}>
        {divTag}
      </SyntaxHighlighter>

      <p>
        2. Add{' '}
        <strong>
          one of the following <code>script</code> tags{' '}
        </strong>{' '}
        to your HTML
        <code>body</code>. You have the choice between embedding a script that
        depends on an external script and one that doesn't have any
        dependencies. If you include multiple exclusive content <code>div</code>{' '}
        tags, you only need to add the script once.
      </p>
    </>
  )
}
