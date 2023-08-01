import { PieChart } from 'react-minimal-pie-chart'
import { useShares } from '../state/_index'
import { sharesToChartData } from '../lib/_index'

function genLabel({ dataEntry }) {
  return dataEntry.title
}

export function RevshareChart() {
  const [shares] = useShares()
  const chartData = sharesToChartData(shares)

  if (!chartData.length) {
    return <></>
  }

  return (
    <PieChart
      className='revshareChart'
      data={chartData}
      style={{ width: '100%', height: 300 }}
      radius={30}
      label={genLabel}
      labelStyle={() => ({
        fill: '#000',
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '5px',
      })}
      labelPosition={112}
    />
  )
}
