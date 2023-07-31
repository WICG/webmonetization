import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import styles from './CodeBlock.module.css'

export default function CodeBlock({ children }) {
  const [isCopied, setIsCopied] = useState(false)

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(children)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.codeBlock}>
      <Highlight theme={themes.dracula} code={children} language='tsx'>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.pre} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button onClick={handleCopyClick} className={styles.btn}>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  )
}
