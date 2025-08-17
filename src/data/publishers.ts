import type { ContentSection, HeroContent, Pills } from '../types/shared'
import publisherHero from "../../public/img/hero-publisher.svg";
import linkTagGenerator from "../../public/img/link-tag-generator.svg";
import toolsOverview from "../../public/img/tools-overview.png";
import wordPressLogo from "../../public/img/wordpress.svg";

export const heroContent: HeroContent = {
    heroTitle: "I am a publisher",
    heroSubtitle: "I want to monetize my website",
    image: publisherHero,
    heroParagraph: "Web Monetization is a lightweight, privacy-preserving way to monetize your content. With its pay-as-you-browse model, you'll earn revenue based on the amount of time your visitors spend on your site. Web Monetization offers flexible, non-intrusive monetization without disrupting your existing revenue streams. It works seamlessly alongside ads, subscriptions, and memberships. All you need is a wallet address and a single line of code.",
    primaryCta: {
        href: "/developers/get-started/",
        text: "Monetize my website",
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
        text: "I own and publish digital content"
    },
    {
        text: "I want to be fairly supported"
    },
    {
        text: "I want to expand my reach"
    },
    {
        text: "I can share revenue with collaborators"
    },
    {
        text: "I can tell my audience about Web Monetization"
    }
]
export const walletConnectionContent: ContentSection = {
    image: linkTagGenerator,
    imgMetaData: {
        position: "right"
    },
    title: "Web monetize your pages",
    primaryCta: {
        text: "Use the link tag generator",
        href: "/tools/link-tag/",
        event: "Publishers page - Link tag generator"
    },
    secondaryCta: {
        text: "Show me the documentation",
        href: "/developers/overview/",
        event: "Publishers page - Developer docs"
    }
}
export const toolsContent: ContentSection = {
    image: toolsOverview,
    imgMetaData: {
        position: "left"
    },
    title: "Tell your visitors you support Web Monetization",
    primaryCta: {
        text: "Use our publisher tools",
        href: "/tools/",
        event: "Publishers page - Tools page"
    },
    secondaryCta: {
        text: "Show me the documentation",
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
    title: "Web monetize your WordPress site",
    primaryCta: {
        text: "Use the WordPress plugin",
        href: "",
        event: "Publishers page - WP plugin"
    },
    secondaryCta: {
        text: "Show me the documentation",
        href: "/developers/overview/",
        event: "Publishers page - Developer docs"
    }
}