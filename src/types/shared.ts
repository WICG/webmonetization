export interface CTA {
  text: string
  href: string
  event: string
}

export interface UpdateContent {
  image: string
  imageWidth: number
  imageHeight: number
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
