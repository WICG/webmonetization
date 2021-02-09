import React, { useContext, useState, createContext } from 'react'

const ExclusiveContentContext = createContext()

const initialExclusiveContent = {
  pointer: '',
  verifier: '',
  plaintext: '',
  exclusiveContent: '',
}

export function ExclusiveContentProvider({ children }) {
  const [exclusiveContent, setExclusiveContent] = useState(
    initialExclusiveContent
  )

  return (
    <ExclusiveContentContext.Provider
      value={[exclusiveContent, setExclusiveContent]}
    >
      {children}
    </ExclusiveContentContext.Provider>
  )
}

export function useExclusiveContent() {
  return useContext(ExclusiveContentContext)
}
