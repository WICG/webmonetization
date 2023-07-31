---
title: 'Content-Security-Policy: monetization-src'
---

<div class="draft"><h5>Page Updates</h5><ul><li>Add any appropriate links</li><li>Add spec and browser compat if appropriate</li><li>Verify example</li></ul></div>

The `monetization-src` directive within the HTTP <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank">Content-Security-Policy</a> (CSP) allows you to restrict the URLs from which a payment pointer can be loaded.

<table>
  <tbody>
    <tr>
      <td><strong>CSP version</strong></td>
      <td>3</td>
    </tr>
    <tr>
      <td><strong>Directive type</strong></td>
      <td><a href="https://developer.mozilla.org/en-US/docs/Glossary/Fetch_directive" target="_blank">Fetch directive</a></td>
    </tr>
  </tbody>
</table>

## Syntax

The basic syntax is as follows, where `source` is a serialized source list. One or more sources can be allowed for the `monetization-src` policy:

```http
Content-Security-Policy: monetization-src <source>;
Content-Security-Policy: monetization-src <source>, <source>;
```

### Sources

`<source>` can be any one of the values listed in <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources" target="_blank">CSP Source Values</a>.

## Example

### Violation case

A website administrator wants to restrict the URLs from which a payment pointer can be loaded.

Given this CSP header:

```http
Content-Security-Policy: monetization-src https://www.example.com
```

Fetches for the following monetization source will return a network error and not load, as the URL does not match the URL defined in the CSP source list.

```html
<link rel="monetization" href="https://example.org/payment-pointer" />
```