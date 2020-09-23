import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow' 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Delete from '@material-ui/icons/Delete'
import InputAdornment from '@material-ui/core/InputAdornment'

export function ShareInput ({
  key,
  name,
  pointer,
  weight,
  percent,
  onChangeName,
  onChangePointer,
  onChangeWeight,
  onChangePercent,
  onRemove,
  removeDisabled,
  percentDisabled,
  weightDisabled
}) {
  return <TableRow key={key}>
    <TableCell>
      <TextField
        size='small'
        type='text'
        value={name}
        onChange={ev => {
          onChangeName(ev.target.value)
        }}
      />
    </TableCell>

    <TableCell>
      <TextField
        size='small'
        type='text'
        value={pointer}
        onChange={ev => {
          onChangePointer(ev.target.value)
        }}
      />
    </TableCell>

    <TableCell>
      <TextField
        size='small'
        className='weightInput'
        type='number'
        min={0}
        step={'any'}
        value={weight}
        disabled={weightDisabled}
        onChange={ev => {
          onChangeWeight(ev.target.value)
        }}
      />
    </TableCell>

    <TableCell>
      <TextField
        size='small'
        className='percentInput'
        type='number'
        min={0}
        max={100}
        step={'any'}
        value={percent && Math.round(percent * 100)}
        disabled={percentDisabled}
        onChange={ev => {
          onChangePercent(ev.target.value / 100)
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>
        }}
      />
    </TableCell>

    <TableCell>
      <Button
        size='small'
        disabled={removeDisabled}
        onClick={() => onRemove()}
      >
        <Delete />
      </Button>
    </TableCell>
  </TableRow>
}
