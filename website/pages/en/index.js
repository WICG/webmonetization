const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container

class HomeSplash extends React.Component {
  render () {
    const { siteConfig } = this.props
    const { baseUrl } = siteConfig

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <img src={props.img_src} alt="Web Monetization Icon" style={{ width: '120px' }} />
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/wm-icon-animated.svg`} />
        <img src={`${baseUrl}img/grey_wm_logo.svg`} className="bgLogo" alt="" />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render () {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SpashFooter = () => {
      return (
        <div className="splashFooter">
          <div>
            Web Monetization is being proposed as a W3C standard at&nbsp;
            <a
              href="https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785"
              target="_blank"
              rel="noreferrer noopener">
              the Web Platform Incubator Community Group
            </a>.
          </div>
        </div>
      )
    }

    const TextBlock = props => (
      <div className="contentBlock">
        <div className="contentContainer">
          {props.children}
        </div>
      </div>
    )

    const Motivation = () => (
      <TextBlock>
        <h2>Motivation</h2>
        <p>
          The ability to transfer money has been a long-standing omission
          from the web platform. As a result, the web suffers from a flood
          of advertising and corrupt business models. Web Monetization
          provides an open, native, efficient, and automatic way to
          compensate creators, pay for API calls, and support crucial
          web infrastructure.
        </p>
      </TextBlock>
    )

    const WhyNow = () => (
      <TextBlock>
        <h2>Why Now?</h2>
        <p>
          Until recently, there hasn't been an open, neutral protocol
          for transferring money. <a href="https://interledger.org" target="_blank" rel="noreferrer noopener">Interledger</a> provides a simple,
          ledger-agnostic, and currency-agnostic method for the transfer
          of small quantities of money. This opens up the possibility for
          streaming money, which makes Web Monetization possible for the first time.
        </p>
      </TextBlock>
    )

    const CardBlock = props => (
      <div className="contentBlock" id={props.id}>
        <div className="cardBlock">
          {props.children}
        </div>
      </div>
    )

    const LastCard = () => (
      <div className="card">
        <span>Do you know another provider?&nbsp;
          <a href="https://github.com/WICG/webmonetization/edit/master/website/siteConfig.js"
            target="_blank"
            rel="noreferrer noopener">
            Make a PR
          </a>
        </span>
      </div>
    )

    const CardSet = props =>
      <div className="cardContainer">
        {props.cards.map(({ name, image, link }) =>
          <a className="card" href={link} target="_blank" rel="noreferrer noopener" key={name}>
            <img src={`${baseUrl}img/${image}`} alt={name} />
          </a>
        )}
        <LastCard />
      </div>

    const Wallets = () =>
      <CardBlock id="wallets">
        <h2>Web Monetization Wallets</h2>
        <p>These providers offer ILP-enabled wallets.</p>
        <CardSet cards={siteConfig.wallets} />
      </CardBlock>

    const Providers = () =>
      <CardBlock id="providers">
        <h2>Web Monetization Providers</h2>
        <p>These providers offer Web Monetization services</p>
        <CardSet cards={siteConfig.providers} />
      </CardBlock>

    const Browsers = () =>
      <CardBlock id="browsers">
        <h2>Web Monetization Enabled Browsers</h2>
        <p>These browsers implement Web Monetization natively or via an extension</p>
        <CardSet cards={siteConfig.browsers} />
      </CardBlock>

    const Tools = () =>
      <CardBlock id="tools">
        <h2>Web Monetization Tools</h2>
        <p>These tools enable Web Monetization features</p>
        <CardSet cards={siteConfig.tools} />
      </CardBlock>

    const Resources = () =>
      <Container padding={['left', 'right']} className="resources">
        <h2>Resources</h2>
        <div className="resourceContainer">
          <div className="resource">
            <h3>Documentation</h3>
            <p>Resource on how to add Web Monetization to your site.<br /><a href={docUrl('getting-started.html', this.props.language)}>Read docs ›</a></p>
          </div>
          <div className="resource">
            <h3>Explainer</h3>
            <p>The explainer submitted to the W3C.<br /><a href={docUrl('explainer.html', this.props.language)}>Read explainer ›</a></p>
          </div>
          <div className="resource">
            <h3>Specification</h3>
            <p>The formal specification.<br />
              <a href={docUrl('specification.html', this.props.language)}
                target="_blank"
                rel="noreferrer noopener">
                Read specs ›
              </a>
            </p>
          </div>
        </div>
        <p>Do you know other developer resources? <a href="https://github.com/WICG/webmonetization" target="_blank" rel="noreferrer noopener">Make a PR</a></p>
      </Container>

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <SpashFooter />
        <div className="mainContainer">
          <Motivation />
          <WhyNow />
          <Wallets />
          <Providers />
          <Browsers />
          <Tools />
          <Resources />
        </div>
      </div>
    )
  }
}

module.exports = Index
