import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyContent } from './copy-content'

export function IndependentScript() {
  const [script, setScript] = useState('')

  useEffect(() => {
    const getJS = () =>
      fetch('../../../../static/js/exclusive-content.js').then((r) => r.text())

    getJS().then(
      (r) => {
        const independentScript = `<script>
${r}
</script>`
        setScript(independentScript)
      },
      (e) => {
        setScript(e)
      }
    )
  })

  return (
    <>
      <div>
        <CopyContent
          id='independentScript'
          message='Copy script without dependencies'
        />
        <SyntaxHighlighter
          id='independentScript'
          language='htmlbars'
          style={docco}
        >
          {script}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
