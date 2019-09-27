const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

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
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

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
      <div className="contentBlock">
        <div className="cardBlock">
          {props.children}
        </div>
      </div>
    )
    
    const Card = props => (
      <div className="card">
        {props.children}
      </div>
    )
    
    const Wallets = () => {
      const cards = [
        <img src={`${baseUrl}img/tipbot_logo.svg`} />,
        <img src={`${baseUrl}img/gatehub_logo.svg`} />,
        <img src={`${baseUrl}img/stronghold_logo.svg`} />,
        <span>Do you know another provider? <a>Make a PR</a></span>
      ].map(inner => <Card>{inner}</Card>)
      
      return (
        <CardBlock>
          <h2>Web Monetization Wallets</h2>
          <p>These providers offer ILP-enabled wallets.</p>
          <div className="cardContainer">
            {cards}
          </div>
        </CardBlock>
      )
    }

    const Providers = () => {
      const cards = [
        <img src={`${baseUrl}img/coil_logo.svg`} />,
        <span>Do you know another provider? <a>Make a PR</a></span>
      ].map(inner => <Card>{inner}</Card>)
      
      return (
        <CardBlock>
          <h2>Web Monetization Providers</h2>
          <p>These providers offer Web Monetization services</p>
          <div className="cardContainer">
            {cards}
          </div>
        </CardBlock>
      )
    }

    const Resource = props => (
      <div className="resource">
        {props.children}
      </div>
    )

    const Resources = () => (
      <Container padding={['left', 'right']} className="resources">
        <h2>Resources</h2>
        <div className="resourceContainer">
          <div className="resource">
            <h3>Documentation</h3>
            <p>Resource on how to add Web Monetization to your site.<br /><a>Read docs ></a></p>
          </div>
          <div className="resource">
            <h3>Explainer</h3>
            <p>The explainer submitted to the W3C.<br /><a>Read explainer ></a></p>
          </div>
          <div className="resource">
            <h3>Specification</h3>
            <p>The formal specification.<br /><a>Read specs ></a></p>
          </div>
        </div>
        <p>Do you know other developer resources? <a>Make a PR</a></p>
      </Container>
    )

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
