import type { HeroContent, Pills, HowItWorks } from '../types/shared'
import heroPoster from '@assets/hero-supporter-poster.png'
import howItWorksHorizontal from '@assets/how-it-works-supporters-horizontal.png'
import howItWorksVertical from '@assets/how-it-works-supporters-vertical.png'
import heroVideo from '@assets/animations/hero-supporter.mp4'
import WalletIcon from '@assets/wallet.svg'

export const heroContent: HeroContent = {
  heroTitle: 'Support the content you love, <strong>effortlessly</strong>',
  posterImage: heroPoster,
  videoSrc: heroVideo,
  primaryCta: {
    href: '/supporters/get-started/',
    text: 'Install the Web Monetization Browser Extension',
    event: 'Supporters page link - Extension',
  },
  secondaryCta: {
    href: '/wallets/',
    text: 'Set up a wallet',
    icon: WalletIcon,
    event: 'Supporters page link - Wallets',
  },
}
export const supporterTags: Pills = [
  {
    text: 'Send your support straight to the source.',
  },
  {
    text: 'Keep your data private while making a real difference.',
  },
  {
    text: 'Support freely, with any amount, across multiple currencies.',
  },
]

export const HowItWorksSupporters: HowItWorks = {
  heading: 'How it works',
  imageHorizontal: howItWorksHorizontal,
  imageVertical: howItWorksVertical,
  alt: 'Diagram showing the flow of a Web Monetization payment: from content supporter through their digital wallet, as directed by the Web Monetization extension, to the publisher’s wallet, and finally to the publisher.',
}
