import React from 'react'

export default function Hidden({ children, isSpan = true }) {
  return (
    <>
      {isSpan ? (
        <span style={{ display: 'none' }}>{children}</span>
      ) : (
        <div style={{ display: 'none' }}>{children}</div>
      )}
    </>
  )
}
