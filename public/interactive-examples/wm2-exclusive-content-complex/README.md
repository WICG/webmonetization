# Show indicator and exclusive content

You can use Web Monetization to show an indicator to your visitors while they wait up to three seconds for Web Monetization to initialize.

Non-web monetized users will be presented with a message that says exclusive content is available if they become web monetized. The exclusive content will remain hidden.

The exclusive content will be shown to web monetized visitors.

# Web Monetization

Web Monetization is an easier way for site visitors to financially contribute to creators.

Site visitors and creators must both have an account with a Web Monetization-compatible digital wallet.

By adding a single line of code to their pages, creators can receive payments from web monetized site visitors.

Site visitors configure their Web Monetization browser extension by setting the amount they want to automatically pay each time they visit a web monetized site. This takes the burden of manually selecting to pay on a page-by-page basis off of visitors.

Only the web monetized site visitors can choose when and how much to pay. A page cannot automatically withdraw funds from a visitor's payment account.

# How this project is set up

## ← index.html

Contains a monetization `<link>` element, a `hidden` style, references to two JS files, and the content for the example web page.

The monetization `<link>` element contains a wallet address as the `href` value. The wallet address is provided by a Web Monetization-compatible digital wallet.

## ← exclusive-content-complex.js

Contains the script that listens for the `monetization` event and defines the functions used to activate the `showCTA`, `showLoading`, and `showExclusiveContent` states.

- showCTA - Show a call-to-action to a non-web monetized visitor
- showLoading - Show a loading message to a web monetized visitor
- showExclusiveContent - Show exclusive content to a web monetized visitor

If the visitor isn't web monetized, the CTA appears. If the visitor is web monetized, the loader appears.

When the `monetization` event fires, the script hides the `cta` div in `index.html` and removes the `hidden` style for the `exclusive` div.

## ← wm-previewer.js

Contains a script to mimic Web Monetization for demonstration purposes. Only activates in an iframe. This script does not need to be implemented on actual web monetized pages.

The script also adds the **View as web monetized visitor** button to the index page. For the button to appear, you must view this Glitch example in an iframe, not in a new window.

# Additional References

If you're viewing this example outside of a guide hosted on webmonetization.org, you can find more information here:

- <a href="https://webmonetization.org" target="_blank">Webmonetization.org</a>
- <a href="https://webmonetization.org/docs/guides/provide-exclusive-content/#example-2---complex" target="_blank">Provide Exclusive Content doc on webmonetization.org</a>
