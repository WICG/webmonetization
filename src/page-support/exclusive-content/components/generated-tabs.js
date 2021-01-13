import React from 'react'

import { AppBar, Tabs, Tab, Box } from '@material-ui/core'
import { DependentScript } from './dependent-script'
import { IndependentScript } from './independent-script'

export function GeneratedTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div>
        <AppBar 
          position='static'
          color='none'
          style={{boxShadow: "none"}}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
          >
            <Tab label='Dependencies' />
            <Tab label='No Dependencies' />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <DependentScript />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <IndependentScript />
        </TabPanel>
      </div>
    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return <div {...other}>{value === index && <Box p={3} style={{padding: '24px 0 24px 0'}}>{children}</Box>}</div>
}
