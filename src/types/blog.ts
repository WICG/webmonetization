export interface Blog {
  image: string
  imageWidth: number
  imageHeight: number
  title: string
  titleLink?: string
  subtitles?: {
    tag?: string
    date?: string
    author?: string
  }
  paragraphs: string[]
  ctaText: string
  link: string
  event: string
}

export interface Updates {
  updates: Array<Blog>
}
