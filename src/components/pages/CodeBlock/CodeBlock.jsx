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

  const btnCopiedStyles = isCopied ? styles.copied : ''

  return (
    <div className={styles.codeBlock}>
      <Highlight theme={themes.github} code={children} language='tsx'>
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
      <button
        onClick={handleCopyClick}
        className={`${styles.btn} ${btnCopiedStyles} not-content`}
        aria-label={isCopied ? 'Copied' : 'Copy code to clipboard'}
      >
        <span className={styles.btnIcons} aria-hidden='true'>
          <svg viewBox='0 0 24 24' className={styles.btnIcon}>
            <path
              fill='currentColor'
              d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'
            ></path>
          </svg>
          <svg viewBox='0 0 24 24' className={styles.btnSuccessIcon}>
            <path
              fill='currentColor'
              d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z'
            ></path>
          </svg>
        </span>
      </button>
    </div>
  )
}
