import type { HeroContent, Pills } from '../types/shared'
import supporterHero from "@assets/hero-supporter.svg";

export const heroContent: HeroContent = {
    heroTitle: "Support the content you love, effortlessly.",
    heroSubtitle: "Because great content deserves something in return",
    image: supporterHero,
    heroParagraph: "With Web Monetization, your support fuels a better internet. Pay publishers directly by streaming micropayments.\n\nPay only for what you value and help create a more open, sustainable content ecosystem, one second at a time. No tracking, no strings attached.",
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
        text: "Support freely, with any amount, across multiple currencies."
    },
    {
        text: "Keep your data private while making a real difference."
    },
    {
        text: "Send your support straight to the source."
    }
]
