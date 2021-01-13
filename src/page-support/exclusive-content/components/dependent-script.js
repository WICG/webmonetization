import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyContent } from './copy-content'

export function DependentScript() {
  // TODO: change url to exclusive content script
  const dependentScript = `<script type="module">
  import { exclusiveContent } from "./exclusive-content.js";
  exclusiveContent();
</script>`

  return (
    <>
      <div>
        <CopyContent
          id='dependentScript'
          message='Copy script with dependencies'
        />
        <SyntaxHighlighter id='dependentScript' language='htmlbars' style={docco}>
          {dependentScript}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
