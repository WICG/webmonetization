import React from 'react'

import { GenerateInfoText } from './generate-info-text'
import { GenerateForm } from './generate-form'
import { GeneratedInfoText } from './generated-info-text'
import { ViewStates, useView } from '../state'
import { GeneratedTabs } from './generated-tabs'
import { BackButton } from './back-button'

export function ActiveView() {
  const [view] = useView()
  if (view === ViewStates.Generate) {
    return (
      <>
        <h2>Generate Exclusive Content</h2>
        <GenerateInfoText />
        <GenerateForm />
      </>
    )
  } else if (view === ViewStates.Generated) {
    return (
      <>
        <h2>Exclusive Content Generated!</h2>
        <GeneratedInfoText />
        <GeneratedTabs />
        <BackButton />
      </>
    )
  }
}
