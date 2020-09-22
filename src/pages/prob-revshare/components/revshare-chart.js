import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

import { useShares } from '../state'
import { sharesToChartData } from '../lib'

function genLabel ({ dataEntry }) {
  return dataEntry.title
}

export function RevshareChart () {
  const [ shares ] = useShares()
  const chartData = sharesToChartData(shares)

  if (!chartData.length) {
    return <PieChart
      className='revshareChart'
      data={[
        { value: 1, color: '#E7E8E9' }
      ]}
      style={{ width: 300, height: 300 }}
      radius={30}
    />
  }

  return <PieChart
    className='revshareChart'
    data={chartData}
    style={{ width: 300, height: 300, objectFit: 'fill' }}
    radius={30}
    label={genLabel}
    labelStyle={() => ({
      fill: '#000',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '5px'
    })}
    labelPosition={112}
  />
}
