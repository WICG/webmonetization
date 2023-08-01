import { useContext, useState, createContext } from 'react'
import { validateShares } from '../lib/_index'

const SHARES_KEY = 'prob-revshare-shares'
const SharesContext = createContext()

export function newShare() {
  return {
    name: '',
    pointer: '',
    weight: '',
  }
}

function loadStartingShares() {
  try {
    const share =
      typeof window === 'undefined'
        ? undefined
        : localStorage.getItem(SHARES_KEY)

    const parsed = JSON.parse(share)

    if (share && parsed && validateShares(parsed)) {
      return parsed
    } else {
      return [newShare()]
    }
  } catch (e) {
    if (e.name === 'SyntaxError') {
      return [newShare()]
    } else {
      throw e
    }
  }
}

export function SharesProvider({ children }) {
  const [shares, setShares] = useState(loadStartingShares())

  return (
    <SharesContext.Provider
      value={[
        shares,
        (shares) => {
          localStorage.setItem(SHARES_KEY, JSON.stringify(shares))
          return setShares(shares)
        },
      ]}
    >
      {children}
    </SharesContext.Provider>
  )
}

export function useShares() {
  return useContext(SharesContext)
}
