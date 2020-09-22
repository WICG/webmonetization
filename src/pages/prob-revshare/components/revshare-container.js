import React from 'react'

export function RevshareContainer ({ children }) {
  return <div className='revshareContainer'>
    {children[0]}
    <div className='spacer' />
    {children.slice(1)}
  </div>
}
