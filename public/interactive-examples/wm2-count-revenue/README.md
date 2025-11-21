# Show visitors their contribution amount

You can use Web Monetization to show your visitors exactly how much they've contributed to your page during their current browsing session.

For web monetized visitors, the counter increases by one cent every ~20 seconds.

# Web Monetization

Web Monetization is an easier way for site visitors to financially contribute to creators.

Site visitors and creators must both have an account with a Web Monetization-compatible digital wallet.

By adding a single line of code to their pages, creators can receive payments from web monetized site visitors.

Site visitors configure their Web Monetization browser extension by setting the amount they want to automatically pay each time they visit a web monetized site. This takes the burden of manually selecting to pay on a page-by-page basis off of visitors.

Only the web monetized site visitors can choose when and how much to pay. A page cannot automatically withdraw funds from a visitor's payment account.

# How this project is set up

## ← index.html

Contains a monetization `<link>` element, references to two JS files, and the content for the example web page.

The monetization `<link>` element contains a wallet address as the `href` value. The wallet address is provided by a Web Monetization-compatible digital wallet.

## ← counter.js

Fires a `monetization` event each time there's a payment and updates the amount shown on the index page.

The amount is written to the `total` span on the index page.

### ← wm-previewer.js

Contains a script to mimic Web Monetization for demonstration purposes. Only activates in an iframe. This script does not need to be implemented on actual web monetized pages.

The script also adds the **View as web monetized visitor** button to the index page. For the button to appear, you must view this Glitch example in an iframe, not in a new window.

# Additional References

If you're viewing this example outside of a guide hosted on webmonetization.org, you can find more information here:

- <a href="https://webmonetization.org" target="_blank">Webmonetization.org</a>
- <a href="https://webmonetization.org/docs/guides/add-a-streaming-payments-counter/" target="_blank">Add a Streaming Payments Counter doc on webmonetization.org</a>
