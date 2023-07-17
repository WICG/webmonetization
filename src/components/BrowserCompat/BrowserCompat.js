import React from 'react'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import CheckIcon from '@mui/icons-material/Check'
import CancelIcon from '@mui/icons-material/Cancel'
import ExtensionIcon from '@mui/icons-material/Extension'
import styles from './BrowserCompat.module.css'

export default function BrowserCompat({ dataFileName }) {
  const data = require(`./browser-compat-data/${dataFileName}.json`)
  const compatData = data.api

  return (
    <div className={styles.browserCompat}>
      <table>
        <thead>
          <tr className={styles.platforms}>
            <td></td>
            <th className={styles.desktop} colSpan='6' title='desktop'>
              <DesktopWindowsIcon />
              <span className='visually-hidden'>desktop</span>
            </th>
            <th className={styles.mobile} colSpan='7' title='mobile'>
              <PhoneIphoneIcon />
              <span className='visually-hidden'>mobile</span>
            </th>
          </tr>
          <tr className={styles.browsers}>
            <td></td>
            <th className={`${styles.browser} ${styles.browserChrome}`}>
              <div className={styles.browserLabel}>Chrome</div>
            </th>
            <th className={`${styles.browser} ${styles.browserEdge}`}>
              <div className={styles.browserLabel}>Edge</div>
            </th>
            <th className={`${styles.browser} ${styles.browserFirefox}`}>
              <div className={styles.browserLabel}>Firefox</div>
            </th>
            <th className={`${styles.browser} ${styles.browserIe}`}>
              <div className={styles.browserLabel}>Internet Explorer</div>
            </th>
            <th className={`${styles.browser} ${styles.browserOpera}`}>
              <div className={styles.browserLabel}>Opera</div>
            </th>
            <th className={`${styles.browser} ${styles.browserSafari}`}>
              <div className={styles.browserLabel}>Safari</div>
            </th>
            <th className={`${styles.browser} ${styles.browserWebview}`}>
              <div className={styles.browserLabel}>WebView Android</div>
            </th>
            <th className={`${styles.browser} ${styles.browserChrome}`}>
              <div className={styles.browserLabel}>Chrome Android</div>
            </th>
            <th className={`${styles.browser} ${styles.browserFirefox}`}>
              <div className={styles.browserLabel}>Firefox for Android</div>
            </th>
            <th className={`${styles.browser} ${styles.browserOpera}`}>
              <div className={styles.browserLabel}>Opera Android</div>
            </th>
            <th className={`${styles.browser} ${styles.browserSafari}`}>
              <div className={styles.browserLabel}>Safari on iOS</div>
            </th>
            <th className={`${styles.browser} ${styles.browserSamsung}`}>
              <div className={styles.browserLabel}>Samsung Internet</div>
            </th>
            <th className={`${styles.browser} ${styles.browserPuma}`}>
              <div className={styles.browserLabel}>Puma Browser</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(compatData).map((key) => {
            return (
              <tr key={key}>
                <th className={styles.feature} scope='row'>
                  <div>
                    <code>{key}</code>
                  </div>
                </th>
                {Object.keys(compatData[key].__compat.support).map(
                  (platform) => {
                    if (platform !== 'status')
                      return (
                        <td key={platform}>
                          {compatData[key].__compat.support[platform]
                            .version_added && (
                            <CheckIcon fontSize='small' htmlColor='green' />
                          )}
                          {!compatData[key].__compat.support[platform]
                            .version_added && (
                            <CancelIcon fontSize='small' htmlColor='red' />
                          )}
                          <span>
                            {compatData[key].__compat.support[platform]
                              .version_added === true && 'Yes'}
                            {compatData[key].__compat.support[platform]
                              .version_added === false && 'No'}
                            {compatData[key].__compat.support[platform]
                              .version_added !== false &&
                              compatData[key].__compat.support[platform]
                                .version_added !== true &&
                              compatData[key].__compat.support[platform]
                                .version_added}
                          </span>
                          {compatData[key].__compat.support[platform].notes && (
                            <ExtensionIcon fontSize='small' htmlColor='green' />
                          )}
                        </td>
                      )
                  }
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      <dl className={styles.legend}>
        <div className={styles.legendItem}>
          <dt>
            <CheckIcon fontSize='small' htmlColor='green' />
          </dt>
          <dd>Full Support</dd>
        </div>
        <div className={styles.legendItem}>
          <dt>
            <CancelIcon fontSize='small' htmlColor='red' />
          </dt>
          <dd>No Support</dd>
        </div>
        <div className={styles.legendItem}>
          <dt>
            <ExtensionIcon fontSize='small' htmlColor='green' />
          </dt>
          <dd>You'll need to use a Web Monetization Extension</dd>
        </div>
      </dl>
    </div>
  )
}
