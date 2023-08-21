import { useContext, useState, createContext } from 'react'

export const ViewStates = {
  Shares: 1,
  Import: 2,
}

const ViewContext = createContext()

export function ViewProvider({ children }) {
  const [view, setView] = useState(ViewStates.Shares)
  return (
    <ViewContext.Provider value={[view, setView]}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  return useContext(ViewContext)
}
