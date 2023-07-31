import { useState } from 'react'
import styles from './LinkTagGenerator.module.css'
import CodeBlock from '../CodeBlock'

export default function LinkTagGenerator() {
  const [pointerInput, setPointerInput] = useState('')
  const [pointer, setPointer] = useState('https://YourPaymentPointer')
  const [invalidUrl, setInvalidUrl] = useState(false)

  const isValidPointer = (pointerInput) => {
    try {
      const url = new URL(pointerInput)
      return url.href
    } catch (err) {
      if (pointerInput.charAt(0) === '$') {
        return pointerInput.replace('$', 'https://')
      } else {
        setInvalidUrl(true)
        return '$YourPaymentPointer'
      }
    }
  }

  const parsePointerUrl = (pointerInput) => {
    return isValidPointer(pointerInput)
  }

  return (
    <>
      <form onSubmit={(evt) => evt.preventDefault()} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            id='paymentPointer'
            label='Payment Pointer URL'
            placeholder='$YourPaymentPointer'
            value={pointerInput}
            onChange={(evt) => {
              setPointerInput(evt.target.value)
              setInvalidUrl('')
            }}
          />
          <button
            className='btn'
            type='submit'
            onClick={(evt) => {
              evt.preventDefault()
              setInvalidUrl(false)
              setPointer(parsePointerUrl(pointerInput))
            }}
          >
            Generate
          </button>
        </div>
        {invalidUrl ? (
          <span className={styles.error}>
            Please check the format of your payment pointer
          </span>
        ) : (
          ''
        )}
      </form>

      <CodeBlock>{`<link rel="monetization" href="${pointer}" />`}</CodeBlock>

      <p className={styles.text}>
        To monetize your website add the above <code>&lt;link&gt;</code> tag to
        the <code>&lt;head&gt;</code> section of all pages on your website.
      </p>

      <p className={styles.text}>
        Read our <a href='/docs'>docs</a> to learn more about Web Monetization.
        If you're interested in splitting revenue between multiple parties,
        check out the{' '}
        <a href='/prob-revshare'>Probabilistic Revshare Generator</a>.
      </p>
    </>
  )
}
