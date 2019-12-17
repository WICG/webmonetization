---
id: stronghold
title: Stronghold
sidebar_label: Stronghold
---

Use Stronghold to have your earnings paid out in US dollars.

> You won't see your payments immediately if the amount you've received is
beneath Stronghold's threshold.

## Sign up

1. Go to stronghold.co and [sign up](https://identity.stronghold.co/signup) for
an account.
2. On the launchpad click **My USD Payment Pointer.** Stronghold will open a
popup displaying your payment pointer.
3. Copy your payment pointer to your clipboard.

![signup](assets/stronghold-01.png)

## Create your meta tag

Create your `<meta>` tag by using the [Meta Tag Generator](/meta-tag) or by
following the example below.

The tag's `name` is always `monetization`. The `content` is your payment
pointer.

### Example meta tag
```html
<meta
  name="monetization"
  content="$wallet.example.com/alice">
```

You're now ready to add your meta tag to the `<head>` section of each page you
want to monetize.
