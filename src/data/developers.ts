import type {
  HeroContent,
  Pills,
  UpdateContent,
  ContentSection
} from '../types/shared'
import blogThumbnail from '@assets/tech-blog-thumbnail.svg'
import heroPoster from '@assets/hero-developer-poster.png'
import developerPlayground from '@assets/developer-playground.svg'
import astroPlugin from '@assets/logo-plugin-astro.svg'
import reactPlugin from '@assets/logo-plugin-react.svg'
import evelentyPlugin from '@assets/logo-plugin-11ty.png'
import heroVideo from '@assets/animations/hero-developer.mp4'

export interface Plugin {
  name: string
  image?: ImageMetadata
  cta: {
    href: string
    event?: string
    text?: string
  }
  desc: string
}

export const heroContent: HeroContent = {
  heroTitle: 'Pay the web <strong>forward</strong>',
  posterImage: heroPoster,
  videoSrc: heroVideo,
  primaryCta: {
    href: '/developers/interfaces/',
    text: 'Read more of the technical documentation',
    event: 'Developers page link - WM API'
  }
}

export const playgroundContent: ContentSection = {
  image: developerPlayground,
  imgMetaData: {
    position: 'left'
  },
  title: "Developer's Playground",
  primaryCta: {
    text: 'Try the Playground',
    href: '/play/',
    event: 'Developers page - Playground'
  }
}

export const blog: UpdateContent = {
  image: blogThumbnail,
  title: 'End-to-end testing the Web Monetization browser extension',
  titleLink:
    'https://interledger.org/developers/blog/e2e-testing-wm-browser-extension/',
  titleEvent: 'Developers page - WM ext e2e testing blog',
  paragraphs: [
    'End-to-end testing a browser extension can be tricky, but Playwright helps us get it right. In this post, we share how we test the Web Monetization extension—from wallet connections to micro-payments—ensuring a smooth, reliable experience for users.'
  ],
  cta: {
    text: 'Read the blog',
    href: 'https://interledger.org/developers/blog/',
    event: 'Developers page link - Tech blog'
  }
}

export const developerTags: Pills = [
  {
    text: 'Advance open standards.'
  },
  {
    text: 'Collaborate with the community.'
  },
  {
    text: 'Improve extensions and plugins.'
  },
  {
    text: 'Build tools that empower publishers.'
  }
]

export const plugins: Plugin[] = [
  {
    name: 'Astro Monetization',
    image: astroPlugin,
    cta: {
      href: 'https://github.com/devcer/astro-monetization',
      text: 'Find out more',
      event: 'Developers page - Astro Monetization plugin'
    },
    desc: 'This Astro component simplifies the process of adding monetization links to your Astro sites.'
  },
  {
    name: 'react-monetize',
    image: reactPlugin,
    cta: {
      href: 'https://github.com/guidovizoso/react-monetize',
      text: 'Find out more',
      event: 'Developers page - react-monetize plugin'
    },
    desc: 'Helpers and hooks to speed up your integration with Web Monetization API'
  },
  {
    name: 'Monetize 11ty',
    image: evelentyPlugin,
    cta: {
      href: 'https://github.com/devcer/eleventy-plugin-monetization',
      text: 'Find out more',
      event: 'Developers page - Monetize 11ty plugin'
    },
    desc: 'An Eleventy plugin to monetize posts and site content by creating exclusive content areas'
  }
]
