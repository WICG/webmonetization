import React from 'react'

import { SectionHeader } from '../../shared/components/section-header'
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
        <SectionHeader>Generate Exclusive Content</SectionHeader>
        <GenerateInfoText />
        <GenerateForm />
      </>
    )
  } else if (view === ViewStates.Generated) {
    return (
      <>
        <SectionHeader>Exclusive Content Generated!</SectionHeader>
        <GeneratedInfoText />
        <GeneratedTabs />
        <BackButton />
      </>
    )
  }
}
