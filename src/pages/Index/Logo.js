import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: `${theme.spacing(8)}px 0`
  }
})

export default withStyles(styles)(({ classes, ...props }) => (
  <Typography variant="h3" className={classes.root}>
    Web Monetization
  </Typography>
))
