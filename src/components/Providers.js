import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List, { ListItem } from './List'

const styles = theme => ({
  root: {
  }
})

export default withStyles(styles)(({ children, ...props }) => (
  <List>
    <ListItem><a href="https://coil.com">Coil</a></ListItem>
    <ListItem>Do you know another provider? <a href="https://github.com/interledger/webmonetization.org/edit/master/src/components/Providers.js">Make a PR</a></ListItem>
  </List>
))