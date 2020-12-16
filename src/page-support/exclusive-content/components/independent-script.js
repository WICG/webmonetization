import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyContent } from './copy-content'

import { useExclusiveContent } from '../state'

const WORKER = 'https://webmonetization.org/api/exclusive-content'

export function IndependentScript() {
  const [exclusiveContent] = useExclusiveContent()
  const proxyPaymentPointer = exclusiveContent.verifier.endsWith('/')
    ? exclusiveContent.verifier
    : exclusiveContent.verifier + '/'
  const independentScript = `<script>
  const data = {
    paymentPointer: "${exclusiveContent.pointer}",
    proxyPaymentPointer: "${proxyPaymentPointer}${encodeURIComponent(
    exclusiveContent.pointer
  )}",
    cypherText: "${exclusiveContent.cypherText}",
    cypherVerifier: "${exclusiveContent.cypherVerifier}",
    initVector: "${exclusiveContent.initVector}",
    nonce: "${exclusiveContent.nonce}",
    receipt: "",
  };

  let key;

  if (document.monetization !== undefined) {
    setMeta(data.proxyPaymentPointer);

    document.monetization.addEventListener(
      "monetizationpending",
      (event) => {
        document.getElementById("ecm").innerHTML =
          "<p>⸻ ⏰ Waiting for Web Monetization to start to unlock this content. ⸻</p>";
      }
    );

    document.monetization.addEventListener("monetizationstart", (event) => {
      document.getElementById("ecm").innerHTML =
        "<p>⸻ ⏰ Waiting for Web Monetization receipt verification to unlock this content. ⸻</p>";
    });

    document.monetization.addEventListener(
      "monetizationprogress",
      (event) => {
        if (!data.receipt) {
          data["receipt"] = event.detail.receipt;
          if (!key) {
            unlockExclusiveContent(data);
          }
        }
      }
    );
  } else {
    document.getElementById("ecm").innerHTML =
      "<p>⸻ 🔒 This content is exclusive for users with Web Monetization enabled. ⸻</p>";
  }

  function setMeta(proxyPaymentPointer) {
    const meta = document.createElement("meta");
    meta.name = "monetization";
    meta.content = proxyPaymentPointer;
    document.getElementsByTagName("head")[0].appendChild(meta);
  }

  function unlockExclusiveContent(data) {
    fetch("${WORKER}/deriveKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentPointer: data.paymentPointer,
        nonce: data.nonce,
        encVerifier: data.cypherVerifier,
        initVector: data.initVector,
        receipt: data.receipt,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        key = responseData.key;
        decryptContent(
          responseData.key,
          data.cypherText,
          data.initVector
        ).then((plaintext) => {
          document.getElementById("ecm").innerHTML =
            "<p>⸻ 🔓 Enjoy your exclusive content! ⸻</p>";
          document.getElementById("ecc").innerHTML = plaintext;
        });
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  async function decryptContent(keyString, cypherText, initVector) {
    const key = await importKey(str2ab(keyString));
    const plaintext = await decrypt(
      str2ab(cypherText),
      key,
      encode(initVector)
    );
    return decode(plaintext);
  }

  async function decrypt(cypherText, key, initVector) {
    return window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: initVector,
      },
      key,
      cypherText
    );
  }

  async function importKey(keyBuffer) {
    return window.crypto.subtle.importKey(
      "raw",
      keyBuffer,
      "AES-GCM",
      false,
      ["encrypt", "decrypt"]
    );
  }

  function encode(str) {
    const encoder = new TextEncoder("utf-8");
    return encoder.encode(str);
  }

  function decode(buf) {
    const decoder = new TextDecoder("utf-8");
    return decoder.decode(buf);
  }

  function str2ab(str) {
    const decodedString = window.atob(str);
    const ab = new ArrayBuffer(decodedString.length);
    const abView = new Uint8Array(ab);
    for (let i = 0, strLen = decodedString.length; i < strLen; i++) {
      abView[i] = decodedString.charCodeAt(i);
    }
    return ab;
  }
</script>`

  return (
    <>
      <div>
        <CopyContent
          id='independentScript'
          message='Copy script without dependencies'
        />
        <SyntaxHighlighter id='independentScript' language='html' style={docco}>
          {independentScript}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
