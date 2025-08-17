import type { UpdateContent } from '../types/shared'
import interledgerWallet from "../../public/img/logo-wallet-interledger-wallet.svg";
import chimoneyWallet from "../../public/img/logo-wallet-chimoney.svg";
import gateHubWallet from "../../public/img/logo-wallet-gatehub.svg";
import wmLaunch from "../../public/img/wm-launch-feature.svg";
import wmSummit from "../../public/img/wm-summit.png";
import wmHackathon from "../../public/img/wm-hackathon.png";

export interface Wallet {
  name: string,
  image: ImageMetadata,
  link: string
}

export const wallets: Wallet[] = [
  {
    name: "Interledger Wallet",
    image: interledgerWallet,
    link: "https://interledger.app/"
  },
  {
    name: "Chimoney",
    image: chimoneyWallet,
    link: "https://chimoney.app/?ref=webmonetization.org"
  },
  {
    name: "Gatehub",
    image: gateHubWallet,
    link: "https://gatehub.net/?ref=webmonetization.org"
  }
]

export const updates: UpdateContent[] = [
  {
    image: wmLaunch,
    title: "Announcing the Interledger Foundation’s Web Monetization Extension Beta Release",
    subtitles: {
      date: "24 Mar 2025",
      author: "Rabeb Othmani"
    },
    paragraphs: [
      "As the digital content economy grows, content creators, publishers, and users alike are looking for more flexible, intuitive ways to connect and transact.",
      "While ads, subscriptions, and paywalls remain essential tools, the future is about expanding possibilities and empowering choice."
    ],
    cta: {
      text: "Read the full article",
      href: "https://interledger.org/news/announcing-interledger-foundations-web-monetization-extension-beta-release",
      event: "Home page - Update Announcing WM extension"
    }
  },
  {
    image: wmSummit,
    title: "Interledger Summit - Mexico City",
    subtitles: {
      tag: "Summit",
      date: "5-6 Nov 2025"
    },
    paragraphs: [
      "The Interledger Summit is a global gathering of technologists, policy makers, advocates and artists who believe in open financial infrastructure. It bridges the gap between policy, technology and community and creates a vibrant environment for new ideas, collaborations and celebration of ideas."
    ],
    cta: {
      text: "Visit the summit website",
      href: "https://interledger.org/summit",
      event: "Home page - Update Summit"
    }
  },
  {
    image: wmHackathon,
    title: "Interledger Hackathon - Mexico City",
    subtitles: {
      tag: "Hackathon",
      date: "8-9 Nov 2025"
    },
    paragraphs: [
      "Join us in Mexico City on November 8–9 for the annual Interledger Hackathon! Explore the power of the Interledger Open Payments API and build innovative solutions that simplify cross-border payments, enhance financial inclusion, and automate financial workflows."
    ],
    cta: {
      text: "Learn more about the hackathon",
      href: "https://interledger.org/summit/hackathon",
      event: "Home page - Update Hackathon"
    }
  }
]