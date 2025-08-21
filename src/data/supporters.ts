import type { HeroContent, Pills } from '../types/shared'
import supporterHero from "@assets/hero-supporter.svg";

export const heroContent: HeroContent = {
    heroTitle: "I want to give my support",
    heroSubtitle: "Because great content deserves something in return",
    image: supporterHero,
    heroParagraph: "With Web Monetization, you can support publishers directly and help build a more sustainable content ecosystem. Pay only for what you consume through seamless micropayments. No long-term commitments, just access to content on your terms.",
    primaryCta: {
        href: "/supporters/get-started/",
        text: "Get started with the Web Monetization extension",
        event: "Supporters page link - Extension"
    },
    secondaryCta: {
        href: "/wallets/",
        text: "Set up a wallet or learn more",
        event: "Supporters page link - Wallets"
    }
}
export const supporterTags: Pills = [
    {
        text: "I value the content I consume"
    },
    {
        text: "I want to support creators directly"
    },
    {
        text: "I choose how much and who to support"
    },
    {
        text: "I care about an open, fair web"
    }
]
