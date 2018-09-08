import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
  }
})

export default withStyles(styles)(({ classes, children, ...props }) => (
  <ul className={classes.root} {...props}>
    {children}
  </ul>
))

export const ListItem = withStyles(styles)(({ children, ...props }) => (
  <li {...props}>
    {children}
  </li>
))
