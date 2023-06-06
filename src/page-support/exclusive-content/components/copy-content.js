import React from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Tooltip,
} from '@mui/material'
import { FileCopyOutlinedIcon, CheckCircleIcon } from '@mui/icons-material'
import { green } from '@mui/material/colors'

export function CopyContent(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const copyContent = (id) => {
    const el = document.getElementById(id).innerText
    navigator.clipboard.writeText(el).then(
      function () {
        handleClickOpen()
        console.log('copied to clipboard')
      },
      function () {
        console.log('copy to clipboard failed')
      }
    )
  }

  return (
    <div>
      <Tooltip title={props.message}>
        <Button tooltip onClick={() => copyContent(props.id)}>
          <FileCopyOutlinedIcon />
        </Button>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <CheckCircleIcon
              style={{
                color: green[500],
                fontSize: 50,
              }}
            />
          </Box>
          <DialogContentText>Copied to clipboard!</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}
