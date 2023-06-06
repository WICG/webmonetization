import React, { useState } from 'react'
import { Container, TextField } from '@mui/material'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

export default function MetaTag(props) {
  const { config: siteConfig } = props

  const [pointerInput, setPointerInput] = useState('')
  const [pointer, setPointer] = useState('$YourPaymentPointer')
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
    <Layout
      permalink='/meta-tag'
      title={siteConfig.title}
      description={siteConfig.tagLine}
    >
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer metaTagContainer'>
          <header className='postHeader'>
            <h1>Link Tag Generator</h1>
          </header>
          <p>
            This Link Tag Generator helps you generate your HTML link tag to
            monetize your website.
            <br />
            Just provide your{' '}
            <Link to='/https://docs.openpayments.guide/docs/payment-pointers'>
              Payment Pointer
            </Link>{' '}
            and click generate.
          </p>
          <form id='paymentPointerForm' onSubmit={(ev) => ev.preventDefault()}>
            <TextField
              id='paymentPointer'
              label='$YourPaymentPointer'
              variant='outlined'
              value={pointerInput}
              error={Boolean(invalidUrl)}
              helperText={
                invalidUrl
                  ? 'Please check the format of your payment pointer'
                  : ''
              }
              fullWidth
              onChange={(ev) => {
                setPointerInput(ev.target.value)
                setInvalidUrl('')
              }}
            />
            <button
              id='generateButton'
              onClick={() => {
                setInvalidUrl(false)
                setPointer(parsePointerUrl(pointerInput))
              }}
            >
              Generate
            </button>
          </form>
          <p>
            Read our <Link to='/docs'>docs</Link> to learn more about Web
            Monetization. If you're interested in splitting revenue between
            multiple parties, check out the{' '}
            <Link to='/prob-revshare'>Probabilistic Revshare Generator</Link>.
          </p>
          <div className='metaTagOutput'>
            <p>
              To monetize your website add the following &lt;meta&gt; tag to the
              &lt;head&gt; section of all pages on your website.
            </p>
            <code id='metaTag'>
              &lt;link rel="monetization" href="{pointer}" /&gt;
              <img
                src='/img/copy_icon.svg'
                id='copyIcon'
                className='btnClipboard'
                alt='copy-icon'
              />
            </code>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
