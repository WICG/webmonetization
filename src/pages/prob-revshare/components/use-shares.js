import React, { useContext, useState, createContext } from 'react'

const SharesContext = createContext()

export function newShare () {
  return {
    name: '',
    pointer: '',
    weight: ''
  }
}

export function SharesProvider ({ children }) {
  const [ shares, setShares ] = useState([ newShare() ])

  return <SharesContext.Provider value={[
    shares,
    setShares
  ]}>
    {children}
  </SharesContext.Provider>
}

export function useShares () {
  return useContext(SharesContext)
}
