const React = require('react')

class Footer extends React.Component {
  docUrl (doc, language) {
    const { baseUrl, docsUrl } = this.props.config
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`

    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl

    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render () {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>WebMonetization.org</h5>
          </div>
          <div>
            <h5>Navigation</h5>
            <a href='/'>
              Home
            </a>
            <a href='/meta-tag'>
              Meta Tag Generator
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://github.com/WICG/webmonetization"
              target="_blank"
              rel="noreferrer noopener">
              GitHub
            </a>
            <a
              href="https://forum.interledger.org"
              target="_blank"
              rel="noreferrer noopener">
              ILP Forum
            </a>
            <a
              href="https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785"
              target="_blank"
              rel="noreferrer noopener">
              Web Platform Incubator Community Group
            </a>
            <a
              href="https://interledger.org"
              target="_blank"
              rel="noreferrer noopener">
              Interledger
            </a>
          </div>
          <div>
            <h5>Resources</h5>
            <a href={this.docUrl('getting-started.html')}>Docs</a>
            <a
              href="/specification.html"
              target="_blank"
              rel="noreferrer noopener">
              Specification
            </a>
            <a
              href="https://paymentpointers.org"
              target="_blank"
              rel="noreferrer noopener">
              Payment Pointers
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer
