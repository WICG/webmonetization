interface FaqQuestion {
  question: string
  answer: string[]
}

interface FaqCategory {
  title: string
  questions: FaqQuestion[]
}

const gettingStarted: FaqCategory = {
  title: 'Getting Started / General',
  questions: [
    {
      question: 'What is Web Monetization?',
      answer: [
        'Web Monetization is an open web standard. It connects publishers with their audiences and enables continuous payments to their websites.'
      ]
    },
    {
      question: 'How does Web Monetization work?',
      answer: [
        'Publishers and content owners can monetize their content and websites. When a visitor visits, they can express support for the content by making a one time contribution or by sending continuous payments as they spend time on the content. Visitors will need to use the Web Monetization extension.'
      ]
    },
    {
      question: 'Do I need cryptocurrency to use Web Monetization?',
      answer: [
        'No. While a wallet may support different currencies, including cryptocurrencies, part of selecting a wallet is choosing one that allows you to send and receive payments in your preferred currency.'
      ]
    }
  ]
}

const wallets: FaqCategory = {
  title: 'Wallets & Payment Pointers',
  questions: [
    {
      question: 'What is a wallet address? ',
      answer: [
        'A wallet address is a digital account identifier linked to your wallet, similar to an email address for money. You use it to send or request payments.',
        'Some wallet providers call it a wallet address, while others call it a payment pointer.',
        'Wallet addresses usually start with https://</br>Payment pointers usually start with $</br>',
        'Not all digital wallets support Web Monetization. For a full list of supported providers, please see <a href="/wallets/" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - WebMo docs">our documentation</a>.'
      ]
    },
    {
      question: 'Which wallets can I use?',
      answer: [
        'Several wallet providers support Web Monetization today. You can find more details <a href="/wallets/" target="_blank" rel="noopener noreferrer data-umami-event="FAQ page - WebMo docs">here</a>.'
      ]
    }
  ]
}

const supporters: FaqCategory = {
  title: 'For Supporters',
  questions: [
    {
      question: 'How do I start supporting websites with Web Monetization?',
      answer: [
        'You’ll need to sign up with a wallet provider that supports Web Monetization, and install the Web Monetization browser extension.'
      ]
    },
    {
      question: 'How and where can I get the extension?',
      answer: [
        'The Web Monetization extension is available as a browser extension. Visit <a href="/supporters/" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - Supporters">The supporter’s page</a> for the full list of browsers and links to the extension. '
      ]
    },
    {
      question: 'Which browsers are supported?',
      answer: [
        'The extension works with chromium based browsers (Chrome, Edge, Opera, etc.) and Firefox. The full list can be found <a href="/supporters#supported-browsers" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - Supporters">here</a>.'
      ]
    },
    {
      question: 'Are payments made through the extension secure?',
      answer: [
        'Yes. The extension communicates with your wallet without storing sensitive payment details. It instructs your wallet on when to make a payment and for how much. The payments themselves are handled outside of your extension and your browser, directly by your wallet provider.'
      ]
    },
    {
      question: 'I’m not seeing payments flow. What should I do?',
      answer: [
        'Check that your wallet is funded, your browser extension is active, and the site you’re visiting is web monetized.'
      ]
    },
    {
      question: 'What does it cost me to use Web Monetization?',
      answer: [
        'You control how much you spend by setting up a budget. The system sends very small amounts every few seconds to Web Monetized sites, while you browse. If your budget limit is reached, the payments will stop, unless you choose to extend your limit, so your budget is spread across all monetized sites you visit. There might be fees related to your wallet provider. '
      ]
    },
    {
      question: 'Do I have to share personal data to use Web Monetization?',
      answer: [
        'No. The extension only requires your wallet address. Payments are made anonymously and do not expose your identity to websites.'
      ]
    },
    {
      question: 'Why does the extension ask for so many invasive permissions?',
      answer: [
        'The extension checks every page you visit, each time you visit, for Web Monetization. That’s why the extension needs permission to access your browser tabs and certain types of data. You can view the full list of permissions and why they are needed <a href="https://github.com/interledger/web-monetization-extension/blob/main/docs/PERMISSIONS.md" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - Github">here</a>.'
      ]
    }
  ]
}

const publishers: FaqCategory = {
  title: 'For Publishers & Content Owners',
  questions: [
    {
      question: 'How can I monetize my website with Web Monetization?',
      answer: [
        'Add a Web Monetization <a href="/developers/link-element-webpage/" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - WebMo docs">&lt;link&gt; tag</a> to your site that contains your wallet address, and make sure you have a wallet account that supports Web Monetization.'
      ]
    },
    {
      question: 'Can I split the income between multiple recipients?',
      answer: [
        'Yes, you can split Web Monetization income between multiple recipients. This is done using revenue sharing. You can use <a href="/tools/prob-revshare/" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - Tools Revshare">The probabilistic Revenue Share tool</a> to share your earnings between multiple recipients.'
      ]
    },
    {
      question: 'Can I combine Web Monetization with ads or subscriptions?',
      answer: [
        'Yes. Web Monetization is complementary. You can use it by itself or alongside other revenue models.'
      ]
    }
  ]
}

const developers: FaqCategory = {
  title: 'For Developers',
  questions: [
    {
      question: 'How can I contribute to the standard?',
      answer: [
        'Web Monetization is being developed as part of a W3C Community Group. You can join discussions, share feedback, or contribute on <a href="https://github.com/WICG/webmonetization" target="_blank" rel="noopener noreferrer" data-umami-event="FAQ page - Github">GitHub</a>.'
      ]
    }
  ]
}

const faqContent: FaqCategory[] = [
  gettingStarted,
  wallets,
  supporters,
  publishers,
  developers
]

export default faqContent
