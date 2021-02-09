import React, { useState } from 'react'

import { useView, ViewStates, useExclusiveContent } from '../state'
import { generateExclusiveContent } from '../lib'

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
        <InputLabel shrink='false' htmlFor='pointer'>Payment Pointer</InputLabel>
        <Input
          id='pointer'
          type='text'
          value={pointer}
          onChange={(e) => {
            setPointer(e.target.value)
          }}
        />
        <FormHelperText id='pointer-helper-text'>
          Example: <code>$spsp.example.com/alice</code> or{' '}
          <code>https://spsp.example.com/alice</code>
        </FormHelperText>
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <InputLabel shrink='false' htmlFor='plaintext'>Content</InputLabel>
        <Input
          id='plaintext'
          multiline
          rows={10}
          value={plaintext}
          onChange={(e) => {
            setPlaintext(e.target.value)
          }}
          style={{
            borderStyle: 'solid solid none solid', 
            borderWidth: '1px',
            borderColor: '#949494',
            padding: '8px'
          }}
        />
        <FormHelperText id='pointer-helper-text'>
          This can really just be plain text, e.g. <code>Hello World</code>, or
          an HTML tag, e.g.{' '}
          <code>&lt;div&gt;&lt;p&gt;Hello World&lt;/p&gt;&lt;/div&gt;</code>
        </FormHelperText>
      </FormControl>

      <FormControl margin='normal' fullWidth>
        <InputLabel shrink='false' htmlFor='verifier'>Verifier URL (optional)</InputLabel>
        <Input
          id='verifier'
          type='text'
          value={verifier}
          onChange={(e) => {
            setVerifier(e.target.value)
          }}
        />
        <FormHelperText id='pointer-helper-text'>
          If this is not specified, we will use a hosted verifier. If you decide
          to use your own verifier, specify something like:{' '}
          <code>https://verifier.example.com</code>
        </FormHelperText>
      </FormControl>

      <Button
        variant='outlined'
        size='medium'
        disabled={!pointer | !plaintext}
        onClick={() => {
          generateExclusiveContent(pointer, verifier, plaintext).then(
            (data) => {
              setExclusiveContent({
                pointer,
                verifier: data.verifier,
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
