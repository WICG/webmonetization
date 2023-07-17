import React from 'react'
import {
  TableCell,
  TableRow,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { validatePointer, validateWeight } from '../lib/_index'
import styles from '../styles.module.css'

export function ShareInput({
  index,
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
  weightDisabled,
}) {
  return (
    <TableRow key={index}>
      <TableCell className={styles.nameCell}>
        <TextField
          size='small'
          type='text'
          value={name}
          variant='standard'
          onChange={(ev) => {
            onChangeName(ev.target.value)
          }}
        />
      </TableCell>

      <TableCell>
        <TextField
          size='small'
          className={styles.sharePointerInput}
          type='text'
          value={pointer}
          variant='standard'
          error={!validatePointer(pointer)}
          helperText={!validatePointer(pointer) && 'Invalid payment pointer.'}
          onChange={(ev) => {
            onChangePointer(ev.target.value)
          }}
        />
      </TableCell>

      <TableCell className={styles.weightCell}>
        <TextField
          size='small'
          className={styles.weightInput}
          type='number'
          min={0}
          step={'any'}
          value={weight}
          variant='standard'
          disabled={weightDisabled}
          error={!validateWeight(weight)}
          helperText={
            !validateWeight(weight) && 'Weight must be a positive number'
          }
          onChange={(ev) => {
            onChangeWeight(ev.target.value)
          }}
        />
      </TableCell>

      <TableCell className={styles.percentCell}>
        <TextField
          size='small'
          className={styles.percentInput}
          type='number'
          min={0}
          max={100}
          step={'any'}
          variant='standard'
          value={percent && Math.round(percent * 100)}
          disabled={percentDisabled}
          onChange={(ev) => {
            onChangePercent(ev.target.value / 100)
          }}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </TableCell>

      <TableCell className={styles.removeCell} align='right'>
        <Button
          size='small'
          disabled={removeDisabled}
          onClick={() => onRemove()}
        >
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  )
}
