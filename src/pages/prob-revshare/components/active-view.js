import React from 'react'

import { ViewStates, useView } from '../state'
import { RevshareChart } from './revshare-chart'
import { ShareList } from './share-list'
import { ImportView } from './import'
import { SharesMetaTag } from './meta-tag'
import { SharesText } from './shares-text'
import { ImportText } from './import-text'
import { OnlyClient } from './only-client'

export function ActiveView() {
  const [view] = useView()

  if (view === ViewStates.Shares) {
    return (
      <>
        <section>
          <h2>Editing Revshare</h2>
          <SharesText />
        </section>
        <OnlyClient>
          <RevshareChart />
          <ShareList />
          <section>
            <h2>Meta Tag</h2>
            <SharesMetaTag />
          </section>
        </OnlyClient>
      </>
    )
  } else if (view === ViewStates.Import) {
    return (
      <>
        <h2>Importing Revshare</h2>
        <ImportText />
        <ImportView />
      </>
    )
  } else {
    throw new Error('invalid view')
  }
}
