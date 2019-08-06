import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: '#5bc0de',
    padding: `${theme.spacing(3)}px`
  }
})

export default withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root} {...props}>
    Status: Web Monetization is being proposed as a W3C standard at the {' '}
    <a href="https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785">
      Web Platform Incubator Community Group
    </a>
    .
  </div>
))
