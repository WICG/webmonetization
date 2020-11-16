import React from 'react'

import { useView, ViewStates } from '../state'

import { Button } from '@material-ui/core'

export function BackButton() {
  const [_, setView] = useView()
  return (
    <>
      <Button
        variant='outlined'
        size='medium'
        onClick={() => {
          setView(ViewStates.Generate)
        }}
      >
        Back
      </Button>
    </>
  )
}
