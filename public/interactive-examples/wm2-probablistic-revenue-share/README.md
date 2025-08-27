# Set up probabilistic revenue sharing

Each monetization `<link>` element only supports a single wallet address as the `href` value. 

You can add multiple monetization links to your page, but there's no guarantee that your site visitor's Web Monetization extension can support paying to multiple addresses at once.

As an alternative to adding multiple links, you can set up probablistic revenue sharing.

In this example, you'll enter the number of times that you want one of the wallet addresses to be chosen at random. The default is 10,000 which equals 10,000 page loads by web monetized visitors. The chance of an address being chosen is based on its assigned weight. 

Alice's address has a weight of 50 out of 100 (defined in the `script.js` file). This means her address has a 50% chance of being chosen. Alice's share of the page's total revenue will approach 50% as more web monetized visitors access the page.

# Web Monetization

Web Monetization is an easier way for site visitors to financially contribute to creators.

Site visitors and creators must both have an account with a Web Monetization-compatible digital wallet.

By adding a single line of code to their pages, creators can receive payments from web monetized site visitors.

Site visitors configure their Web Monetization browser extension by setting the amount they want to automatically pay each time they visit a web monetized site. This takes the burden of manually selecting to pay on a page-by-page basis off of visitors.

Only the web monetized site visitors can choose when and how much to pay. A page cannot automatically withdraw funds from a visitor's payment account.

# How this project is set up

## ← index.html

Unlike our other Web Monetization examples, this index file doesn't contain a monetization `<link>` element. The wallet addresses are instead contained within the `script.js` file. 

## ← script.js

Allocates weights to the four wallet addresses contained within the file. The `pickPointer` function chooses one at random, based on their respective weights (also defined in this file). 

The `simulate` function outputs the result based on the number of attempts entered in the Simulate field on the web page.

# Additional References

If you're viewing this example outside of a guide hosted on webmonetization.org, you can find more information here:

- <a href="https://webmonetization.org" target="_blank">Webmonetization.org</a>
- <a href="https://webmonetization.org/docs/guides/set-up-probabilistic-revenue-sharing/" target="_blank">Set up probabilistic revenue sharing on webmonetization.org</a>
- <a href="https://webmonetization.org/prob-revshare/" target="_blank">Probabilistic Revenue Generator</a>
