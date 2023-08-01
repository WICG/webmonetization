import { useShares } from '../state/_index'
import { sharesToPaymentPointer, validateShares } from '../lib/_index'
import CodeBlock from '../../CodeBlock'
import styles from '../styles.module.css'

export function SharesLinkTag() {
  const [shares] = useShares()
  const pointer = sharesToPaymentPointer(shares)

  if (!validateShares(shares)) {
    return (
      <p>
        There are some errors in your inputs, please check and fix them to
        generate your link tag.
      </p>
    )
  }

  if (!pointer) {
    return (
      <p>Please enter some shares with valid payment pointers and weights.</p>
    )
  }

  return (
    <>
      <p className={styles.text}>
        Copy this link tag into your site's <code>&lt;head&gt;</code> to apply
        the revshare. This applies revenue sharing to the whole site. For
        monetizing media, you would need to copy the generated <code>link</code>{' '}
        tag into your respective media elements. See{' '}
        <a href='/specification#monetizing-media'>Monetizing media</a> for usage
        examples.
      </p>
      <CodeBlock>{`<link rel="monetization" href="${pointer}" />`}</CodeBlock>
    </>
  )
}
