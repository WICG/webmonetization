import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: '0 auto',
    padding: `0 ${theme.spacing.unit}px`,
    maxWidth: theme.breakpoints.values.lg
  }
})

export default withStyles(styles)(({ classes, children, ...props }) => (
  <div className={classes.root} {...props}>
    {children}
  </div>
))
