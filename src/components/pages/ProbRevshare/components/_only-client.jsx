import { useState, useEffect } from 'react'

export function OnlyClient({ children }) {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (isClient) {
    return children
  } else {
    return <></>
  }
}
