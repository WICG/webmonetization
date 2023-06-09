import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

import { useView, useShares, ViewStates } from '../state'
import { tagOrPointerToShares } from '../lib'

export function ImportView() {
  const [_, setView] = useView()
  const [__, setShares] = useShares()

  const [tag, setTag] = useState('')
  const [error, setError] = useState('')

  return (
    <div>
      <TextField
        label='Enter your meta tag or payment pointer'
        multiline
        variant='outlined'
        rows={4}
        fullWidth
        value={tag}
        error={Boolean(error)}
        helperText={error}
        onChange={(ev) => {
          setTag(ev.target.value)
          setError('')
        }}
      />
      <div className='importControls'>
        <Button variant='outlined' onClick={() => setView(ViewStates.Shares)}>
          Cancel
        </Button>
        <Button
          variant='outlined'
          className='importSharesButton'
          onClick={() => {
            try {
              const shares = tagOrPointerToShares(tag)
              setShares(shares)
              setView(ViewStates.Shares)
            } catch (e) {
              setError(e.message)
            }
          }}
        >
          Import
        </Button>
      </div>
    </div>
  )
}
