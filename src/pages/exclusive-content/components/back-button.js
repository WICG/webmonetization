import React from 'react'

import { useView, ViewStates } from '../state'

import { Button } from '@mui/material'

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
