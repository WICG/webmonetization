# Receipt Verifier Proxy

We have not yet written a version of the [Receipt Verifier](https://github.com/coilhq/receipt-verifier) that runs in Cloudflare Workers directly. So this worker proxies to one that we have running in google cloud, allowing us to host this API alongside our other webmonetization.org APIs.

## Testing

```sh
yarn
wrangler dev
```

## Deploying

To `https://webmonetization.org/api/receipts/verify`

```sh
yarn
wrangler publish
```
