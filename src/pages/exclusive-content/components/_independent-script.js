import React, { useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'

export function IndependentScript() {
  const [script, setScript] = useState('')

  useEffect(() => {
    const getJS = () =>
      fetch('../../../../static/js/exclusive-content.js').then((response) =>
        response.text()
      )

    getJS().then(
      (response) => {
        const independentScript = `<script>
${response}
</script>`
        setScript(independentScript)
      },
      (err) => {
        setScript(err)
      }
    )
  })

  return <CodeBlock className='language-html'>{script}</CodeBlock>
}
