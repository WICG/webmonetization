import React from 'react'
import { GenerateForm } from './_generate-form'
import { GeneratedInfoText } from './_generated-info-text'
import { ViewStates, useView } from '../state/_index'
import { GeneratedTabs } from './_generated-tabs'
import { BackButton } from './_back-button'

export function ActiveView() {
  const [view] = useView()

  if (view === ViewStates.Generate) {
    return (
      <>
        <h2>Generate Exclusive Content</h2>
        <p>
          In order to generate exclusive content, we need the following
          information:
        </p>
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
