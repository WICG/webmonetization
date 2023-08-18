import { PieChart } from 'react-minimal-pie-chart'
import { useShares } from '../state/_index'
import { sharesToChartData } from '../lib/_index'
import styles from '../styles.module.css'

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
      className={styles.revShareChart}
      style={{ height: '250px', width: '100%' }}
      data={chartData}
      label={genLabel}
      radius={40}
      labelStyle={() => ({
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '6px',
      })}
      labelPosition={112}
    />
  )
}
