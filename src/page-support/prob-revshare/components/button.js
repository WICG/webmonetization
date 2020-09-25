import React from 'react'
import MuiButton from '@material-ui/core/Button'

export function Button ({ onClick, children, ...props }) {
  return <MuiButton
    variant='outlined'
    onClick={onClick}
    {...props}
  >
    {children}
  </MuiButton>
}
