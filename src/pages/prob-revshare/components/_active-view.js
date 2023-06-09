import React from 'react'

import { ViewStates, useView } from '../state/_index'
import { RevshareChart } from './_revshare-chart'
import { ShareList } from './_share-list'
import { ImportView } from './_import'
import { SharesMetaTag } from './_meta-tag'
import { SharesText } from './_shares-text'
import { ImportText } from './_import-text'
import { OnlyClient } from './_only-client'

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
