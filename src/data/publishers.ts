import type {
  ContentSection,
  HeroContent,
  Pills,
  HowItWorks
} from '../types/shared'
import heroPoster from '@assets/hero-publisher-poster.png'
import linkTagGenerator from '@assets/link-tag-generator.svg'
import toolsOverview from '@assets/tools-overview.png'
import wordPressLogo from '@assets/wordpress.svg'
import howItWorksHorizontal from '@assets/how-it works-publishers-horizontal.png'
import howItWorksVertical from '@assets/how-it-works-publishers-vertical.png'
import heroVideo from '@assets/animations/hero-publisher.mp4'

export const heroContent: HeroContent = {
  heroTitle: 'Engagement equals income, <strong>instantly</strong>',
  posterImage: heroPoster,
  videoSrc: heroVideo,
  primaryCta: {
    href: '/tools/',
    text: "Get to the publisher's tools",
    event: 'Publishers page link - Tools'
  }
}
export const publisherTags: Pills = [
  {
    text: 'Get paid in real time without disrupting the user experience.'
  },
  {
    text: 'Give your audiences a seamless way to support you.'
  },
  {
    text: 'Add a new revenue stream without changing your existing setup.'
  }
]
export const walletConnectionContent: ContentSection = {
  image: linkTagGenerator,
  imgMetaData: {
    position: 'right'
  },
  title: 'Connect your website to your wallet and earn in real time',
  primaryCta: {
    text: 'Generate your link and start earning',
    href: '/tools/link-tag/',
    event: 'Publishers page - Link tag generator'
  },
  secondaryCta: {
    text: 'See the documentation',
    href: '/developers/overview/',
    event: 'Publishers page - Developer docs'
  }
}
export const toolsContent: ContentSection = {
  image: toolsOverview,
  imgMetaData: {
    position: 'left'
  },
  title: 'Tell your audience about Web Monetization',
  primaryCta: {
    text: 'Browse the tools',
    href: '/tools/',
    event: 'Publishers page - Tools page'
  },
  secondaryCta: {
    text: 'See the documentation',
    href: '/developers/tools/',
    event: 'Publishers page - Developer tools docs'
  }
}
export const wordPressPluginContent: ContentSection = {
  image: wordPressLogo,
  imgMetaData: {
    position: 'right',
    padding: '20px 40px'
  },
  title: 'Add Web Monetization to WordPress. Fast, Free, Private.',
  primaryCta: {
    text: 'Get the WordPress plugin',
    href: '',
    event: 'Publishers page - WP plugin'
  },
  secondaryCta: {
    text: 'See the documentation',
    href: '/developers/overview/',
    event: 'Publishers page - Developer docs'
  }
}

export const HowItWorksPublishers: HowItWorks = {
  heading: 'How it works',
  imageHorizontal: howItWorksHorizontal,
  imageVertical: howItWorksVertical,
  alt: 'Diagram showing the flow of a Web Monetization payment: from content consumer through their digital wallet, as directed by the Web Monetization extension, to the publisher’s wallet, and finally to the publisher.'
}
