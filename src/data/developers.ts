import type { CTA, HeroContent, Pills, UpdateContent, ContentSection } from '../types/shared'
import blogThumbnail from "@assets/tech-blog-thumbnail.svg";
import developerHero from "@assets/hero-developer.svg";
import developerPlayground from "@assets/developer-playground.svg";
import astroPlugin from "@assets/logo-plugin-astro.svg";
import reactPlugin from "@assets/logo-plugin-react.svg";
import evelentyPlugin from "@assets/logo-plugin-11ty.png";

export interface Plugin {
    name?: string,
    image?: ImageMetadata,
    cta: {
        href: string
        event?: string
        text?: string
        primary?: boolean
        external?: boolean
    },
    desc: string,
    version?: string[]
}

export const heroContent: HeroContent = {
    heroTitle: "I am a developer",
    heroSubtitle: "I want to help shape the future of the web",
    image: developerHero,
    heroParagraph: "Whether you're building plugins, extensions, or libraries,  your contributions can make open, sustainable monetization a reality.",
    primaryCta: {
        href: "/developers/interfaces/",
        text: "Read the technical documentation",
        event: "Developers page link - WM API"
    }
}

export const playgroundContent: ContentSection = {
    image: developerPlayground,
    imgMetaData: {
        position: "left"
    },
    title: "Web Monetization Playground",
    primaryCta: {
        text: "Try the playground",
        href: "/play/",
        event: "Developers page - Playground"
    }
}

export const blog: UpdateContent = {
    image: blogThumbnail,
    title: "End-to-end testing the Web Monetization browser extension",
    titleLink: "https://interledger.org/developers/blog/e2e-testing-wm-browser-extension/",
    titleEvent: "Developers page - WM ext e2e testing blog",
    paragraphs: [
        "End-to-end testing a browser extension can be tricky, but Playwright helps us get it right. In this post, we share how we test the Web Monetization extension—from wallet connections to micro-payments—ensuring a smooth, reliable experience for users."
    ],
    cta: {
        text: "Read the blog",
        href: "https://interledger.org/developers/blog/",
        event: "Developers page link - Tech blog"
    }
}

export const developerTags: Pills = [
    {
        text: "I build tools for publishers"
    },
    {
        text: "I can improve the extension or plugins"
    },
    {
        text: "I care about open standards"
    },
    {
        text: "I want to collaborate with the community"
    }
]

export const plugins: Plugin[] = [
    {
        name: "Astro Monetization",
        image: astroPlugin,
        cta: {
            href: "https://github.com/devcer/astro-monetization",
            text: "Find out more",
            event: "Developers page - Astro Monetization plugin",
            primary: false
        },
        desc: "This Astro component simplifies the process of adding monetization links to your Astro sites.",
        version: [
            "2.0"
        ]
    },
    {
        name: "react-monetize",
        image: reactPlugin,
        cta: {
            href: "https://github.com/guidovizoso/react-monetize",
            text: "Find out more",
            event: "Developers page - react-monetize plugin",
            primary: false,
            external: true
        },
        desc: "Helpers and hooks to speed up your integration with Web Monetization API",
        version: [
            "1.0",
            "2.0"
        ]
    },
    {
        name: "Monetize 11ty",
        image: evelentyPlugin,
        cta: {
            href: "https://github.com/devcer/eleventy-plugin-monetization",
            text: "Find out more",
            event: "Developers page - Monetize 11ty plugin",
            primary: false,
            external: true
        },
        desc: "An Eleventy plugin to monetize posts and site content by creating exclusive content areas",
        version: [
            "1.0",
            "2.0"
        ]
    },
    {
        name: "Hugo Web Monetization Component",
        cta: {
            href: "https://github.com/sabinebertram/hugo-webmonetization-component"
        },
        desc: "Theme component that enables Web Monetization on your entire Hugo website",
        version: [
            "1.0"
        ]
    },
    {
        name: "gridsome-plugin-monetization",
        cta: {
            href: "https://github.com/Sergix/gridsome-plugin-monetization"
        },
        desc: "Web Monetization plugin for Gridsome",
        version: [
            "1.0"
        ]
    },
    {
        name: "gatsby-plugin-monetization",
        cta: {
            href: "https://github.com/mrmuhammadali/gatsby-plugin-monetization"
        },
        desc: "A Gatsby plugin for react-monetize to speed up your integration with Web Monetization",
        version: [
            "1.0"
        ]
    },
    {
        name: "ngx-monetization",
        cta: {
            href: "https://github.com/CDDelta/ngx-monetization"
        },
        desc: "Web Monetization API for Angular",
        version: [
            "1.0"
        ]
    },
    {
        name: "Vuepress Plugin Web-Monetization",
        cta: {
            href: "https://github.com/spekulatius/vuepress-plugin-web-monetization"
        },
        desc: "Adds a Web Monetization meta tag to your VuePress website",
        version: [
            "1.0"
        ]
    },
    {
        name: "Tessy",
        cta: {
            href: "https://github.com/VladimirMikulic/tessy"
        },
        desc: "Advanced Web Monetization testing library with powerful declarative API",
        version: [
            "1.0"
        ]
    },
    {
        name: "svelte-monetization",
        cta: {
            href: "https://github.com/sorxrob/svelte-monetization"
        },
        desc: "A minimal and lightweight wrapper for the Web Monetization API",
        version: [
            "1.0"
        ]
    },
    {
        name: "Moodle Webmonetization Module",
        cta: {
            href: "https://github.com/andrewhancox/moodle-local_webmonetization"
        },
        desc: "A plugin for adding a web monetization meta tag to your Moodle site",
        version: [
            "1.0"
        ]
    },
    {
        name: "Jekyll + Webmonetization",
        cta: {
            href: "https://github.com/philnash/jekyll-web_monetization"
        },
        desc: "A Jekyll plugin for adding a Web Monetization meta tag to your site",
        version: [
            "1.0"
        ]
    },
    {
        name: "Pipe Web Monetization",
        cta: {
            href: "https://www.pipewebmonetization.com/"
        },
        desc: "Web monetize your WordPress website and access your revenue via an analytics dashboard",
        version: [
            "1.0"
        ]
    }
]
