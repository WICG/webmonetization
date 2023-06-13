import React, { useState } from 'react'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import ExtensionIcon from '@mui/icons-material/Extension';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function BrowserCompat({ children, data }) {
  const [compat, setCompat] = useState({})
  if (ExecutionEnvironment.canUseDOM)
    fetch(`/browser-compat-data/${data}`)
      .then((res) => res.json())
      .then((json) => {
        setCompat(json.api)
      })

  return (
    <BrowserOnly>
      {() => (
        <div className='browser-compat'>
          <table>
            <thead>
              <tr class='bc-platforms'>
                <td></td>
                <th
                  class='bc-platform bc-platform-desktop'
                  colspan='6'
                  title='desktop'
                >
                  <DesktopWindowsIcon />
                  <span class='visually-hidden'>desktop</span>
                </th>
                <th
                  class='bc-platform bc-platform-mobile'
                  colspan='7'
                  title='mobile'
                >
                  <PhoneIphoneIcon />
                  <span class='visually-hidden'>mobile</span>
                </th>
              </tr>
              <tr class='bc-browsers'>
                <td></td>
                <th class='bc-browser bc-browser-chrome'>
                  <div class='bc-head-txt-label bc-head-icon-chrome'>
                    Chrome
                  </div>
                  <div class='bc-head-icon-symbol icon icon-chrome'></div>
                </th>
                <th class='bc-browser bc-browser-edge'>
                  <div class='bc-head-txt-label bc-head-icon-edge'>Edge</div>
                  <div class='bc-head-icon-symbol icon icon-edge'></div>
                </th>
                <th class='bc-browser bc-browser-firefox'>
                  <div class='bc-head-txt-label bc-head-icon-firefox'>
                    Firefox
                  </div>
                  <div class='bc-head-icon-symbol icon icon-simple-firefox'></div>
                </th>
                <th class='bc-browser bc-browser-ie'>
                  <div class='bc-head-txt-label bc-head-icon-ie'>
                    Internet Explorer
                  </div>
                  <div class='bc-head-icon-symbol icon icon-ie'></div>
                </th>
                <th class='bc-browser bc-browser-opera'>
                  <div class='bc-head-txt-label bc-head-icon-opera'>Opera</div>
                  <div class='bc-head-icon-symbol icon icon-opera'></div>
                </th>
                <th class='bc-browser bc-browser-safari'>
                  <div class='bc-head-txt-label bc-head-icon-safari'>
                    Safari
                  </div>
                  <div class='bc-head-icon-symbol icon icon-safari'></div>
                </th>
                <th class='bc-browser bc-browser-webview_android'>
                  <div class='bc-head-txt-label bc-head-icon-webview_android'>
                    WebView Android
                  </div>
                  <div class='bc-head-icon-symbol icon icon-webview'></div>
                </th>
                <th class='bc-browser bc-browser-chrome_android'>
                  <div class='bc-head-txt-label bc-head-icon-chrome_android'>
                    Chrome Android
                  </div>
                  <div class='bc-head-icon-symbol icon icon-chrome'></div>
                </th>
                <th class='bc-browser bc-browser-firefox_android'>
                  <div class='bc-head-txt-label bc-head-icon-firefox_android'>
                    Firefox for Android
                  </div>
                  <div class='bc-head-icon-symbol icon icon-simple-firefox'></div>
                </th>
                <th class='bc-browser bc-browser-opera_android'>
                  <div class='bc-head-txt-label bc-head-icon-opera_android'>
                    Opera Android
                  </div>
                  <div class='bc-head-icon-symbol icon icon-opera'></div>
                </th>
                <th class='bc-browser bc-browser-safari_ios'>
                  <div class='bc-head-txt-label bc-head-icon-safari_ios'>
                    Safari on iOS
                  </div>
                  <div class='bc-head-icon-symbol icon icon-safari'></div>
                </th>
                <th class='bc-browser bc-browser-samsunginternet_android'>
                  <div class='bc-head-txt-label bc-head-icon-samsunginternet_android'>
                    Samsung Internet
                  </div>
                  <div class='bc-head-icon-symbol icon icon-samsunginternet'></div>
                </th>
                <th class='bc-browser bc-browser-puma_browser'>
                  <div class='bc-head-txt-label bc-head-icon-puma_browser'>
                    Puma Browser
                  </div>
                  <div class='bc-head-icon-symbol icon icon-puma'></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(compat).map((key) => {
                return (
                  <tr>
                    <th class='bc-feature bc-feature-depth-0' scope='row'>
                      <div class='bc-table-row-header'>
                        <code>{key}</code>
                      </div>
                    </th>
                    {Object.keys(compat[key].__compat.support).map(
                      (platform) => {
                        if (platform !== 'status')
                          return (
                            <td
                              class='bc-support bc-browser-chrome bc-supports-yes bc-has-history'
                              aria-expanded='false'
                            >
                              <span class='icon-wrap'>
                                {compat[key].__compat.support[platform]
                                  .version_added && (
                                  <CheckIcon fontSize='inherit' htmlColor='green' />
                                )}
                                {!compat[key].__compat.support[platform]
                                  .version_added && (
                                  <CancelIcon fontSize='inherit' htmlColor='red' />
                                )}
                              </span>

                              <span class='bc-version-label'>
                                {compat[key].__compat.support[platform]
                                  .version_added === true && 'Yes'}
                                {compat[key].__compat.support[platform]
                                  .version_added === false && 'No'}
                                {compat[key].__compat.support[platform]
                                  .version_added !== false &&
                                  compat[key].__compat.support[platform]
                                    .version_added !== true &&
                                  compat[key].__compat.support[platform]
                                    .version_added}
                              </span>
                              <span class='bc-icons'>
                                {compat[key].__compat.support[platform]
                                  .notes && (
                                  <ExtensionIcon
                                    fontSize='inherit'
                                    htmlColor='green'
                                  />
                                )}
                              </span>
                            </td>
                          )
                      }
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <span class='bc-notes'>
            <CheckIcon fontSize='inherit' htmlColor='green' /> Full Support.
          </span>
          <span class='bc-notes'>
            <CancelIcon fontSize='inherit' htmlColor='red' /> No Support.
          </span>
          <span class='bc-notes'>
            <ExtensionIcon fontSize='inherit' htmlColor='green' /> You'll need to
            use a Web Monetization Extension.
          </span>
        </div>
      )}
    </BrowserOnly>
  )
}
