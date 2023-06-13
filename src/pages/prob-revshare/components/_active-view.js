import React from 'react'
import { ViewStates, useView } from '../state/_index'
import { RevshareChart } from './_revshare-chart'
import { ShareList } from './_share-list'
import { ImportView } from './_import'
import { SharesLinkTag } from './_link-tag'
import { OnlyClient } from './_only-client'

export function ActiveView() {
  const [view] = useView()

  if (view === ViewStates.Shares) {
    return (
      <>
        <h2>Editing Revshare</h2>
        <p>
          Add all Payment Pointers that will receive a split of the revenue and
          name them (optional). By setting weights, you determine what share
          each Payment Pointer will receive. You can also tweak the percentage
          to adjust shares.
        </p>
        <p>
          If you want to edit the existing link tag created with this tool,
          click 'Import existing revshare.' You can also use the tool to convert
          the now-deprecated meta tag syntax to a link tag.
          <br />
          <em>Note: Your inputs will be saved in your browser locally.</em>
        </p>
        <OnlyClient>
          <RevshareChart />
          <ShareList />
          <section>
            <h2>Link Tag</h2>
            <SharesLinkTag />
          </section>
        </OnlyClient>
      </>
    )
  } else if (view === ViewStates.Import) {
    return (
      <>
        <h2>Importing Revshare</h2>
        <p>
          If you are using the deprecated <code>meta</code> tag implementation,
          you can copy that (found in your site's <code>&lt;head&gt;</code>)
          into the box below. Otherwise, copy the Web Monetization{' '}
          <code>link</code> tag into the box below. Click "Import" to load it
          into the editor.
        </p>
        <p>
          <b>
            Once you're finished editing, you must replace all old Web
            Monetization meta tags or link tags on your site with the newly
            generated one in order for the changes to take effect!
          </b>
        </p>
        <ImportView />
      </>
    )
  } else {
    throw new Error('invalid view')
  }
}
