import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export function ShareInputContainer ({ children }) {
  return <TableContainer component={Paper}>
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Name (optional)</TableCell>
          <TableCell>Payment Pointer</TableCell>
          <TableCell>Weight</TableCell>
          <TableCell>Percent</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  </TableContainer>
}
