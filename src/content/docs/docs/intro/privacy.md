---
title: Privacy
---

<div class="draft"><h5>Page Updates</h5><ul><li>This page is still a draft and is under review by Alex/Sabine/Mohammed</li><li>Add any appropriate links</li></ul></div>

Web Monetization is designed to be privacy-preserving. Exposing sensitive information, such as browsing history and the identities of those sending and receiving payments, is not required to facilitate payments.

The WM provider is expected to have some kind of relationship with its user, so there will be details shared between the two parties for account setup and maintenance. There may also be financial details shared between the two, depending on how the WM provider chooses to fund the sending account. These details lay outside of Web Monetization and do not need to be shared with WM receivers.

Some details will be shared between a WM provider and a WM agent. For example, the WM agent needs to know that a user is authorized to use the WM provider’s service and may need to pull certain configurations from the provider. However, the WM agent may not need to know the specific identity of the user.

There will also be payment details shared between the WM agent and provider to ensure payments are sent from and to the correct accounts. However, two details the WM agent doesn’t need to send to the WM provider to make a payment are the URLs of web monetized sites and their associated payment pointers. All the provider needs is the incoming payment URL, which is issued by the WM receiver and delivered by the WM agent. The rest of the payment details, such as amount and frequency, are agreed upon between the provider and its user. By not supplying the provider with URLs and payment pointers, the provider is unable to track a user’s browsing history, learn which payment pointers belong to which URLs, and associate payments to specific sites with specific users.

The WM agent requires permission to each site so that it can check for Web Monetization. As such, WM agents should be developed to not track its users’ browsing history nor what payments its users have made. It’s the responsibility of the developer to prevent the WM agent from collecting details that could be used to correlate users with their payment and browsing histories.

The WM receiver is expected to have some kind of relationship with its user, so there will be details shared between the two parties for account setup/maintenance and identity verification. There will likely be financial details shared between the two as well, to facilitate withdrawals. These details lay outside of Web Monetization and do not need to be shared with WM agents or WM providers.

When the WM agent contacts a WM receiver to create an incoming payment request, the WM receiver should ensure its response excludes any personally identifiable information about the recipient. The receiver should also issue a new incoming payment URL each time a request is made. These steps help ensure browsing history isn’t leaked to the WM agent or WM provider and ensure neither can correlate payment data with a specific recipient.

Similarly, the payment’s recipient should be prevented from learning the identity of the individual sending the payment. One way to ensure this is for the WM provider to hide the identity of the sender from the WM receiver. All a receiver needs to know is that a payment is being sent from a valid payment pointer to a valid payment pointer. Doing this not only ensures the sender’s identity is kept from the recipient, but it prevents WM receivers from associating specific individuals with their corresponding payment and browsing histories.
