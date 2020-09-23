import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow' 

export function ShareInput ({
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
  return <TableRow>
    <TableCell>
      <input
        type='text'
        placeholder='Name (optional)'
        value={name}
        onChange={ev => {
          onChangeName(ev.target.value)
        }}
      />
    </TableCell>

    <TableCell>
      <input
        type='text'
        placeholder='Payment Pointer'
        value={pointer}
        onChange={ev => {
          onChangePointer(ev.target.value)
        }}
      />
    </TableCell>

    <TableCell>
      <input
        className='weightInput'
        type='number'
        placeholder='Weight'
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
      <input
        className='percentInput'
        type='number'
        placeholder='Percent'
        min={0}
        max={100}
        step={'any'}
        value={percent && Math.round(percent * 100)}
        disabled={percentDisabled}
        onChange={ev => {
          onChangePercent(ev.target.value / 100)
        }}
      />
    </TableCell>

    <TableCell>
      <button
        disabled={removeDisabled}
        onClick={() => onRemove()}
      >
        Remove
      </button>
    </TableCell>
  </TableRow>
}
