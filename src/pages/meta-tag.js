import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Layout from '@theme/Layout'
import { Link } from '@docusaurus/router'
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function MetaTag (props) {
  const { config: siteConfig } = props

  const [ pointerInput, setPointerInput ] = useState('')
  const [ pointer, setPointer ] = useState('$YourPaymentPointer')
  const [ useVerifier, setUseVerifier ] = useState(false)

  return (
  <BrowserOnly>
  <Layout
    permalink='/meta-tag'
    title={siteConfig.title}
    description={siteConfig.tagLine}
  >
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer metaTagContainer">
        <header className="postHeader">
          <h1>Meta Tag Generator</h1>
        </header>
        <p>
          This Meta Tag Generator helps you generate your HTML meta tag to monetize your website.<br />
          Just provide your Payment Pointer and click generate.
        </p>
        <form id="paymentPointerForm" onSubmit={ev => ev.preventDefault()} >
          <input
            className="paymentPointerInput"
            type="text"
            placeholder="$YourPaymentPointer"
            onChange={ev => {
              setPointerInput(ev.target.value)
            }}
          />
          <button
            id="generateButton"
            onClick={() => {
              setPointer(pointerInput)
            }}
          >
            Generate
          </button>
        </form>
        <FormControlLabel
          control={
            <Checkbox
              checked={useVerifier}
              onChange={ev => {
                setUseVerifier(ev.target.checked)
              }}
              color="default"
            />
          }
          label={
            <span>
              Use <Link to={'/docs/receipt-verifier/#use-our-publicly-available-receipt-verifier'}>receipt verifier service</Link> (Advanced)
            </span>
          }
        />
        <p>
          Read our <Link to='/docs'>docs</Link> to learn more about Web Monetization. If you're interested in splitting revenue between multiple parties, check out the <Link to='/prob-revshare'>Probabilistic Revshare Generator</Link>.
        </p>
        <div className="metaTagOutput">
          <p>
            To monetize your website add the following &lt;meta&gt; tag to the &lt;head&gt; section of all pages on your website.
          </p>
          <code id="metaTag">
            &lt;meta name="monetization" content="{useVerifier ? `$webmonetization.org/api/receipts/${encodeURIComponent(pointer)}` : pointer}" /&gt;
            <img src='/img/copy_icon.svg' id="copyIcon" className="btnClipboard" alt="copy-icon" />
          </code>
        </div>
      </Container>
    </div>
  </Layout>
  </BrowserOnly>
  )
}
