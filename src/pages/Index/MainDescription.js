import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    textAlign: 'center'
  }
})

export default withStyles(styles)(({ classes, ...props }) => (
  <Typography className={classes.root} variant="display4" gutterBottom {...props}>
    Web Monetization is a JavaScript browser API which allows the creation of bi-directional payment streams between the user agent and the website.
  </Typography>
))
