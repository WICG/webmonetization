import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    padding: `${theme.spacing.unit * 3}px`,
    border: `1px solid rgba(0, 0, 0, 0.125)`
  },
  heading: {
    marginBottom: `${theme.spacing.unit * 1}px`
  },
  content: {
  }
})

export default withStyles(styles)(({ classes, children, ...props }) => (
  <div className={classes.root} {...props}>
    {children}
  </div>
))

export const Heading = withStyles(styles)(({ classes, children, ...props }) => (
  <Typography variant="headline" gutterBottom className={classes.heading} {...props}>
    {children}
  </Typography>
))

export const Content = withStyles(styles)(({ classes, children, ...props }) => (
  <div className={classes.content} {...props}>
    {children}
  </div>
))
