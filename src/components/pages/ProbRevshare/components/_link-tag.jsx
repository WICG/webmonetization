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
        Unable to generate link element. Please check your entries for errors.
      </p>
    )
  }

  if (!pointer) {
    return <p>Enter shares with valid payment pointers and weights.</p>
  }

  return (
    <>
      <CodeBlock>{`<link rel="monetization" href="${pointer}" />`}</CodeBlock>
    </>
  )
}
