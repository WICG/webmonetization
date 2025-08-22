import type { ContentSection, HeroContent, Pills } from '../types/shared'
import publisherHero from "@assets/hero-publisher.svg";
import linkTagGenerator from "@assets/link-tag-generator.svg";
import toolsOverview from "@assets/tools-overview.png";
import wordPressLogo from "@assets/wordpress.svg";

export const heroContent: HeroContent = {
    heroTitle: "Browsing time becomes income.\nInstantly.",
    heroSubtitle: "Web Monetization transforms browsing time into income, one second at a time.",
    image: publisherHero,
    heroParagraph: "Earn money every second someone spends on your content. Our pay-as-you-browse model turns attention into direct, automatic payments. Web Monetization is fast, secure, private, and integrates seamless with your current setup. Get paid as people browse from those who value your work. All it takes is a wallet address and a single line of code.",
    primaryCta: {
        href: "/developers/get-started/",
        text: "Get the publisher's tools",
        event: "Publishers page link - Monetize"
    },
    secondaryCta: {
        href: "/tools/",
        text: "Get the publisher tools",
        event: "Publishers page link - Tools"
    }
}
export const publisherTags: Pills = [
    {
        text: "Gain income based on presence, without disrupting experience."
    },
    {
        text: "Add a new income layer without changing your existing setup."
    },
    {
        text: "Receive earnings in real time, with no middleman in the way."
    }
]
export const walletConnectionContent: ContentSection = {
    image: linkTagGenerator,
    imgMetaData: {
        position: "right"
    },
    title: "Connect your website to your wallet and start earning automatically with Web Monetization",
    primaryCta: {
        text: "Generate your link and start earning",
        href: "/tools/link-tag/",
        event: "Publishers page - Link tag generator"
    },
    secondaryCta: {
        text: "See the documentation",
        href: "/developers/overview/",
        event: "Publishers page - Developer docs"
    }
}
export const toolsContent: ContentSection = {
    image: toolsOverview,
    imgMetaData: {
        position: "left"
    },
    title: "Bring your audience into Web Monetization, effortlessly",
    primaryCta: {
        text: "Get our free Interaction Tools",
        href: "/tools/",
        event: "Publishers page - Tools page"
    },
    secondaryCta: {
        text: "See the documentation",
        href: "/developers/tools/",
        event: "Publishers page - Developer tools docs"
    }
}
export const wordPressPluginContent: ContentSection = {
    image: wordPressLogo,
    imgMetaData: {
        position: "right",
        padding: "20px 40px"
    },
    title: "Add Web Monetization to WordPress. Fast, Free, Private.",
    primaryCta: {
        text: "Get the WordPress plugin",
        href: "",
        event: "Publishers page - WP plugin"
    },
    secondaryCta: {
        text: "Seee the documentation",
        href: "/developers/overview/",
        event: "Publishers page - Developer docs"
    }
}