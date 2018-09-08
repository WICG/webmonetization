import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: '#5bc0de',
    padding: `${theme.spacing.unit * 3}px`
  }
})

export default withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root} {...props}>
    Status: Web Monetization is a W3C standard proposed by the <a href="https://www.w3.org/community/interledger/">Interledger Community Group</a> and is available for use via a <a href="https://github.com/interledgerjs/web-monetization-polyfill/">polyfill</a>.
  </div>
))
