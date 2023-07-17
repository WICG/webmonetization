import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import { Tabs, Tab } from '@mui/material'
import { IndependentScript } from './_independent-script'
import styles from '../styles.module.css'

export function GeneratedTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const DependentScript = () => {
    const script = `<script src="https://webmonetization.org/js/exclusive-content.js"></script>`
    return <CodeBlock className='language-html'>{script}</CodeBlock>
  }

  return (
    <div className='script-tabs'>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
      >
        <Tab label='Dependencies' />
        <Tab label='No Dependencies' />
      </Tabs>
      <TabPanel value={value} index={0}>
        {DependentScript()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IndependentScript />
      </TabPanel>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index } = props
  return (
    <>{value === index && <div className={styles.scriptTab}>{children}</div>}</>
  )
}
