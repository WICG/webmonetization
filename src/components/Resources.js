import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List, { ListItem } from './List'

const styles = theme => ({
  root: {
  }
})

export default withStyles(styles)(({ children, ...props }) => (
  <List>
    <ListItem><a href="https://coil.com/docs/#web-monetization">Coil Developer Docs</a></ListItem>
    <ListItem>Do you know other developer resources? <a href="https://github.com/interledger/webmonetization.org/edit/master/src/components/Resources.js">Make a PR</a></ListItem>
  </List>
))