import React, { useState } from 'react'

import { useView, ViewStates, useExclusiveContent } from '../state'
import { generateExclusiveContent } from '../lib/index'

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core'

export function GenerateForm() {
  const [_, setView] = useView()
  const [__, setExclusiveContent] = useExclusiveContent()

  const [pointer, setPointer] = useState('')
  const [verifier, setVerifier] = useState('')
  const [plaintext, setPlaintext] = useState('')

  return (
    <>
      <FormControl margin='normal' fullWidth>
        <InputLabel htmlFor='pointer'>Payment Pointer</InputLabel>
        <Input
          id='pointer'
          type='text'
          value={pointer}
          onChange={(e) => setPointer(e.target.value)}
        />
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <InputLabel htmlFor='verifier'>Verifier URL</InputLabel>
        <Input
          id='verifier'
          type='text'
          value={verifier}
          onChange={(e) => setVerifier(e.target.value)}
        />
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <InputLabel htmlFor='plaintext'>Plain Text</InputLabel>
        <Input
          id='plaintext'
          multiline
          rows={10}
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
        />
        <FormHelperText id='pointer-helper-text'>
          this can really just be plain text, e.g. <code>Hello World</code>, or
          an HTML tag, e.g.{' '}
          <code>&lt;div&gt;&lt;p&gt;Hello World&lt;/p&gt;&lt;/div&gt;</code>
        </FormHelperText>
      </FormControl>

      <Button
        variant='contained'
        color='primary'
        size='medium'
        onClick={() => {
          generateExclusiveContent(pointer, verifier, plaintext).then(
            (data) => {
              setExclusiveContent({
                pointer,
                verifier,
                plaintext,
                nonce: data.nonce,
                cypherText: data.cypherText,
                cypherVerifier: data.cypherVerifier,
                initVector: data.initVector,
              })
              setView(ViewStates.Generated)
            }
          )
        }}
      >
        Generate
      </Button>
    </>
  )
}
