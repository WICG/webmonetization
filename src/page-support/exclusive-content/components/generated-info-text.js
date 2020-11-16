import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyContent } from './copy-content'

export function GeneratedInfoText() {
  const divTag = `<div id="ec">
  <div id="ecm" style="text-align: center"></div>
  <div id="ecc"></div>
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
