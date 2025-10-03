import type { ImageMetadata } from 'astro'

export interface CTA {
  text: string
  href: string
  event: string
  icon?: ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata
}

export interface UpdateContent {
  image: ImageMetadata
  title: string
  titleLink?: string
  titleEvent?: string
  subtitles?: {
    tag?: string
    date?: string
    author?: string
  }
  paragraphs: string[]
  cta: CTA
}

export interface HeroContent {
  heroTitle: string
  posterImage: ImageMetadata
  videoSrc: string
  primaryCta: CTA
  secondaryCta?: CTA
}

export type Pills = Array<{ text: string }>

export interface ContentSection {
  image: ImageMetadata
  imgMetaData: {
    position: 'right' | 'left'
    padding?: string
  }
  title: string
  primaryCta: CTA
  secondaryCta?: CTA
}

export interface HowItWorks {
  heading: string
  imageHorizontal: ImageMetadata
  imageVertical: ImageMetadata
  alt: string
}
