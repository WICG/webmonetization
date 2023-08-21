import styles from './BrowserCompat.module.css'

export default function BrowserCompat({ json }) {
  const compatData = json.api

  return (
    <div className={styles.browserCompat}>
      <table>
        <thead>
          <tr className={styles.platforms}>
            <td></td>
            <th className={styles.desktop} colSpan='6' title='desktop'>
              <img
                src={`/img/icon-desktop.svg`}
                alt=''
                width='24'
                height='24'
              />
              <span className='visually-hidden'>desktop</span>
            </th>
            <th className={styles.mobile} colSpan='7' title='mobile'>
              <img src={`/img/icon-phone.svg`} alt='' width='24' height='24' />
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
                            <img
                              src={`/img/icon-check.svg`}
                              alt=''
                              width='18'
                              height='18'
                              className={styles.iconGreen}
                            />
                          )}
                          {!compatData[key].__compat.support[platform]
                            .version_added && (
                            <img
                              src={`/img/icon-cancel.svg`}
                              alt=''
                              width='18'
                              height='18'
                              className={styles.iconRed}
                            />
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
                            <img
                              src={`/img/icon-extension.svg`}
                              alt=''
                              width='18'
                              height='18'
                              className={styles.iconGreen}
                            />
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
            <img
              src={`/img/icon-check.svg`}
              alt=''
              width='24'
              height='24'
              className={styles.iconGreen}
            />
          </dt>
          <dd>Full Support</dd>
        </div>
        <div className={styles.legendItem}>
          <dt>
            <img
              src={`/img/icon-cancel.svg`}
              alt=''
              width='24'
              height='24'
              className={styles.iconRed}
            />
          </dt>
          <dd>No Support</dd>
        </div>
        <div className={styles.legendItem}>
          <dt>
            <img
              src={`/img/icon-extension.svg`}
              alt=''
              width='24'
              height='24'
              className={styles.iconGreen}
            />
          </dt>
          <dd>You'll need to use a Web Monetization Extension</dd>
        </div>
      </dl>
    </div>
  )
}
