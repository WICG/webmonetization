import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
})

export default withStyles(styles)(({ classes, ...props }) => (
  <Typography className={classes.root} variant="h5" gutterBottom {...props}>
    Web Monetization is a JavaScript browser API which allows the creation of a payment stream from the user agent to the website.
  </Typography>
))
