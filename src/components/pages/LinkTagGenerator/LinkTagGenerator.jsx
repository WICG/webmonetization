import { useState } from 'react'
import styles from './LinkTagGenerator.module.css'
import CodeBlock from '../CodeBlock'

export default function LinkTagGenerator() {
  const [pointerInput, setPointerInput] = useState('')
  const [pointer, setPointer] = useState('https://paymentpointer.example/alice')
  const [invalidUrl, setInvalidUrl] = useState(false)

  const isValidPointer = (pointerInput) => {
    try {
      const url = new URL(pointerInput)
      if (url.pathname === '/') {
        return `${url.href}.well-known/pay`
      }
      return url.href
    } catch (err) {
      if (pointerInput.charAt(0) === '$') {
        const parsedPointer = pointerInput.replace('$', 'https://')
        const pointerUrl = new URL(parsedPointer)
        if (pointerUrl.pathname === '/') {
          return `${pointerUrl.href}.well-known/pay`
        }
        return pointerUrl.href
      } else {
        setInvalidUrl(true)
        return '$paymentpointer.example/alice'
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
            placeholder='$paymentpointer.example/alice'
            value={pointerInput}
            onChange={(evt) => {
              setPointerInput(evt.target.value)
              setInvalidUrl('')
            }}
          />
          <button
            className='btn'
            type='submit'
            data-umami-event='Link tag page - Generator'
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
          <p className='error'>
            Please check the format of your payment pointer
          </p>
        ) : (
          ''
        )}
      </form>

      <CodeBlock>{`<link rel="monetization" href="${pointer}" />`}</CodeBlock>

      <p className={styles.text}>
        After generating your <code>&lt;link&gt;</code> element, add the element
        to the <code>&lt;head&gt;</code> section of your website.
      </p>

      <p className={styles.text}>
        Visit our <a href='/docs'>docs</a> to learn more about Web Monetization.
      </p>
    </>
  )
}
