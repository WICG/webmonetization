import React, { useContext, useState, createContext } from 'react'

export const ViewStates = {
  Generate: 1,
  Generated: 2
}

const ViewContext = createContext()

export function ViewProvider ({ children }) {
  const [ view, setView ] = useState(ViewStates.Generate)
  return <ViewContext.Provider value={[
    view,
    setView
  ]}>
    {children}
  </ViewContext.Provider>
}

export function useView () {
  return useContext(ViewContext)
}
