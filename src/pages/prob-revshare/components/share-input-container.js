import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  table: {
    padding: '0px'
  },
  td: {
    padding: '0px'
  }
})

export function ShareInputContainer ({ children }) {
  const classes = useStyles()

  return <TableContainer>
    <Table className={classes.table} size='small'>
      <TableHead>
        <TableRow>
          <TableCell><b>Name</b></TableCell>
          <TableCell><b>Pointer</b></TableCell>
          <TableCell><b>Weight</b></TableCell>
          <TableCell><b>Percent</b></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  </TableContainer>
}
