const React = require('react');
const { useState } = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function MetaTag(props) {
  const { config: siteConfig, language = '' } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer metaTagContainer">
        <header className="postHeader">
          <h1>Meta Tag Generator</h1>
        </header>
        <p>
          This Meta Tag Generator helps you generating your HTML meta tag to monetize your website.<br />
          Just provide your Payment Pointer and click generate.
        </p>
        <form id="paymentPointerForm">
          <input 
            className="paymentPointerInput"
            type="text"
            placeholder="$YourPaymentPointer"
          />
          <button id="generateButton">Generate</button>
        </form>
        <script dangerouslySetInnerHTML={{
          __html: "document.getElementById('paymentPointerForm').onsubmit = setpp"
        }} />
        <p>
          To learn more, read the on how to monetize your site, read the <a href={docUrl('getting-started.html', props.language)}>Docs</a>.
        </p>
        <div className="metaTagOutput">
          <p>
            To monetize your website add the following &lt;meta&gt; tag to the &lt;head&gt; section of all pages on your website.
          </p>
          <code id="metaTag">
            &lt;meta name="monetization" content="<span id="pp">$YourPaymentPointer</span>" /&gt;
            <img src={`${baseUrl}img/copy_icon.svg`} id="copyIcon" className="btnClipboard" />
          </code>
        </div>
      </Container>
    </div>
  )
}

module.exports = MetaTag;
