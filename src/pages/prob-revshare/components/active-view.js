import React from 'react'

import { ViewStates, useView } from '../state'
import { RevshareChart } from './revshare-chart'
import { ShareList } from './share-list'
import { ImportView } from './import'
import { SharesMetaTag } from './meta-tag'
import { SharesText } from './shares-text'
import { ImportText } from './import-text'
import { MetaText } from './meta-text'

export function ActiveView () {
  const [ view ] = useView()

  if (view === ViewStates.Shares) {
    return <>
      <h2>Editing Revshare</h2>
      <SharesText />
      <RevshareChart />
      <ShareList />
      <h2>Meta Tag</h2>
      <MetaText />
      <SharesMetaTag />
    </>
  } else if (view === ViewStates.Import) {
    return <>
      <h2>Importing Revshare</h2>
      <ImportText />
      <ImportView />
    </>
  } else {
    throw new Error('invalid view')
  }
}
