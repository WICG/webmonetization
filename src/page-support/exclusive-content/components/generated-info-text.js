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
  id="${Math.random().toString(36).substr(2).replace(/^[0-9]/g, 'aa')}"
  paymentPointer="${exclusiveContent.pointer}"
  proxyPaymentPointer="${proxyPaymentPointer}${encodeURIComponent(
  exclusiveContent.pointer
)}"
  cypherText="${exclusiveContent.cypherText}"
  cypherVerifier="${exclusiveContent.cypherVerifier}"
  initVector="${exclusiveContent.initVector}"
  nonce="${exclusiveContent.nonce}"
>
  <div class="exclusiveMessage" style="text-align: center"></div>
  <div class="exclusiveContent"></div>
</div>`
  return (
    <>
      <p>
        Please add the following <code>div</code> tag to your HTML.
      </p>
      <CopyContent id='ec-div' message='Copy div tag' />
      <SyntaxHighlighter id='ec-div' language='html' style={docco}>
        {divTag}
      </SyntaxHighlighter>

      <p>You have the choice between</p>
      <ul>
        <li>embedding a script that depends on an external script</li>
        <li>embedding a script that doesn't have any dependencies</li>
      </ul>
    </>
  )
}