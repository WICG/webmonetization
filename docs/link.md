---
id: link
title: <link>
sidebar_label: <link>
---
import Specifications from '@site/src/components/Specifications';
import BrowserCompat from '@site/src/components/BrowserCompat';

To add web monetization to your page, you will need to add a `<link>` tag with a `rel='monetization'` indicating that some content on the page is monetized.  While a HTML document can contain an unlimited number of monetized `<link>` tags, implementations may restrict how many of those links are actually monetized. 

## Examples

```html
<link rel="monetization" href="https://example.com/pay">
```

### Monetization load events

```html
<link rel="monetization" href="https://example.com/pay">
<script>
  const link = document.querySelector('link[rel="monetization"]');
  link.addEventListener("monetization", event => {
    // See how much your received and in what currency
    const { amount, assetCode, assetScale } = event;
    console.log(`Received ${assetCode}${amount} (${assetScale}).`);
  });
</script>
```

## Specifications

<Specifications link="link-type-monetization">Web Monetization API</Specifications>

## Browser compatibility

<BrowserCompat data="link.json">Web Monetization API</BrowserCompat>

