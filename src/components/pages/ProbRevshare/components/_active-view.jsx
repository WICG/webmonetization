import { ViewStates, useView } from '../state/_index'
import { RevshareChart } from './_revshare-chart'
import { ShareList } from './_share-list'
import { ImportView } from './_import'
import { SharesLinkTag } from './_link-tag'
import { OnlyClient } from './_only-client'
import styles from '../styles.module.css'

export function ActiveView() {
  const [view] = useView()

  if (view === ViewStates.Shares) {
    return (
      <>
        <OnlyClient>
          <RevshareChart />
          <ShareList />
          <h2 className='heading3'>Link Tag</h2>
          <SharesLinkTag />
        </OnlyClient>
      </>
    )
  } else if (view === ViewStates.Import) {
    return (
      <>
        <h2 className='heading3'>Importing Revshare</h2>
        <p className={styles.text}>
          If you are using the deprecated <code>meta</code> tag implementation,
          you can copy that (found in your site's <code>&lt;head&gt;</code>)
          into the box below. Otherwise, copy the Web Monetization{' '}
          <code>link</code> tag into the box below. Click "Import" to load it
          into the editor.
        </p>
        <p className={styles.text}>
          <strong>
            Once you're finished editing, you must replace all old Web
            Monetization meta tags or link tags on your site with the newly
            generated one in order for the changes to take effect!
          </strong>
        </p>
        <ImportView />
      </>
    )
  } else {
    throw new Error('invalid view')
  }
}
