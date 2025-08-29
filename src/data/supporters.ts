import type { HeroContent, Pills } from '../types/shared'
import supporterHero from "@assets/hero-supporter.svg";

export const heroContent: HeroContent = {
    heroTitle: "Support the content you love, effortlessly",
    image: supporterHero,
    primaryCta: {
        href: "/supporters/get-started/",
        text: "Install the Web Monetization Browser Extension",
        event: "Supporters page link - Extension"
    },
    secondaryCta: {
        href: "/wallets/",
        text: "Set up a wallet",
        event: "Supporters page link - Wallets"
    }
}
export const supporterTags: Pills = [
    {
        text: "Send your support straight to the source."
    },
    {
        text: "Keep your data private while making a real difference."
    },
    {
        text: "Support freely, with any amount, across multiple currencies."
    }
]
