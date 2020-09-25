import React from 'react'

import { ViewStates, useView } from '../state'
import { RevshareChart } from './revshare-chart'
import { ShareList } from './share-list'
import { ImportView } from './import'
import { SharesMetaTag } from './meta-tag'

export function ActiveView () {
  const [ view ] = useView()

  if (view === ViewStates.Shares) {
    return <>
      <RevshareChart />
      <ShareList />
      <h2>Meta Tag</h2>
      <SharesMetaTag />
    </>
  } else if (view === ViewStates.Import) {
    return <ImportView />
  } else {
    throw new Error('invalid view')
  }
}
