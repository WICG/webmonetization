# Exclusive Content Worker

This cloudflare worker will encrypt any plain text given a payment pointer. Furthermore, it will decrypt the resulting cypher text if it can verify payment by a receipt verifier.

## Testing

Configure your `wrangler.toml` file.

```sh
yarn install
wrangler secret put MASTERKEY
# enter a key to be stored with cloudflare worker
wrangler dev --local
```

## Deploying

Configure your `wrangler.toml` file.

```sh
yarn install
wrangler secret put MASTERKEY
# enter a key to be stored with cloudflare worker
wrangler publish
```

## Endpoints

### `POST /deriveNewKey`

Derives a new key for encryption given a payment pointer

#### Request Body

JSON object containing
| Name | Type | Example |
| -- | -- | -- |
| paymentPointer | String | "\$spsp.example.com/alice" |

#### Headers

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Response Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| key | String | base64-encoded HMAC | "roXXcAX5qOtrBR7SMeZSGY+YIauNznBqsRXILTCI0IM=" |
| nonce | String | base64-encoded random values generated with [crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) | "iVBojzgBQiyIlaK2yzKUNQ==" |

#### Errors

- 400 - Payment pointer not part of request body
- 415 - Unsupported content type. Use application/json

### `POST /deriveKey`

Derives an existing key for decryption given that payment can be verified. In order to verify, the encrypted STREAM receipt verifier endpoint (`encVerifier`) needs to be passed together with the encryption initialization vector.

#### Request Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| paymentPointer | String | | "\$spsp.example.com/alice" |
| nonce | String | base64-encoded random values generated with [crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) | "iVBojzgBQiyIlaK2yzKUNQ==" |
| encVerifier | String | base64-encoded AES-GCM encryption of the verifier endpoint | "nsNBmLVm11WDVbst+jJuxkA17vEH+/W6yIPeQdnoK3mdT8D/LA==" |
| initVector | String | initialization vector used for `encVerifier` decryption, base64-encoded random values generated with [crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) | "A8S8GwC/luARiJG6xCNQBw==" |
| receipt | String | base64-encoded STREAM receipt |"AVJgrh79jbZ8CnaObl/p+z0BAAAAAAAF8m5+VSi2zfg/RvkzDP20uWk0ZMbUflzUxEyJxqHXomY+og==" |

#### Headers

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Response Body

JSON object containing
| Name | Type | Description | Example |
| -- | -- | -- | -- |
| key | String | base64-encoded HMAC |"roXXcAX5qOtrBR7SMeZSGY+YIauNznBqsRXILTCI0IM=" |

#### Errors

- 400 - Input variables missing
- 402 - Payment required
- 415 - Unsupported content type. Use application/json
