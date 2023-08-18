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
    <div className={styles.chartWrapper}>
      <PieChart
        className={styles.revShareChart}
        style={{ width: '100%', height: '250' }}
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
    </div>
  )
}
