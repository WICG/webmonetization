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
          <h2 className='heading3'>Link Element</h2>
          <SharesLinkTag />
        </OnlyClient>
      </>
    )
  } else if (view === ViewStates.Import) {
    return (
      <>
        <h2 className='heading3'>Import existing revshare configuration</h2>
        <p className={styles.text}>
          Enter your current monetization <code>link</code> element into the
          field and click <b>Import</b>. The table will populate with your
          existing revshare's configuration.
        </p>
        <p className={styles.text}>
          If you make any changes to the table, your monetization{' '}
          <code>link</code> will change. Be sure to replace your old{' '}
          <code>link</code> element with the updated version. Check out{' '}
          <a href='/docs/developers/get-started' target='_blank'>
            this page
          </a>{' '}
          if you need help.
        </p>
        <ImportView />
      </>
    )
  } else {
    throw new Error('invalid view')
  }
}
