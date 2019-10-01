const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl } = siteConfig;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <img src={props.img_src} alt="Web Monetization Icon" style={{ width: "120px" }} />
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/wm-icon-anim.svg`} />
        <img src={`${baseUrl}img/grey_wm_logo.svg`} className="bgLogo" />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

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
      );
    };

    const TextBlock = props => (
      <div className="contentBlock">
        <div className="contentContainer">
          {props.children}
        </div>
      </div>
    );
    
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
    );

    const WhyNow = () => (
      <TextBlock>
        <h2>Why Now?</h2>
        <p>
          Until recently, there hasn't been an open, neutral protocol
          for transferring money. Interledger provides a simple,
          ledger-agnostic, and currency-agnostic method for the transfer
          of small quantities of money. This opens up the possibility for
          streaming money, which makes Web Monetization possible for the first time.
        </p>
      </TextBlock>
    );

    const CardBlock = props => (
      <div className="contentBlock" id={props.id}>
        <div className="cardBlock">
          {props.children}
        </div>
      </div>
    )
    
    const LastCard = () => (
      <div className="card">
        <span>Do you know another provider? <a href="https://github.com/interledger/webmonetization.org/edit/master/website/siteConfig.js">Make a PR</a></span>
      </div>
    )

    const CardSet = props =>
      <div className="cardContainer">
        {props.cards.map(({ name, image, link }) =>
          <a className="card" href={link} key={name}>
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
            <p>The formal specification.<br /><a href="https://adrianhopebailie.github.io/web-monetization/">Read specs ›</a></p>
          </div>
        </div>
        <p>Do you know other developer resources? <a href="https://github.com/interledger/webmonetization.org">Make a PR</a></p>
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
          <Resources />
        </div>
      </div>
    );
  }
}

module.exports = Index;
