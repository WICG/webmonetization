# Exclusive Content Worker

This cloudflare worker will encrypt any plain text given a payment pointer. Furthermore, it will decrypt the resulting cypher text if it can verify payment by a receipt verifier.

## Testing

Configure your `wrangler.toml` file.

```sh
npm install
wrangler secret put MASTERKEY
# enter a key to be stored with cloudflare worker
wrangler preview --watch
```

## Deploying

Configure your `wrangler.toml` file.

```sh
npm install
wrangler secret put MASTERKEY
# enter a key to be stored with cloudflare worker
wrangler publish
```

## Endpoints

### `POST /encrypt`

Encrypts plaintext

#### Request Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| pp | String | (proxy) payment pointer | "\$spsp.example.com/alice" |
| pt | String | plain text | "Hello World" |

#### Headers

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Response Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| ct | String | cypher text | "VsPD81db5Ts9rUnvxqGD5hxCRoDU+ygE44w42AoEbaKQbhGXkrpxoYwCrhrtR2MmFfOg" |
| iv | String | initialization vector | "1603118464654" |

#### Errors

- 400 - Input variables missing
- 415 - Unsupported content type. Use application/json

### `POST /decrypt`

Decrypts cyphertext if it can verify payment

#### Request Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| pp | String | (proxy) payment pointer | "\$spsp.example.com/alice" |
| ct | String | cypher text | "VsPD81db5Ts9rUnvxqGD5hxCRoDU+ygE44w42AoEbaKQbhGXkrpxoYwCrhrtR2MmFfOg" |
| iv | String | initialization vector | "1603118464654" |
| vr | String | receipt verifier endpoint | "https://verifier.example.com" |
| bi | String | balance id used to credit the receipts | "123" |

#### Headers

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Response Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| pt | String | plain text | "Hello World" |

#### Errors

- 400 - Input variables missing
- 402 - Payment required
- 415 - Unsupported content type. Use application/json
