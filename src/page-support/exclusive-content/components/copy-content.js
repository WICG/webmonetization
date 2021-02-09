import React from 'react'
import Button from '@material-ui/core/Button'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { green } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'

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
