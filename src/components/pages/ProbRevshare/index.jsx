import { SharesProvider, ViewProvider } from './state/_index'
import { ActiveView } from './components/_active-view'

export default function ProbRevshare() {
  return (
    <ViewProvider>
      <SharesProvider>
        <ActiveView />
      </SharesProvider>
    </ViewProvider>
  )
}
