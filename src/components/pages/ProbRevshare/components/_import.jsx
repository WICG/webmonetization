import { useState } from 'react'
import { useView, useShares, ViewStates } from '../state/_index'
import { tagOrPointerToShares } from '../lib/_index'
import styles from '../styles.module.css'

export function ImportView() {
  const [_, setView] = useView()
  const [__, setShares] = useShares()

  const [tag, setTag] = useState('')
  const [error, setError] = useState('')

  return (
    <div className={styles.importWrapper}>
      <textarea
        placeholder='Enter your link element here'
        rows={4}
        value={tag}
        onChange={(evt) => {
          setTag(evt.target.value)
          setError('')
        }}
      />
      <p className='error'>{error}</p>
      <div className={styles.importControls}>
        <button className='btn' onClick={() => setView(ViewStates.Shares)}>
          Cancel
        </button>
        <button
          className={`${styles.importSharesButton} btn`}
          onClick={() => {
            try {
              const shares = tagOrPointerToShares(tag)
              setShares(shares)
              setView(ViewStates.Shares)
            } catch (err) {
              setError(err.message)
            }
          }}
        >
          Import
        </button>
      </div>
    </div>
  )
}
