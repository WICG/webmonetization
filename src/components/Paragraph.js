import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
  }
})

export default withStyles(styles)(({ children, ...props }) => (
  <Typography variant="body1" gutterBottom {...props}>
    {children}
  </Typography>
))
