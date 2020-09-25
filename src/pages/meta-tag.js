import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Layout from '@theme/Layout'
import { Link } from '@docusaurus/router'

export default function MetaTag (props) {
  const { config: siteConfig } = props

  const [ pointerInput, setPointerInput ] = useState('')
  const [ pointer, setPointer ] = useState('$YourPaymentPointer')

  return <Layout
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
          This Meta Tag Generator helps you generating your HTML meta tag to monetize your website.<br />
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
        <p>
          To learn more, read the on how to monetize your site, read the <Link to='/docs'>Docs</Link>. If you're interested in splitting revenue between multiple parties, check out the <Link to='/prob-revshare'>Probabilistic Revshare Generator</Link>.
        </p>
        <div className="metaTagOutput">
          <p>
            To monetize your website add the following &lt;meta&gt; tag to the &lt;head&gt; section of all pages on your website.
          </p>
          <code id="metaTag">
            &lt;meta name="monetization" content="{pointer}" /&gt;
            <img src='/img/copy_icon.svg' id="copyIcon" className="btnClipboard" alt="copy-icon" />
          </code>
        </div>
      </Container>
    </div>
  </Layout>
}
